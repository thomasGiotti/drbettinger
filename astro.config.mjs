// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Remplacer par le nom de domaine définitif du site avant mise en production.
  site: 'https://www.exemple-cabinet.fr',
  vite: {
    plugins: [tailwindcss()]
  }
});