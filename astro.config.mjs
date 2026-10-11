// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://drbettinger.vercel.app',
  integrations: [sitemap()],
  // CSS et scripts toujours servis en fichiers externes (jamais inlinés dans
  // le HTML) : la Content-Security-Policy de vercel.json peut ainsi se passer
  // de 'unsafe-inline' pour script-src et style-src.
  build: {
    inlineStylesheets: 'never'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0
    }
  }
});