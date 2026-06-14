# Aditya Dhonde — AI Engineer Portfolio

A single-page, animation-rich portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion and Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## What's included

- **Hero** — animated SVG "neural infinity" constellation, rotating role titles, profile photo (`public/profile.jpeg`)
- **About** — career timeline + animated counters + education
- **Skills** — categorized skill bars (Programming, ML, Data Analytics, Generative AI, Cloud)
- **AI Innovation Lab** — 8 domain cards (ML, Deep Learning, CV, NLP, GenAI, RAG, Agents, Analytics)
- **Projects** — 5 projects with 3D tilt cards and a details modal
- **Research** — IRJMETS publication card with abstract & citation
- **Experience & Certifications**
- **Contact** — validated contact form with success state
- **Footer** with back-to-top

## Customize

- All content lives in `lib/data.ts` — edit names, links, projects, skills, etc. in one place.
- Colors/fonts/animations are defined in `tailwind.config.js` and `app/globals.css`.
- To add a real resume download, place `resume.pdf` in `/public` (the Hero button links to `/resume.pdf`).
- Project demo links currently point to `#` — replace with live URLs in `lib/data.ts`.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google` and require network access at build time.
- Respects `prefers-reduced-motion`.
