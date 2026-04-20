import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appealpcn.co.uk',
  integrations: [sitemap()],
  compressHTML: true,
});
