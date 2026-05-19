# AGENTS.md

## Cursor Cloud specific instructions

This is a static Next.js 15 marketing site (Enzy.co 2.0) exported from Figma. It uses `output: "export"` for static HTML generation — there is no backend, no database, and no environment variables required.

### Services

| Service | Command | Notes |
|---------|---------|-------|
| Dev server | `npm run dev` | Starts on port 3000 |

### Key commands

- **Install deps:** `npm install`
- **Dev server:** `npm run dev` (port 3000)
- **Build:** `npm run build` (outputs to `out/` then copies to `dist/`)
- **Type check:** `npx tsc --noEmit`

### Notes

- There is no ESLint config; linting is handled by Next.js built-in checks during `next build`.
- The project uses a custom webpack plugin in `next.config.mjs` to resolve `figma:asset/` imports to files under `src/assets/`.
- No `.env` file is needed. External images (Unsplash, CDN) are referenced but are not required for the site to function.
