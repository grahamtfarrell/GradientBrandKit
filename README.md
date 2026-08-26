# Gradient MGMT Brand Guidelines

A long-scrolling brand site for Gradient MGMT: all 54 guideline slides, a sticky left nav, and a downloadable brand kit.

## Run locally

Requires Node 20.9+.

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Download zip

The Download button serves `public/downloads/gradient-brandkit.zip`.

Replace that file with the full client brand-kit zip when you have it. No code change required.

## Slides

Optimized WebP slides live in `public/slides/`. To rebuild them from the original PNGs:

```bash
npm run optimize-slides
```
