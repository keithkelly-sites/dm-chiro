import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dm-chiro.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Sora',
      cssVariable: '--font-display',
      weights: [300, 400, 600, 700, 800],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
