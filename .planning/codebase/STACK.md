# Technology Stack

**Analysis Date:** 2026-02-15

## Languages

**Primary:**
- TypeScript 5.9.3 - All application code, components, configuration
- JSX/TSX 19 - React component syntax throughout the codebase
- CSS/Tailwind - Styling with Tailwind CSS 4.1.18

**Secondary:**
- JavaScript (ES2017 target) - Configuration files
- MDX - Documentation content in `content/docs`

## Runtime

**Environment:**
- Node.js 24.3.0 (current development)
- React 19.2.3 (latest)
- React DOM 19.2.3

**Package Manager:**
- pnpm 9.15.4 (enforced in package.json packageManager field)
- Lockfile: `pnpm-lock.yaml` (present)

## Frameworks

**Core:**
- Next.js 16.1.4 - Full-stack React framework with App Router
- React 19.2.3 - UI library

**UI & Component:**
- Radix UI (collection of primitive components: accordion, dialog, dropdown-menu, select, tabs, tooltip, etc.) - Unstyled accessible components
- shadcn/ui derived components - Pre-built styled components in `components/ui/`
- Fumadocs UI 16.4.7 - Documentation site framework
- Fumadocs MDX 14.2.6 - MDX compilation for docs
- Class Variance Authority 0.7.1 - Component variant management

**Styling:**
- Tailwind CSS 4.1.18 - Utility-first CSS framework
- @tailwindcss/postcss 4.1.18 - PostCSS plugin for Tailwind

**Data Visualization:**
- Recharts 2.15.4 - Charting library
- Three.js 0.182.0 - 3D graphics library
- html-to-image 1.11.13 - HTML to image conversion

**Tables & Data:**
- @tanstack/react-table 8.21.3 - Headless table library
- @tanstack/react-form 1.27.7 - Form state management

**Carousel & Interaction:**
- Embla Carousel React 8.6.0 - Carousel component
- React Resizable Panels 3.0.6 - Resizable panel layout
- dnd-kit (6.3.1, sortable 10.0.0, utilities 3.2.2) - Drag and drop

**Forms & Input:**
- Zod 4.3.5 - TypeScript-first schema validation
- input-otp 1.4.2 - OTP input component
- cmdk 1.1.1 - Command menu component

**Icons & UI Utilities:**
- Lucide React 0.562.0 - Icon library
- @tabler/icons-react 3.36.1 - Icon set
- Sonner 2.0.7 - Toast notifications
- Vaul 1.1.2 - Drawer component

**Utilities:**
- date-fns 4.1.0 - Date utility library
- clsx 2.1.1 - Conditional CSS class management
- tailwind-merge 3.4.0 - Merge Tailwind CSS classes
- tw-animate-css 1.4.0 - Animation utilities
- nuqs 2.8.6 - URL search params management
- next-themes 0.4.6 - Theme management for Next.js

**Syntax Highlighting & Code:**
- Shiki 3.21.0 - Syntax highlighter
- react-shiki 0.9.1 - React component for Shiki
- front-matter 4.0.2 - Parse YAML front matter

**Image & Media:**
- @origin-space/image-cropper 0.1.9 - Image cropping component
- html2canvas 1.4.1 - Screenshot tool (dev dependency)

**Query & Navigation:**
- react-day-picker 9.13.0 - Date picker component
- next/font/google - Font optimization

## Testing & Linting

**Code Quality:**
- @biomejs/biome 2.3.11 - Linter, formatter, and bundler (ultracite wrapper uses this)
- Ultracite 7.0.12 - Code check and fix tool (custom linter wrapper)
- Husky 9.1.7 - Git hooks
- lint-staged 16.2.7 - Run linters on staged files

## Build & Dev Tools

**Build:**
- Next.js built-in build system (webpack-based)

**Database:**
- Drizzle ORM 0.45.1 - SQL ORM for type-safe database queries
- drizzle-kit 0.31.8 - CLI tool for schema migrations and introspection
- @neondatabase/serverless 1.0.2 - Neon database driver for serverless

**DevDependencies:**
- @types/node 25.0.9 - Node.js type definitions
- @types/react 19.2.9 - React type definitions
- @types/react-dom 19.2.3 - React DOM type definitions
- @types/three 0.182.0 - Three.js type definitions
- @types/mdx 2.0.13 - MDX type definitions

## Configuration

**TypeScript:**
- Config: `tsconfig.json`
- Target: ES2017
- Module resolution: bundler
- Strict mode: enabled (strict: true, strictNullChecks: true)
- Path aliases: `@/*` maps to project root, `fumadocs-mdx:collections/*` for documentation

**Next.js:**
- Config: `next.config.ts`
- Features: MDX support via Fumadocs, component caching enabled
- Entry point: `app/layout.tsx` (App Router)

**PostCSS:**
- Config: `postcss.config.mjs`
- Uses @tailwindcss/postcss plugin

**Database:**
- Config: `drizzle.config.ts`
- Dialect: PostgreSQL
- Schema location: `db/schema.ts`
- Migrations: `db/migrations/`

**Documentation:**
- Config: `source.config.ts`
- Fumadocs MDX configuration

## Scripts

**Development:**
```bash
npm run dev           # Start Next.js dev server on port 3000
npm run build         # Build for production
npm run start         # Start production server
npm run check         # Run ultracite linting checks
npm run fix           # Auto-fix code issues with ultracite
npm run prepare       # Install husky git hooks
```

## Platform Requirements

**Development:**
- Node.js 24.3.0+ (no .nvmrc enforced, but v24 currently used)
- pnpm 9.15.4+ (enforced in packageManager field)
- Git (for husky hooks)

**Production:**
- Deployment platform must support Node.js runtime
- Environment variables: `DATABASE_URL`, `GITHUB_TOKEN`, `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_WANDRY_ANALYTICS_TOKEN`
- PostgreSQL database (via Neon)

---

*Stack analysis: 2026-02-15*
