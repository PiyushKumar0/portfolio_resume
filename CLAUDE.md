# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website for Piyush Kumar built with Astro 5, Tailwind CSS 3, and TypeScript. Single-page site with a dark-themed design (navy/cyan/violet color palette). Deployed on Vercel with auto-deploys on push to `main`.

## Commands

- **Dev server:** `npm run dev` (runs `astro dev`)
- **Build:** `npm run build` (runs `astro build`, output in `dist/`)
- **Preview production build:** `npm run preview`

No test framework or linter is configured.

## Architecture

Single-page Astro site — one route (`src/pages/index.astro`) composes all sections:

- **Layout:** `src/layouts/BaseLayout.astro` — HTML shell with SEO meta, theme init script, scroll progress bar, IntersectionObserver-based scroll animations (`.anim` → `.is-visible`), animated number counters (`[data-target]`), and Vercel Analytics + Speed Insights.
- **Sections** (`src/components/sections/`): Hero, About, Experience, Skills, Projects, Achievements, Education, Contact — rendered in that order.
- **Global components** (`src/components/global/`): Navbar (with active-link highlighting via IntersectionObserver, theme toggle with fade transition), Footer.
- **Reusable UI** (`src/components/ui/`): Badge (multi-variant), SectionHeading (overline + title + gradient underline).
- **Data files** (`src/data/`): TypeScript modules (`experience.ts`, `skills.ts`, `projects.ts`, `achievements.ts`, `education.ts`) exporting typed arrays consumed by section components.
- **Styles:** `src/styles/global.css` (design tokens, theme transition, card styles) and `src/styles/animations.css` (scroll-triggered animations, typewriter cursor, particles), plus Tailwind utility classes.

## Design System

Custom Tailwind theme in `tailwind.config.mjs`:
- Dark mode via `class` strategy (toggle stored in `localStorage`, with fade transition via `.theme-transitioning` class in global.css)
- Custom colors: `abyss`, `navy`, `navy-mid`, `accent-cyan` (#00D4FF), `accent-violet` (#7C3AED), `accent-teal` (#0EA5E9), `ice`, `slate-mist`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono)
- Custom animations: `float`, `pulse-ring`, `fade-in-up`, `drift`, `shimmer`
- CSS custom properties for theme colors defined in `global.css` (:root for light, .dark for dark)

## Key Conventions

- **Content is data-driven:** add/edit entries in `src/data/*.ts` files rather than modifying section component markup directly. Each data file exports a typed array and its interface.
- **No emoji in professional sections.** Skills, achievements, section headers, and badges use text/SVG icons only.
- **Section headings** use the `SectionHeading` component with an `overline` prop (plain uppercase text, no `//` prefix) and a `title` prop.
- **Responsive breakpoints matter:** Hero uses `md` (768px) for side-by-side layout (text + avatar), `lg` (1024px) for full-height hero. Navbar shows desktop nav at `md`, resume button at `lg`.
- **Resume PDF** is self-hosted at `public/resources/Piyush_Kumar_Resume.pdf` and opens in a new tab (not download).
- **Project thumbnails** are optional — stored in `public/resources/` and referenced via the `thumbnail` field in `projects.ts`. Cards without thumbnails show `longDescription` instead.
- **Experience accordion:** Gemini Solutions sub-projects use native `<details>`/`<summary>` for collapse (first project expanded, rest collapsed).
- Site URL: `https://piyushkumar0.vercel.app` (configured in `astro.config.mjs` and BaseLayout SEO meta).
- Node >= 18.17.1 required.
