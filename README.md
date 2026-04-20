# AppealPCN.co.uk — Astro Site

Free PCN appeal letter templates for London airport drop-off charges.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (live preview at http://localhost:4321)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro        # Shared HTML shell, head, header, footer
├── components/
│   ├── AppealLetter.astro      # Reusable letter card with copy button
│   ├── AirportSidebar.astro    # Sidebar with tips + airport nav
│   └── AdSlot.astro            # AdSense placeholder (swap in your units)
├── pages/
│   ├── index.astro
│   ├── heathrow-drop-off-charge-appeal.astro
│   ├── gatwick-drop-off-charge-appeal.astro
│   ├── stansted-drop-off-charge-appeal.astro
│   └── luton-drop-off-charge-appeal.astro
└── styles/
    └── global.css
```

## Deploying to Cloudflare Pages (free)

1. Push this repo to GitHub
2. Go to https://pages.cloudflare.com → Create a project → Connect to Git
3. Select your repo and set:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click Save and Deploy

Your site will be live in ~2 minutes. Add your custom domain under
Settings → Custom Domains.

## Adding Google AdSense

Once your AdSense account is approved:

1. Open `src/layouts/BaseLayout.astro`
2. Uncomment the `<script>` tag and replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID
3. Open `src/components/AdSlot.astro`
4. Replace the placeholder comment blocks with your actual `<ins>` ad units

## Adding Google Analytics

In `src/layouts/BaseLayout.astro`, add inside `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Submitting your sitemap

After your first deploy, go to:
https://search.google.com/search-console

Add your property and submit:
`https://appealpcn.co.uk/sitemap-index.xml`

Astro generates this automatically on every build.

## Adding new pages (e.g. London City Airport)

1. Copy an existing airport `.astro` page
2. Update the `title`, `description`, `canonical`, `schema` variables at the top
3. Update the letter body content and grounds sections
4. Add the airport to the `nav` array in `BaseLayout.astro` and the `airports` array in `AirportSidebar.astro`

That's it — the sitemap updates automatically.
