# Claude Code for Designers — Project Documentation

> **Note:** This file is a real, working CLAUDE.md — the kind of document discussed in the presentation itself. It serves double duty: it guides Claude Code when making changes to this project, and it's a teaching example for the audience.

## What This Is

A single-page web presentation that teaches product/UX designers how to use Claude Code. It's built as a keyboard-navigable slide deck in a single HTML file. The fact that this project was built entirely with Claude Code is the point — the repo structure, commit history, and this file are all part of the lesson.

## Audience

Product/UX designers with little to no terminal or coding experience. They use Figma daily. They may have dabbled in HTML/CSS but have never shipped code.

## Tech Constraints

- **Single HTML file** (`index.html`) — all CSS and JS are embedded inline
- **No build tools, no frameworks, no package managers**
- **No external dependencies** except Google Fonts loaded via `<link>` tags
- **Vanilla JavaScript only** for all interactions
- This simplicity is intentional. "See? It's just one file."

## Design System

### Colors

| Token           | Value                        | Usage                      |
|-----------------|------------------------------|----------------------------|
| `--bg`          | `#0a0a0f`                    | Page background            |
| `--bg-elevated` | `#141419`                    | TOC panel, raised surfaces |
| `--bg-surface`  | `#1a1a22`                    | Terminal mockups, cards     |
| `--text`        | `#e8e4dd`                    | Primary text               |
| `--text-muted`  | `#8a8680`                    | Secondary/body text        |
| `--text-dim`    | `#5a5754`                    | Tertiary, labels           |
| `--accent`      | `#4d9fff`                    | Links, highlights, accents |
| `--accent-glow` | `rgba(77, 159, 255, 0.15)`   | Subtle accent backgrounds  |
| `--code-bg`     | `#0d0d14`                    | Code block backgrounds     |
| `--code-border` | `#2a2a35`                    | Code block borders         |

### Typography

- **Headings**: `'Space Mono', monospace` — bold, technical aesthetic
- **Body text**: `'IBM Plex Sans', sans-serif` — clean, readable
- **Code**: `'IBM Plex Mono', monospace` — used in code blocks and terminal mockups
- **Scale**: 8px base. Headings ~2.5rem, body ~1.125rem, code ~0.875rem

### Spacing

8px base unit. Use the CSS custom properties `--space-1` (8px) through `--space-8` (96px).

### Motion

- Slide transitions: 500-600ms ease with fade + subtle vertical drift
- Content entrance: staggered fade-in on child elements
- Keep it subtle and purposeful. No bouncing, parallax, or swooping.

## Architecture

### HTML Structure

```
<body>
  .progress-bar > .progress-fill     ← thin bar at top of viewport
  button.menu-toggle                  ← hamburger icon, top-left
  nav.toc-panel                       ← slide-out table of contents
  main.deck > section.slide[0-14]     ← all 15 slides
  .slide-counter                      ← "3 / 14" indicator, bottom-right
</body>
```

### Slides

Each slide is a `<section class="slide" data-slide="N">`. The active slide gets class `slide--active` (opacity 1, visible). All others are hidden.

### Navigation

- **Keyboard**: ArrowRight/Space = next, ArrowLeft = prev, Escape = toggle TOC
- **Touch**: Swipe or tap left/right edges
- **URL hash**: `#slide-N` for direct linking
- **TOC panel**: Clickable slide titles, accessible via menu icon

### Syntax Highlighting

Manual `<span>` classes in code blocks (no external library):
- `.tk` — keyword (accent blue)
- `.ts` — string (warm, #e6a07c)
- `.tc` — comment (dim)
- `.tt` — tag name
- `.ta` — attribute
- `.tp` — punctuation (muted)

## Content Structure

15 slides (numbered 0-14):

0. Title
1. Table of Contents
2. What Is an App, Really?
3. The Terminal
4. Git: Your Safety Net
5. The New Employee Problem
6. CLAUDE.md — Your Onboarding Doc
7. The Context Window
8. Plan Mode
9. Prompt as Design Spec
10. Figma MCP
11. Reading Code (You Already Can)
12. The Feedback Loop
13. Where This Goes
14. Getting Started

## How to Modify

### Adding a slide
1. Add a new `<section class="slide" data-slide="N">` inside `<main class="deck">`
2. Update `data-slide` numbers on subsequent slides
3. Add entry to the TOC panel `<nav>`
4. Update `totalSlides` in the JS

### Editing content
Each slide's content is self-contained within its `<section>`. Find the slide by its `data-slide` attribute.

### Changing colors or fonts
All design tokens are CSS custom properties on `:root`. Change them there and they cascade everywhere.

## Quality Standards

- This presentation is shown to designers. Visual quality must be high.
- Typography must be precise. Spacing must be intentional. Nothing should feel default.
- Code examples must be syntactically correct and genuinely useful.
- Technical terms should be explained immediately when introduced.
- Works on desktop (1440px+) for presenting and mobile (375px+) for reference.
