# Piyush Kumar - Portfolio & Resume

Personal portfolio website built with Astro, Tailwind CSS, and TypeScript.

**Live:** https://piyushkumar0.vercel.app

## Tech Stack

- [Astro 5](https://astro.build/) - Static site framework
- [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first styling
- [TypeScript](https://www.typescriptlang.org/) - Type-safe data files
- [Vercel](https://vercel.com/) - Hosting with auto-deploy on push
- [Vercel Analytics](https://vercel.com/analytics) & [Speed Insights](https://vercel.com/docs/speed-insights) - Performance monitoring

## Project Structure

```text
/
├── public/              # Static assets (images, logos, favicon)
├── src/
│   ├── components/
│   │   ├── global/      # Navbar, Footer
│   │   ├── sections/    # Hero, About, Experience, Skills, Projects, Achievements, Education, Contact
│   │   └── ui/          # Badge, SectionHeading, TerminalWindow
│   ├── data/            # TypeScript data files (experience, skills, projects, etc.)
│   ├── layouts/         # BaseLayout (HTML shell, SEO meta, global scripts)
│   ├── pages/           # index.astro (single-page entry point)
│   └── styles/          # global.css, animations.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## Deployment

Deployed on Vercel. Pushes to `main` trigger automatic builds and deployments.
