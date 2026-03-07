// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

import remarkGfm from 'remark-gfm';
import rehypeCitation from 'rehype-citation';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // can add the server option here if needed to render on server side
  adapter: cloudflare(),

  // replace with your actual site URL
  site: 'https://michelevannucci.me/',

  integrations: [preact()],

  prefetch: {// enable link prefetching (need to add this manually as <a href="/about" data-astro-prefetch>)
    prefetchAll: true
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});