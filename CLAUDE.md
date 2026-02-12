# CLAUDE.md

## Build & Dev Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview production build locally
- `npm run deploy` — build + deploy to GitHub Pages
- `npm run lint` — run ESLint
- `npm run lint:fix` — run ESLint with auto-fix
- `npm run format` — run Prettier formatting

## Architecture

- **Framework**: React 19 SPA, plain JavaScript (no TypeScript)
- **Build**: Vite 7
- **Routing**: React Router v7 with BrowserRouter
- **Styling**: Tailwind CSS v4 + DaisyUI v5 (themes: cupcake, night, garden, sunset)
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages via `gh-pages` package + GitHub Actions

### Project Structure

- `src/pages/` — page components (Home, Education, Projects, About, Contact)
- `src/components/` — reusable components (Header, Footer, ThemeSelector, etc.)
- `src/components/Layout.jsx` — wraps all routes with Header + Footer
- `public/projects/summary.json` — static project data

### Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/education` | Education |
| `/projects` | Projects |
| `/about` | About |
| `/contact` | Contact |

No backend. No global state management. Static data loaded from `public/`.

## Code Style

- **Prettier**: no semicolons, single quotes, JSX single quotes, trailing commas, 100 char line width, 2-space indent
- **ESLint**: flat config with React hooks plugin and Prettier compatibility
