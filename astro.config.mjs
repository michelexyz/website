// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // can add the server option here if needed to render on server side
  adapter: cloudflare(),

  // replace with your actual site URL
  site: 'https://website-c1d.pages.dev/',

  integrations: [preact()],

  prefetch: {// enable link prefetching (need to add this manually as <a href="/about" data-astro-prefetch>)
    prefetchAll: true
  },
});