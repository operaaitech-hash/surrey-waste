# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Surrey Waste (`artifacts/surrey-waste`)
- **Kind**: React + Vite (web)
- **Preview path**: `/` (root)
- **Port**: 21527
- **Description**: Landing page for Surrey Waste — a Click & Collect commercial waste collection service
- **Sections**: Hero, Services (features), How it Works (4-step), Why Choose Us, Environmental, Booking Form, Footer
- **Branding**: White background + Forest green (#16a34a / `142 76% 33%` in HSL)
- **Fonts**: Plus Jakarta Sans (sans-serif)
- **Images**: `public/images/surrey-hero.png`, `surrey-service.png`, `surrey-recycling.png`
- **Dependencies**: framer-motion, lucide-react, shadcn/ui (all Radix primitives)
- **No backend** — presentation-first static landing page

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
