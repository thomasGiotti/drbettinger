// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Remplacer par le nom de domaine définitif du site avant mise en production.
  site: 'https://www.exemple-cabinet.fr',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});