// Simple citation processor: replace [@key] or [@k1; @k2] with [1], [1,2], ... linking to references
// and build a References HTML list from a BibTeX text.

type BibEntry = {
  key: string;
  type: string;
  fields: Record<string, string>;
};

function parseBibTex(bibText: string): Record<string, BibEntry> {
  const entries: Record<string, BibEntry> = {};
  // Split on entries starting with @
  const parts = bibText.split(/\n(?=@)/g).filter(Boolean);
  for (const part of parts) {
    const headerMatch = part.match(/^@([^{]+)\{\s*([^,\s]+)\s*,/i);
    if (!headerMatch) continue;
    const [, typeRaw, key] = headerMatch;
    const type = typeRaw.trim().toLowerCase();
    const body = part.slice(headerMatch[0].length).replace(/}\s*$/s, '');
    const fields: Record<string, string> = {};
    // Very tolerant field parser: field = { ... } or field = "..."
    const fieldRegex = /(\w+)\s*=\s*(\{([^{}]*|\{[^}]*\})*\}|"[^"]*")\s*,?/gms;
    let m: RegExpExecArray | null;
    while ((m = fieldRegex.exec(body)) !== null) {
      const name = m[1].toLowerCase();
      let val = m[2] || '';
      // strip wrapping braces or quotes
      if ((val.startsWith('{') && val.endsWith('}')) || (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      fields[name] = val.trim();
    }
    entries[key] = { key, type, fields };
  }
  return entries;
}

function formatAuthors(raw?: string): string | undefined {
  if (!raw) return undefined;
  // Authors separated by ' and '
  const parts = raw.split(/\s+and\s+/i).map((a) => a.trim()).filter(Boolean);
  const formatted = parts.map((a) => {
    // Try "Last, First" or "First Last"
    if (a.includes(',')) {
      const [last, first] = a.split(',').map((s) => s.trim());
      return first ? `${last} ${first}` : last;
    }
    const segs = a.split(/\s+/);
    if (segs.length > 1) return `${segs[segs.length - 1]} ${segs.slice(0, -1).join(' ')}`;
    return a;
  });
  return formatted.join(', ');
}

function formatReference(entry?: BibEntry): string {
  if (!entry) return 'Unknown reference';
  const f = entry.fields;
  const authors = formatAuthors(f.author);
  const title = f.title;
  const year = f.year || f.date || '';
  const where = f.journal || f.booktitle || f.publisher || '';
  const doi = f.doi ? ` https://doi.org/${f.doi}` : '';
  const url = f.url && !doi ? ` ${f.url}` : '';
  const bits = [authors, title, where, year].filter(Boolean).join('. ');
  return `${bits}.${doi || url}`.trim();
}

function compressSequence(nums: number[]): string {
  // Optional: compress sequences like 1,2,3 to 1–3; keep simple for now
  nums.sort((a, b) => a - b);
  let out: string[] = [];
  let start = nums[0];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (n === prev + 1) {
      prev = n;
      continue;
    }
    if (start === prev) out.push(String(start));
    else out.push(`${start}\u2013${prev}`);
    start = prev = n;
  }
  if (start !== undefined) {
    if (start === prev) out.push(String(start));
    else out.push(`${start}\u2013${prev}`);
  }
  return out.join(', ');
}

export function processCitationsMarkdown(md: string, bibText: string): { markdown: string; referencesHtml: string; keyToNumber: Record<string, number> } {
  const bib = parseBibTex(bibText);
  const keyToNumber = new Map<string, number>();
  const order: string[] = [];

  // Replace citation patterns
  const replaced = md.replace(/\[@([^\]]+)\]/g, (full, inner) => {
    const keys = inner
      .split(/\s*[;,]\s*|\s+/)
      .map((k: string) => k.replace(/^@/, '').trim())
      .filter(Boolean);
    const numbers: number[] = [];
    for (const k of keys) {
      if (!keyToNumber.has(k)) {
        keyToNumber.set(k, keyToNumber.size + 1);
        order.push(k);
      }
      numbers.push(keyToNumber.get(k)!);
    }
    // Build links [1, 2] each number linking to the target li
    const links = numbers
      .sort((a, b) => a - b)
      .map((n) => `<a href="#ref-${n}">${n}</a>`) // keep separate links
      .join(', ');
    return `[${links}]`;
  });

  // Build references HTML list
  const items = order.map((k, idx) => {
    const entry = bib[k];
    const text = formatReference(entry);
    return `<li id="ref-${idx + 1}">${text}</li>`;
  });
  const referencesHtml = items.length ? `<ol id="references">${items.join('\n')}</ol>` : '';
  return { markdown: replaced, referencesHtml, keyToNumber: Object.fromEntries(keyToNumber) };
}
