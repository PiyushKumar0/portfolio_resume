# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website for Piyush Kumar built with Astro 5, Tailwind CSS 3, and TypeScript. Single-page site with a dark-themed design (navy/cyan/violet color palette).

## Commands

- **Dev server:** `npm run dev` (runs `astro dev`)
- **Build:** `npm run build` (runs `astro build`, output in `dist/`)
- **Preview production build:** `npm run preview`

No test framework or linter is configured.

## Architecture

Single-page Astro site — one route (`src/pages/index.astro`) composes all sections:

- **Layout:** `src/layouts/BaseLayout.astro` — HTML shell with SEO meta, theme init script, scroll progress bar, IntersectionObserver-based scroll animations (`.anim` → `.is-visible`), animated number counters (`[data-target]`), and Vercel Analytics + Speed Insights.
- **Sections** (`src/components/sections/`): Hero, About, Experience, Skills, Projects, Achievements, Education, Contact — rendered in that order.
- **Global components** (`src/components/global/`): Navbar (with active-link highlighting via IntersectionObserver), Footer.
- **Reusable UI** (`src/components/ui/`): Badge, SectionHeading, TerminalWindow.
- **Data files** (`src/data/`): TypeScript modules (`experience.ts`, `skills.ts`, `projects.ts`, `achievements.ts`, `education.ts`) exporting typed arrays consumed by section components.
- **Styles:** `src/styles/global.css` and `src/styles/animations.css`, plus Tailwind utility classes.

## Design System

Custom Tailwind theme in `tailwind.config.mjs`:
- Dark mode via `class` strategy (toggle stored in `localStorage`)
- Custom colors: `abyss`, `navy`, `navy-mid`, `accent-cyan`, `accent-violet`, `ice`, `slate-mist`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono)
- Custom animations: `float`, `pulse-ring`, `fade-in-up`, `drift`, `shimmer`

## Key Conventions

- Content is data-driven: add/edit entries in `src/data/*.ts` files rather than modifying section component markup directly.
- Site URL configured as `https://piyushkumar0.vercel.app` in `astro.config.mjs` (also referenced in BaseLayout SEO meta).
- Deployed on Vercel (auto-deploys on push to `main`).
- Node >= 18.17.1 required.
