// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import starlightThemeNext from 'starlight-theme-next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Cadensio Docs',
      sidebar: [
        {
          label: 'Getting Started',
          link: '/getting-started',
        },
      ],
      plugins: [starlightThemeNext()],
      customCss: ['./src/styles/global.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
