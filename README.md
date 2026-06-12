# Which Way is Home

A contemplative website pointing people home to God through Jesus Christ —
[www.whichwayishome.com](https://www.whichwayishome.com).

Built with [Astro](https://astro.build): static output, optimized images, zero JS by default.

## Develop

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  assets/            Source images (Astro optimizes these at build time)
  data/topics.ts     Topic registry: titles, slugs, SEO descriptions, images, grid order
  layouts/
    BaseLayout.astro Site chrome, SEO meta/OG/JSON-LD, analytics, page transitions
    TopicLayout.astro Shared topic-page layout (hero, verse styling, CTA, prev/next)
  pages/             One .astro file per page; URL = file path
  styles/global.css  Design system (palette, typography, buttons, scroll reveals)
public/
  Topics/*.html      Redirect stubs so old /Topics/<Name>.html URLs still work
  robots.txt, favicon.svg, og-default.jpg
amplify.yml          AWS Amplify build settings
```

### Adding a new topic

1. Add the image to `src/assets/topics/`.
2. Register it in `src/data/topics.ts` (slug, title, description, image) —
   add it to `gridTopics` to show it on the homepage grid.
3. Create `src/pages/topics/<slug>.astro` wrapping `<TopicLayout slug="<slug>">` around the content.

## Deploying on AWS Amplify

The repo includes `amplify.yml`, so the existing GitHub → Amplify pipeline keeps
working. After merging this branch into the production branch, verify once in the
Amplify console (App settings → Build settings) that the build spec is being read
from the repo and that **Node 20+** is used.

Old URLs (`/Topics/God.html` etc.) are handled by static redirect stub pages.
For proper 301 redirects (slightly better for SEO), you can optionally add
rewrites in the Amplify console (App settings → Rewrites and redirects), e.g.:

```json
[
  { "source": "/Topics/God.html", "target": "/topics/god/", "status": "301" },
  { "source": "/Topics/Heaven_part2.html", "target": "/topics/invitation/", "status": "301" }
]
```

(Pattern: `/Topics/<Old_Name>.html` → `/topics/<kebab-slug>/`; `Heaven_part2` → `invitation`.)

## SEO

- Unique `<title>` + meta description per page (`src/data/topics.ts`)
- Canonical URLs, Open Graph + Twitter cards, JSON-LD structured data
- `sitemap-index.xml` generated at build, referenced in `robots.txt`
- Responsive WebP images generated from the originals at build time
