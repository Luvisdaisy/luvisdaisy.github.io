# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `npm run dev` — start Next.js dev server
- `npm run build` — production build (generates static export in `out/`)
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 with shadcn/ui components (Radix UI primitives)
- **Theme**: Dark mode support via `next-themes`
- **Icons**: lucide-react
- **Animations**: Framer Motion
- **Deployment**: Static export to GitHub Pages (via `out/` directory)

### Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/ui/` — shadcn/ui component library
- `components/` — custom components (Header, Footer, ThemeProvider)
- `lib/utils.ts` — utility functions (cn helper for Tailwind)

### Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/experience` | Experience |
| `/projects` | Projects |
| `/blog` | Blog |
| `/blog/[slug]` | Blog post |
| `/contact` | Contact |

Static data is loaded from files in `app/` directory (no external data source). Uses Next.js static params for dynamic routes.

## Code Style

- **TypeScript**: Strict mode enabled
- **Tailwind**: CSS variables for theming, dark mode via `class` strategy
- **Components**: Use `cn()` utility from `lib/utils.ts` for conditional class merging
