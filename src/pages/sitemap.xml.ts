import type { APIRoute } from 'astro';

const pages = [
  { url: '', lastmod: '2026-06-15', changefreq: 'monthly', priority: '1.0' },
  { url: 'about/', lastmod: '2026-04-15', changefreq: 'yearly', priority: '0.6' },
  { url: 'contact/', lastmod: '2026-04-15', changefreq: 'yearly', priority: '0.6' },
  { url: 'privacy/', lastmod: '2026-06-15', changefreq: 'yearly', priority: '0.5' },
  { url: 'terms/', lastmod: '2026-06-15', changefreq: 'yearly', priority: '0.5' },
  { url: 'guides/', lastmod: '2026-06-15', changefreq: 'weekly', priority: '0.8' },
  { url: 'guides/keeper-liability/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/elliott-v-loake-why-it-doesnt-make-you-liable-as-the-keeper/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/what-is-pofa-and-why-it-matters/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/relevant-land-airport-pcns/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/bpa-code-of-practice-signage/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/five-minute-consideration-period/', lastmod: '2026-11-24', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/what-is-popla/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/thornton-v-shoe-lane-parking/', lastmod: '2026-06-15', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/what-responses-to-expect/', lastmod: '2026-11-24', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/fake-airport-pcn-payment-sites/', lastmod: '2026-10-01', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/driving-licence-request/', lastmod: '2026-11-24', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/what-is-the-ias/', lastmod: '2026-11-24', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/fight-back-airport-drop-off-charges/', lastmod: '2026-11-26', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/report-times24-code-breach/', lastmod: '2026-11-26', changefreq: 'monthly', priority: '0.7' },
  { url: 'guides/new-private-parking-code/', lastmod: '2026-11-26', changefreq: 'monthly', priority: '0.7' },
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
