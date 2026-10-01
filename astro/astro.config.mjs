// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production domain. Sitemap and canonical URLs use this even while the site is on the staging host.
  site: 'https://brianmitchelldds.com',
  integrations: [icon(), sitemap()],
  // Mirror the live WordPress site: every page URL ends with a trailing slash.
  trailingSlash: "always",
  build: {
    // The stylesheet is ~12KB; inlining it removes a render-blocking request from the critical path.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
