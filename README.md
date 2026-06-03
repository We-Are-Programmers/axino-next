# Axino Next.js

Next.js 15 (App Router) conversion of the Axino SaaS HTML template — React components, **Swiper React**, **AOS**, and hooks (no jQuery).

## Stack

- Next.js 15 + React 19 + TypeScript
- `swiper` / `swiper/react` for carousels
- `aos` for scroll animations
- Custom hooks: preloader, back-to-top, sticky header, count-up
- Original template CSS in `public/css/`

## Commands

```bash
cd axino-next
npm install
npm run copy-assets   # sync images/fonts/css from parent ../ folder
npm run dev
```

`predev` and `prebuild` run `copy-assets` automatically.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Task Management SaaS (home 01) |
| `/home/app-landing` | Home 02 + `style-2.css` |
| `/home/ai-copywriting` | Home 03 + `style-3.css` |
| `/home/automation-saas` | Home 04 + `style-4.css` |
| `/team`, `/team/[slug]` | Team grid & details |
| `/shop`, `/shop/sidebar`, `/shop/[slug]` | Shop listing & product |
| `/shop/cart`, `/shop/checkout` | Cart & checkout |
| `/about`, `/contact`, `/pricing`, `/faq`, `/blog`, `/services` | Inner pages |

## Structure

```
src/
├── app/              # App Router pages
├── components/
│   ├── home/         # Home sections + variants/
│   ├── layout/       # Header, Footer, PageWrapper
│   ├── shop/         # Product grid, cart
│   ├── team/         # Team cards
│   ├── ui/           # Swiper, buttons, section title
│   └── providers/    # AOS + sticky header
├── hooks/            # useAos, usePreloader, useCountUp, …
└── lib/data/         # Navigation & content data
```

## Images

The downloaded HTML package may only include a subset of images. After obtaining the full ThemeForest assets, place them in `../images/` (parent folder) and run:

```bash
npm run copy-assets
```

## Migration notes

- **Removed**: jQuery, `script.js`, and the full `public/js/` dependency chain for core UI.
- **Replaced with**: React state (mobile menu, FAQ, pricing tabs, shop filters, automation feature tabs) and Swiper React.
- Optional: keep `public/js/` for pages that still need Fancybox/GSAP text reveal; those can be migrated incrementally.
