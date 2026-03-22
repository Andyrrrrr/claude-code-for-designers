# Claude Code for designers

Slide deck introducing designers to Claude Code. React + Vite + Tailwind CSS v4.

## Architecture

- Single-page React app, no routing library — slides managed by `useDeck` hook
- All styling uses inline Tailwind v4 utility classes (no CSS modules, no styled-components)
- Design tokens defined in `src/styles/tokens.css` using Tailwind's `@theme` directive
- Minimal global CSS in `base.css` for resets, scrollbar, and selection styles
- Each slide is a standalone component in `src/slides/` (numbered `Slide00` through `Slide18`)
- Reusable layout/content components live in `src/components/`

## Key files

- `src/styles/tokens.css` - color palette, font families (the design system)
- `src/styles/base.css` - imports Tailwind, global resets
- `src/slides/index.js` - slide registry (add/remove/reorder slides here)
- `src/App.jsx` - app shell: progress bar, nav arrows, TOC panel, slide renderer
- `src/components/SlideShell.jsx` - shared slide wrapper (transitions, padding, layout)
- `src/components/SlideInner.jsx` - inner content wrapper with entrance animation

## Design tokens

Accent color is red-orange (`#e07845`). Fonts: Space Mono for headings, IBM Plex Sans for body, IBM Plex Mono for code. Dark background (`#0a0a0f`).

## Commands

- `npm run dev` - start dev server with hot reload
- `npm run build` - production build to `dist/`
- `npm run preview` - preview production build locally

## Conventions

- Sentence case for all UI text
- No manual git operations from Claude — Andy handles git himself
- All new styling should use Tailwind utility classes, not custom CSS
- Slide files are numbered sequentially with two-digit prefixes
- Component names match filenames exactly
