# Agri‑Tech Landing Page (Astro)

An Astro-based landing page advertising Agri‑Tech — a Cambodian startup providing an AI-powered chatbot for instant, reliable farming advice in Khmer.

## What’s inside

- `src/components/Hero.astro`: Khmer hero with CTA
- `src/components/Features.astro`: Four key value props
- `src/components/CTA.astro`: Try-the-chat call-to-action
- `src/layouts/Layout.astro`: Base SEO, fonts, header/footer
- `public/logo.svg`: Simple leaf logo used in header

## Run locally

```bash
npm install
npm run dev
```

The dev server will print a local URL (defaults to `http://localhost:4321`).

## Build & preview

```bash
npm run build
npm run preview
```

## Customize

- Update copy (Khmer/English) in `Hero.astro`, `Features.astro`, and `CTA.astro`.
- Replace `public/logo.svg` with your branding. This file is used both in the header and as the favicon (browser tab icon). If you prefer a dedicated favicon, add `public/favicon.png` (32x32/64x64) and update the `<link rel="icon">` in `src/layouts/Layout.astro`.
- Wire the CTA link in `CTA.astro` to your real chat URL/app.

## Tech

- Astro 5 — no runtime JS for the static sections
- Google Fonts: Inter and Noto Sans Khmer
