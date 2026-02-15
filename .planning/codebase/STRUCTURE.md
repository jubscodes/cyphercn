# Codebase Structure

**Analysis Date:** 2026-02-15

## Directory Layout

```
/Users/jubs/Development/8bitcn-ui/
├── app/                          # Next.js App Router pages and layouts
├── components/                   # Reusable React components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions and configuration
├── server/                       # Server-side logic (server actions)
├── db/                           # Database schema and ORM setup
├── content/                      # MDX documentation files
├── config/                       # Navigation and configuration constants
├── types/                        # TypeScript type definitions
├── public/                       # Static assets (favicons, images)
└── (config files)                # tsconfig.json, tailwind.config.ts, next.config.ts, etc.
```

## Directory Purposes

**`app/`:**
- Purpose: Next.js App Router pages and layouts - defines all user-facing routes
- Contains: Page components (.tsx), layout wrappers, API routes, static files
- Key files: `layout.tsx` (root wrapper), `page.tsx` (home), `globals.css`, `not-found.tsx`
- Organization: Each subdirectory is a route segment (e.g., `app/dashboard/page.tsx` → `/dashboard`)

**`components/`:**
- Purpose: Reusable React components organized by category
- Contains: UI components, layout components, forms, examples, hooks
- Key subdirectories: `ui/` (UI components), `examples/` (showcase components), `forms/`, `hooks/`

**`components/ui/`:**
- Purpose: Core UI component library with variant systems
- Contains: ~46 base components (button, card, input, etc.) + themed variants
- Key subdirectories:
  - `cypher/`: Terminal/cyberpunk-themed component variants
  - `protheus/`: Alternative theme variants
- Pattern: Each component exports base functionality + CVA-based variants

**`components/ui/cypher/`:**
- Purpose: Terminal-styled component variants implementing retro/gaming aesthetic
- Contains: ~56 component files including game-themed components (health-bar, mana-bar, enemy-health-display)
- Key pattern: Components extend Radix UI base components, wrap in CVA variants with cyberpunk styling
- Styling: `styles/cyberpunk.css` provides glow effects, scanlines, font variants
- Examples: `button.tsx`, `card.tsx`, `progress.tsx`, `tabs.tsx`, `health-bar.tsx`

**`components/examples/`:**
- Purpose: Showcase components demonstrating how to use UI components
- Contains: ~18 example files showing component usage in context
- Key files: `component-showcase.tsx` (main landing showcase), `theme-selector.tsx` (theme examples)
- Integration: Embedded in documentation and home page

**`components/forms/`:**
- Purpose: Complex form components with validation
- Contains: `submit-project-form.tsx` (Zod + TanStack Form validated form)
- Pattern: Forms use TanStack Form for state management, Zod for validation, Field components for structure

**`components/hooks/`:**
- Purpose: Custom React hooks
- Contains: `use-mobile.ts` (responsive mobile detection hook)
- Location: Hooks can also be in `hooks/` directory at root level

**`hooks/`:**
- Purpose: Root-level custom React hooks
- Contains: `use-mobile.ts` (media query hook for responsive behavior)

**`lib/`:**
- Purpose: Utility functions, configuration, and helpers
- Contains: ~7 files providing core functionality
- Key files:
  - `utils.ts`: `cn()` utility for Tailwind class merging
  - `themes.ts`: Complete theme definitions and color palettes (~330 lines)
  - `metadata.ts`: SEO metadata templates and image paths
  - `source.ts`: Fumadocs source loader for documentation
  - `highlight-code.ts`: Syntax highlighting with Shiki
  - `layout.shared.ts`: Layout option defaults

**`server/`:**
- Purpose: Server-side operations and database mutations
- Contains: `projects.ts` with `createProject()` server action
- Pattern: Functions marked with `"use server"` directive
- Access: Called directly from client components via Server Action mechanism

**`db/`:**
- Purpose: Database schema and ORM configuration
- Contains: `drizzle.ts` (Drizzle client setup), `schema.ts` (table definitions)
- Database: Neon serverless PostgreSQL
- Tables: `projects` table for submitted projects (id, name, url, createdAt, updatedAt)

**`content/docs/`:**
- Purpose: MDX documentation source files
- Contains: Component guides, block patterns, tutorials
- Organization: `docs/components/`, `docs/blocks/`, `docs/guides/`
- Integration: Loaded by Fumadocs, served at `/docs/*` routes

**`config/`:**
- Purpose: Application configuration and navigation
- Contains: `nav-items.ts` with component list and navigation structure
- Key exports: `navItems` object (header, sidebar nav), `TOP_LEVEL_SECTIONS`

**`types/`:**
- Purpose: TypeScript type definitions
- Contains: `use-react-screenshot.d.ts` (type stubs for external libraries)

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout - theme provider, analytics, header/footer setup
- `app/page.tsx`: Home page - component showcase and landing content
- `app/docs/[[...slug]]/page.tsx`: Dynamic docs pages powered by Fumadocs
- `app/api/search/route.ts`: Full-text search API using Fumadocs + Orama

**Configuration:**
- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `drizzle.config.ts`: Drizzle ORM migration configuration
- `tsconfig.json`: TypeScript configuration with path aliases (`@/*` → `./`)
- `biome.jsonc`: Biome linter/formatter configuration
- `.env.local`: Environment variables (DATABASE_URL, NEXT_PUBLIC_BASE_URL)

**Core Logic:**
- `server/projects.ts`: Server action for creating projects
- `db/schema.ts`: Drizzle schema for projects table
- `lib/themes.ts`: Complete theme color definitions (~330 lines)
- `components/profile-creator.tsx`: Interactive profile card builder (~200 lines)
- `components/data-table.tsx`: Reusable data table component (~260 lines)

**Styling:**
- `app/globals.css`: Global styles and CSS variables
- `app/retro-globals.css`: Alternative retro styling (not primary)
- `components/ui/cypher/styles/cyberpunk.css`: Terminal aesthetic styles

**Testing:**
- No dedicated `__tests__` directory found
- Tests would follow convention: `*.test.ts`, `*.spec.ts` co-located with source

## Naming Conventions

**Files:**
- Page components: `page.tsx` (Next.js convention)
- Layout components: `layout.tsx` (Next.js convention)
- Server actions: `*.ts` (lowercase, descriptive name, e.g., `projects.ts`)
- UI components: PascalCase.tsx (e.g., `Button.tsx`, `Card.tsx`)
- Utilities: camelCase.ts (e.g., `utils.ts`, `metadata.ts`)
- MDX docs: kebab-case.mdx (e.g., `button.mdx`, `health-bar.mdx`)

**Directories:**
- Feature routes: lowercase (e.g., `/dashboard`, `/profile-creator`)
- Component library dirs: lowercase (e.g., `components/ui/cypher`)
- Content structure: lowercase with hyphens (e.g., `docs/components/`, `docs/blocks/gaming/`)

**Functions & Exports:**
- Components: PascalCase (e.g., `Button`, `ProfileCreator`)
- Hooks: camelCase with `use` prefix (e.g., `useForm`, `useMobile`)
- Utilities: camelCase (e.g., `cn()`, `highlightCode()`)
- Types/Interfaces: PascalCase with suffixes (e.g., `ButtonProps`, `CyphercnButtonProps`)

## Where to Add New Code

**New Feature (Page Route):**
- Primary code: `app/[feature-name]/page.tsx` for page component
- Layout: `app/[feature-name]/layout.tsx` if specialized layout needed
- Shared components used by page: Add to `components/` not directly in page
- Server operations: Add to `server/[feature-name].ts` or extend `server/projects.ts`
- Tests: Create `app/[feature-name]/__tests__/page.test.tsx`

**New Component/Module:**
- Implementation: `components/[category]/[ComponentName].tsx` if reusable
- If UI component: `components/ui/[ComponentName].tsx` or `components/ui/cypher/[ComponentName].tsx` for themed variant
- Exports: Use named exports, optionally with barrel file
- Tests: `components/[category]/__tests__/[ComponentName].test.tsx`

**New Utility/Helper:**
- Shared utilities: `lib/[utility-name].ts`
- Hooks: `hooks/[hook-name].ts` or `components/hooks/[hook-name].ts`
- Server functions: `server/[domain].ts`
- Database operations: `db/[operations].ts` (extended from `schema.ts`)

**New Theme/Styling:**
- CSS: `components/ui/[theme-name]/styles/[theme].css`
- CVA variants: Add to existing component files in `components/ui/`
- Theme colors: Extend `lib/themes.ts` with new palette

**New Documentation:**
- Component docs: `content/docs/components/[component-name].mdx`
- Block/pattern docs: `content/docs/blocks/[category]/[block-name].mdx`
- Guide docs: `content/docs/guides/[guide-name].mdx`

## Special Directories

**`.next/`:**
- Purpose: Next.js build output and development server cache
- Generated: Yes (build time)
- Committed: No (.gitignore'd)

**`node_modules/`:**
- Purpose: Installed npm dependencies
- Generated: Yes (pnpm install)
- Committed: No (.gitignore'd)

**`public/`:**
- Purpose: Static assets served directly at root
- Generated: No
- Committed: Yes
- Contains: Favicons, OG images, static component preview images

**`.planning/`:**
- Purpose: GSD planning documents and codebase analysis
- Generated: Yes (by GSD tools)
- Committed: Yes
- Contains: STACK.md, ARCHITECTURE.md, STRUCTURE.md, TESTING.md, CONCERNS.md, etc.

**`.claude/skills/`:**
- Purpose: AI assistant skill definitions for prompting
- Generated: Manual
- Committed: Yes
- Contains: Reusable prompt snippets for common patterns (shadcn conventions, registry patterns, etc.)

---

*Structure analysis: 2026-02-15*
