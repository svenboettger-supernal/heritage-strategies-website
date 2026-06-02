# Heritage Strategies LLC — marketing website

Editorial, fiduciary-posture marketing site for Heritage Strategies LLC, the estate-planning multi-family office founded in 2009. Built by [Supernal AI](https://getsupernal.ai) per the Heritage Strategies front-end website SOW.

## Stack

- [Astro 5](https://astro.build) — content-first static site generator
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling, brand tokens only
- TypeScript (strict)
- MDX for editorial content
- GitHub Pages deployment via Actions

## Local development

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to dist/
npm run preview      # serve the production build locally
```

## Project structure

```
src/
├── components/         shared brand components (Header, Footer, WaxSeal, etc.)
│   └── pages/          page-specific components, grouped by route
├── content/            content collections (team, services, press, insights, roles, testimonials)
├── layouts/            Layout.astro base shell
├── pages/              file-based routes
└── styles/             global.css with brand tokens

public/                 static assets (favicons, og image, wax-seal.svg, robots.txt)
```

## Brand discipline

Color, typography, mark, and voice are governed by the Heritage brand prompt. Key rules:

- Action color (buttons, links, focus rings) is **Navy** — never copper
- Copper is **identity-only** — the wax seal, never a button
- Display headings use **Cormorant Garamond**; editorial body uses **EB Garamond**; UI is **Inter**; mono is **JetBrains Mono**
- Buttons are **4px-radius rectangles**, not pills
- No em dashes
- All numeric tables use `font-variant-numeric: tabular-nums`

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

Production URL: <https://svenboettger-supernal.github.io/heritage-strategies-website/>

## License

Proprietary. © Heritage Strategies LLC.
