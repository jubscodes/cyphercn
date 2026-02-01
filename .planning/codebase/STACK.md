# Technology Stack

**Analysis Date:** 2026-01-31

## Languages

**Primary:**
- TypeScript 5.9.3 - Full application codebase (app/, components/, lib/, server/, db/)
- JSX/TSX - React components throughout

**Secondary:**
- JavaScript - Configuration files (postcss.config.mjs)
- JSON - Registry and configuration files

## Runtime

**Environment:**
- Node.js (version not explicitly specified, inferred from Next.js 16.1.4 requirements)

**Package Manager:**
- pnpm 9.15.4 - Specified in package.json packageManager field
- Lockfile: Present (pnpm-lock.yaml or similar)

## Frameworks

**Core:**
- Next.js 16.1.4 - Full-stack React framework for pages, routing, API routes
- React 19.2.3 - UI library for components
- React DOM 19.2.3 - DOM rendering

**Documentation & Content:**
- fumadocs-core 16.4.7 - Documentation content management and search
- fumadocs-mdx 14.2.6 - MDX integration for documentation
- fumadocs-ui 16.4.7 - Pre-built documentation UI components

**UI Components:**
- Radix UI (multiple packages) - Accessible component primitives (@radix-ui/react-*)
- shadcn/ui (3.7.0) - Copy-paste component library base

**Forms & Validation:**
- @tanstack/react-form 1.27.7 - Headless form state management
- zod 4.3.5 - Runtime schema validation for TypeScript

**Tables & Data:**
- @tanstack/react-table 8.21.3 - Headless table component library

**Styling:**
- Tailwind CSS 4.1.18 - Utility-first CSS framework
- @tailwindcss/postcss 4.1.18 - PostCSS plugin for Tailwind v4
- class-variance-authority 0.7.1 - CSS component variant management
- tailwind-merge 3.4.0 - Tailwind class merging utility
- clsx 2.1.1 - Conditional className utility

**Drag & Drop:**
- @dnd-kit/core 6.3.1 - Drag and drop primitives
- @dnd-kit/sortable 10.0.0 - Sortable collections
- @dnd-kit/modifiers 9.0.0 - Transform modifiers
- @dnd-kit/utilities 3.2.2 - Utility functions

**Charting & Visualization:**
- recharts 2.15.4 - Composable chart library
- three 0.182.0 - 3D graphics library

**UI Utilities & Components:**
- lucide-react 0.562.0 - Icon library
- embla-carousel-react 8.6.0 - Carousel component
- react-resizable-panels 3.0.6 - Resizable panel layouts
- react-day-picker 9.13.0 - Date picker
- cmdk 1.1.1 - Command/search component
- input-otp 1.4.2 - OTP input component
- sonner 2.0.7 - Toast notifications
- vaul 1.1.2 - Drawer component
- date-fns 4.1.0 - Date utility functions

**Syntax Highlighting:**
- shiki 3.21.0 - Syntax highlighter
- react-shiki 0.9.1 - Shiki React integration

**URL/Query State:**
- nuqs 2.8.6 - Next.js URL/query state management

**Theming:**
- next-themes 0.4.6 - Theme provider and utilities

**Image Processing:**
- @origin-space/image-cropper 0.1.9 - Image cropping component
- html-to-image 1.11.13 - HTML to image conversion
- html2canvas 1.4.1 - HTML canvas rendering (dev dependency)

**Markdown & Content:**
- front-matter 4.0.2 - Front matter parsing
- @types/mdx 2.0.13 - MDX type definitions

**Analytics:**
- @vercel/analytics 1.6.1 - Vercel analytics integration
- @vercel/speed-insights 1.3.1 - Vercel Core Web Vitals monitoring
- @wandry/analytics-sdk 1.16.0 - Custom analytics SDK for component registry

## Database

**ORM:**
- drizzle-orm 0.45.1 - Lightweight TypeScript ORM
- drizzle-kit 0.31.8 - Drizzle schema migrations and codegen

**Database Driver:**
- @neondatabase/serverless 1.0.2 - Serverless PostgreSQL client for Neon

**Database Type:**
- PostgreSQL - Configured in `drizzle.config.ts` with dialect: "postgresql"
- Connection: Neon serverless PostgreSQL via DATABASE_URL environment variable

## Build & Development

**Linting & Formatting:**
- @biomejs/biome 2.3.11 - Code formatter and linter (combined ESLint + Prettier alternative)
- ultracite 7.0.12 - Biome configuration preset extending core, next, and react rules
- lint-staged 16.2.7 - Run linters on staged files

**Type Checking:**
- TypeScript 5.9.3 - Static type checking

**Git Hooks:**
- husky 9.1.7 - Git hooks runner
- lint-staged integration for pre-commit linting

## Configuration

**TypeScript:**
- `tsconfig.json` - Configured with:
  - Target: ES2017
  - Module: esnext
  - Strict mode enabled
  - Path aliases: `@/*` (root), `fumadocs-mdx:collections/*` (.source/)
  - JSX: react-jsx

**Build:**
- `next.config.ts` - Next.js configuration with:
  - MDX support via fumadocs
  - Component caching enabled
  - File tracing includes for documentation content
  - Output file tracking for `/docs/**/*` paths

**PostCSS:**
- `postcss.config.mjs` - Configured with @tailwindcss/postcss plugin

**Code Quality:**
- `biome.jsonc` - Biome configuration extending ultracite presets
  - Excludes: public/, components/ui, hooks/use-mobile.ts, lib/utils.ts, .source

**Drizzle:**
- `drizzle.config.ts` - Configured with:
  - Schema: `./db/schema.ts`
  - Output: `./db/migrations`
  - Dialect: postgresql
  - Requires DATABASE_URL environment variable

**Components Registry:**
- `components.json` - shadcn/ui component registry configuration

## Environment & Deployment

**Runtime Environment:**
- Node.js (latest compatible with Next.js 16.1.4)

**Deployment:**
- Vercel (inferred from analytics SDKs and next.config.ts)

**Environment Variables Required:**
- `DATABASE_URL` - PostgreSQL connection string for Neon
- `GITHUB_TOKEN` - GitHub API token for RSS feed generation (app/rss.xml/route.ts)
- `NEXT_PUBLIC_BASE_URL` - Public base URL for absolute URL generation (lib/utils.ts)
- `NODE_ENV` - Automatically set (production/development)
- `APP_ENV` - Custom environment flag (development detection in app/layout.tsx)

**Build Outputs:**
- `.next/` - Next.js build output directory
- `db/migrations/` - Drizzle ORM migration files (generated)

---

*Stack analysis: 2026-01-31*
