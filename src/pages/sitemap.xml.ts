import type { APIRoute } from 'astro';

const pages = [
  { url: '', lastmod: '2026-06-15', changefreq: 'monthly', priority: '1.0' },
  { url: 'about/', lastmod: '2026-04-15', changefreq: 'yearly', priority: '0.6' },
  { url: 'contact/', lastmod: '2026-04-15', changefreq: 'yearly', priority: '0.6' },
  { url: 'privacy/', lastmod: '2026-06-15', changefreq: 'yearly', priority: '0.5' },
  { url: 'terms/', lastmod: '2026-06-15', changefreq: 'yearly', priority: '0.5' },
  { url: 'blog/', lastmod: '2026-06-15', changefreq: 'weekly', priority: '0.8' },
  { url: 'blog/what-is-pofa-and-why-it-matters/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'blog/relevant-land-airport-pcns/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'blog/bpa-code-of-practice-signage/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'blog/five-minute-consideration-period/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'blog/what-is-popla/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'blog/thornton-v-shoe-lane-parking/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'blog/what-responses-to-expect/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'heathrow-drop-off-charge-appeal/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.9' },
  { url: 'gatwick-drop-off-charge-appeal/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.9' },
  { url: 'stansted-drop-off-charge-appeal/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.9' },
  { url: 'luton-drop-off-charge-appeal/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.9' },
  { url: 'manchester-drop-off-charge-appeal/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.9' },
  { url: 'birmingham-drop-off-charge-appeal/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.9' },
];

const siteUrl = 'https://appealairportpcn.co.uk';

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}/${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
