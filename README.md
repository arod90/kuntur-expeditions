# Kuntur Expeditions

A demo marketing site for **Kuntur Expeditions** — small-group journeys across Ecuador's four worlds (the Andes, the Amazon, the Galápagos, and the colonial highlands). Built as a portfolio piece for [Unnati Works](https://github.com/arod90/Unnati-Works).

Ported from a Claude Design concept into a real, performance-first **Next.js** app.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **next/image** on every photograph — AVIF/WebP, responsive sizes, blur placeholders, lazy-loading
- **next/font** self-hosting Manrope + IBM Plex Mono (no external request, no layout shift)
- Plain CSS design tokens (cinematic teal-black + amber) — no CSS framework
- Every page statically prerendered (SSG); zero client-side data fetching

## Routes

| Route | Page |
|---|---|
| `/` | Home — hero, four-worlds, wildlife gallery, how-it-works, featured departures |
| `/expeditions` | All departures + region filters |
| `/expeditions/[id]` | Expedition detail — itinerary, sticky booking panel, gallery (SSG per expedition) |
| `/destinations` | Ecuador region by region |
| `/guides` | Brand story + guide roster |
| `/contact` | Enquiry form (client-side) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.js            Root layout: fonts, metadata, <SiteChrome>
  SiteChrome.js        Fixed nav + scroll container + route transitions
  globals.css          Design tokens + motion keyframes + base styles
  page.js              /              -> HomeScreen
  expeditions/         /expeditions, /expeditions/[id]
  destinations|guides|contact/
components/
  ds/                  Design system (Button, Hero, NavBar, ExpeditionCard, …)
  shared/              Reveal, Section, Footer, Figure
  screens/             One component per page
lib/
  images.js            Static image imports (next/image sources)
  expeditions.js       Expedition data
  useKunturNav.js      Label -> route navigation
assets/img/            Photography (imported + optimized by next/image)
```

## Design provenance

Design and photography from a Claude Design concept. This repo is a faithful,
performance-oriented port: the visual design and content are preserved, the
original in-browser Babel + CDN React runtime is removed, images run through
`next/image`, and every screen is a statically-rendered Next.js route.
