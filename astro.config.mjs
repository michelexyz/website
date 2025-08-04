// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({  // can add the server option here if needed to render on server side
  adapter: cloudflare(),
  site: 'https://website-c1d.pages.dev/', // replace with your actual site URL
});