# Aveniq Technologies — Website

Plain **React.js** (JavaScript) website built with Vite, React Router and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build      # output goes to /dist
npm run preview    # preview the production build
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, cPanel, etc.).
`public/_redirects` makes page links like `/about` work on Netlify. On other hosts,
point all routes to `index.html` (SPA fallback).

## Project structure

```
index.html                 Page <head> (title, SEO meta, fonts, favicon)
src/
  main.jsx                 App entry
  App.jsx                  Routes: / /about /services /contact /privacy /terms + 404
  styles.css               Tailwind + design tokens
  pages/                   One file per page
  components/site/         Navbar, Footer, NetworkVisual, AveniqLogo, primitives
  components/ErrorBoundary.jsx
  lib/utils.js             cn() class helper
  lib/seo.js               Sets each page's title / meta tags
public/                    Favicon, logo mark, manifest, robots.txt, _redirects
```
