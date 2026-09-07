// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/homepage': '/',
    '/services/cosmetic-dentistry': '/cosmetic-dentistry',
    '/contact': '/contact-us',
    '/about': '/about-us',
    '/blog/soft-tissue-management': '/blogs/soft-tissue-management',
  },
});
