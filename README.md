# Claude Code for designers

A slide deck that introduces designers to Claude Code and AI-assisted development. Built with React, Vite, and Tailwind CSS v4.

## Getting started

You'll need two things installed on your Mac before you begin:

1. **Node.js** - download and install from [nodejs.org](https://nodejs.org/) (grab the LTS version)
2. **A terminal** - the built-in Terminal app works fine (search for "Terminal" in Spotlight)

### Running the app locally

Open Terminal, then run these commands one at a time:

```bash
# Navigate to the project folder
cd path/to/claude-code-for-designers

# Install dependencies (only needed the first time)
npm install

# Start the local dev server
npm run dev
```

After running `npm run dev`, you'll see a URL like `http://localhost:5173` in your terminal. Open that in your browser and you're in.

The dev server hot-reloads, so any changes you save will show up immediately in the browser.

### Navigating the deck

- **Arrow keys** (left/right) to move between slides
- **Tap** left/right side of the screen on mobile
- **Hamburger menu** (top-left) to open the table of contents
- URL hash updates as you navigate, so you can share links to specific slides

### Building for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder that can be deployed anywhere.

## Project structure

```
src/
  components/   - reusable UI pieces (CodeBlock, Terminal, Callout, etc.)
  hooks/        - navigation and deck logic
  slides/       - one file per slide (Slide00Title.jsx through Slide15GettingStarted.jsx)
  styles/       - design tokens, base styles, animations, syntax highlighting
  App.jsx       - main app shell with progress bar, nav, and TOC
  main.jsx      - entry point
```

## Tech stack

- **React 19** - component framework
- **Vite** - dev server and build tool
- **Tailwind CSS v4** - all styling via inline utility classes
- **Google Fonts** - IBM Plex Sans, IBM Plex Mono, Space Mono
