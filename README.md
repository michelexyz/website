
# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📁 Projects structure (custom)

This project uses Astro Content Collections to manage projects under `src/content/projects`.

- Each top‑level project lives in its own folder with an `index.md`:

	```text
	src/content/projects/
	├── master-thesis/
	│   ├── index.md          # Project main page (title + content)
	│   ├── chapter-1.md      # Section (appears under the project page)
	│   └── appendix.md       # Section (appears under the project page)
	└── another-project/
			└── index.md
	```

- Project pages are generated automatically:
	- `/projects` lists only top‑level projects (folders with `index.md`).
	- `/projects/[project]` shows the project page from its `index.md` and lists its sections.
	- `/projects/[project]/[section]` renders each section file.

- Relevant files:
	- `src/pages/projects/index.astro` — lists top‑level projects only.
	- `src/pages/projects/[project].astro` — dynamic route for a single project page.
	- `src/pages/projects/[...slug].astro` — renders individual section pages.
	- `src/components/ProjectPage.astro` — component that renders a project page (lead from `index.md` + sections list).

Tip: add `pubDate` and `tags` to your Markdown frontmatter to enable sorting and filtering.
