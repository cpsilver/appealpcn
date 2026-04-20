import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appealairportpcn.co.uk',
  integrations: [sitemap()],
  compressHTML: true,
});
