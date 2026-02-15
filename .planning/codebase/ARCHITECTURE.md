# Architecture

**Analysis Date:** 2026-02-15

## Pattern Overview

**Overall:** Next.js App Router with Component Library + Documentation Site hybrid. The application serves dual purposes: (1) a shareable component library distribution platform (`CypherCN`) and (2) a component showcase/documentation site built with the components themselves.

**Key Characteristics:**
- Next.js 16 App Router (SSR/SSG hybrid)
- Component-driven UI with Radix UI primitives as foundation
- Terminal/cyberpunk aesthetic applied as styling layer over standard components
- MDX-based documentation (Fumadocs integration)
- Server actions for database operations
- Database persistence for user submissions (projects)
- Client-side theme management with next-themes
- No traditional API layer - uses Fumadocs search API

## Layers

**Presentation Layer (Client & Server Components):**
- Purpose: Render UI to users, handle interactions, manage visual state
- Location: `app/` (Next.js pages), `components/` (reusable UI)
- Contains: Page components, layout wrappers, UI component implementations
- Depends on: Radix UI primitives, theme utilities, form handling (TanStack Form)
- Used by: Browser/HTTP clients

**Component Library Layer:**
- Purpose: Provide reusable, themed UI components for both internal use and external distribution
- Location: `components/ui/` with `cypher/` (terminal-styled) and `protheus/` (alternative theme) subdirectories
- Contains: CVA-based component variants, styled primitives, game-themed components (health bars, mana bars)
- Depends on: Radix UI, class-variance-authority, Tailwind CSS
- Used by: All page components and documentation examples

**Business Logic & Data Access:**
- Purpose: Handle server-side operations, database queries, data validation
- Location: `server/` (server actions), `db/` (Drizzle ORM + schema)
- Contains: `createProject()` server action, Drizzle schema definitions
- Depends on: Neon serverless database, Drizzle ORM, Zod validation
- Used by: Form submissions (profile creator, project submissions)

**Documentation & Content:**
- Purpose: Provide searchable, browseable documentation for components and patterns
- Location: `content/docs/` (MDX), `lib/source.ts` (Fumadocs loader)
- Contains: Component docs, block patterns, integration guides
- Depends on: Fumadocs core, MDX processing
- Used by: `/docs` routes, search functionality

**Utilities & Configuration:**
- Purpose: Cross-cutting concerns - theming, styling, metadata, code highlighting
- Location: `lib/` (utilities), `config/` (navigation), `types/`
- Contains: `cn()` merge utility, theme definitions, syntax highlighting, metadata templates
- Depends on: clsx, tailwind-merge, Shiki
- Used by: All components

## Data Flow

**Component Showcase Flow:**
1. User visits `/` (home page)
2. `app/page.tsx` renders `ComponentShowcase` from `components/examples/`
3. Examples display terminal-styled components using `cypher/` variants
4. Styling applied via CVA and Tailwind, with cyberpunk animations

**Project Submission Flow:**
1. User navigates to `/submit-project`
2. `app/submit-project/page.tsx` renders `SubmitProjectForm`
3. Form uses TanStack Form + Zod validation
4. On submit, calls server action `createProject()` in `server/projects.ts`
5. Server action queries database via Drizzle ORM
6. Returns success or error message via toast notification (Sonner)

**Documentation Browse Flow:**
1. User navigates to `/docs` or uses search dialog
2. `app/docs/layout.tsx` loads page tree from `lib/source.ts`
3. Fumadocs processes MDX from `content/docs/`
4. Page renders with sidebar navigation
5. Code examples execute via `ComponentShowcase` and example components

**Search Flow:**
1. User opens search dialog (keyboard shortcut or header button)
2. `SearchDialog` component uses Fumadocs search integration
3. `/api/search` route uses Orama (full-text search) over Fumadocs source
4. Results filtered to component docs, blocks, and guides

**State Management Flow:**
1. Theme state: `ActiveThemeProvider` + `next-themes` in `components/theme-provider.tsx`
2. URL state: `useQueryStates()` from `nuqs` for profile creator customization
3. Form state: TanStack Form for submit-project and profile creation forms
4. No global client state management - primarily URL and provider-based

## Key Abstractions

**CVA Variant System:**
- Purpose: Define component styling variations cleanly and type-safely
- Examples: `components/ui/cypher/button.tsx`, `components/ui/cypher/card.tsx`
- Pattern: Export `buttonVariants = cva()` with variants object, use in component props
- Applied to: Buttons (size, variant, font, glow), cards (terminal, ASCII, double borders), progress bars

**Terminal Styling Layer:**
- Purpose: Apply retro/cyberpunk aesthetic consistently across components
- Examples: `components/ui/cypher/styles/cyberpunk.css`, Phosphor glow effects, scanlines
- Pattern: CSS utility classes applied to components, font variants (cyphercn, cyphercn-normal)
- Used by: All cypher/* components, theme system

**Server Actions Pattern:**
- Purpose: Safely call database operations from client components
- Examples: `server/projects.ts::createProject()`
- Pattern: Mark function with `"use server"`, take validated input, return result or error string
- Security: Server actions validate with Zod, prevent duplicate entries

**Component Showcases:**
- Purpose: Live examples of components in the documentation
- Examples: `components/examples/component-showcase.tsx`, `components/examples/theme-selector.tsx`
- Pattern: Standalone React components that render component variations
- Integration: Embedded in documentation pages and home page

## Entry Points

**Home/Marketing:**
- Location: `app/page.tsx`
- Triggers: Direct visit to `/`
- Responsibilities: Display value proposition, component showcase, project submission CTA

**Documentation:**
- Location: `app/docs/layout.tsx`, `app/docs/[[...slug]]/page.tsx`
- Triggers: Navigate to `/docs/*`
- Responsibilities: Load and render MDX content, sidebar navigation, code examples

**Component Gallery:**
- Location: `app/r/[component]/page.tsx`
- Triggers: Navigate to `/r/{component-name}`
- Responsibilities: Display individual component docs from registry

**Dashboard:**
- Location: `app/dashboard/page.tsx`
- Triggers: Navigate to `/dashboard`
- Responsibilities: Demonstrate sidebar layout, data table, charts using cypher components

**Special Pages:**
- Theme Selector: `app/themes/page.tsx` - demonstrates all available theme variants
- Profile Creator: `app/profile-creator/page.tsx` - interactive profile card builder
- Character Sheet: `app/character-sheet/page.tsx` - gaming-themed form example
- Submit Project: `app/submit-project/page.tsx` - project submission form

## Error Handling

**Strategy:** Client-side toasts for user feedback, server-side try-catch with error messages returned to client.

**Patterns:**
- Form validation: Zod schema validation before submission, field-level error display
- Server errors: Try-catch in server actions, return error string to client
- Toast notifications: Sonner toast for success/error feedback
- Duplicate entries: Database check before insert, returns error message
- Not found: `app/not-found.tsx` with terminal-styled fallback UI

## Cross-Cutting Concerns

**Logging:** Console-based (development) and Vercel analytics (production via `@vercel/analytics`)

**Validation:** Zod schemas for form inputs (project name, URL validation with regex), database schema validation via Drizzle

**Authentication:** Not implemented - project submissions are unauthenticated but rate-limited by database constraints (duplicate check)

**Theming:** next-themes provider wraps entire app, stores preference in localStorage, supports system theme detection. CypherCN variants applied as CSS classes.

---

*Architecture analysis: 2026-02-15*
