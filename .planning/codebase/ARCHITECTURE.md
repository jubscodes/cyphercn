# Architecture

**Analysis Date:** 2026-01-31

## Pattern Overview

**Overall:** Next.js 16 full-stack web application with component library registry and static site generation.

**Key Characteristics:**
- Next.js App Router with file-based routing
- Component-centric architecture with 8-bit retro styling layer
- Hybrid rendering: Server components for documentation, client components for interactive features
- Static component registry available via JSON API endpoints
- Documentation-first design with MDX content source

## Layers

**Presentation Layer:**
- Purpose: Render UI components and pages to users
- Location: `app/`, `components/`
- Contains: Page components, layout components, UI components (shadcn/ui-based with 8-bit styling)
- Depends on: Component library, utilities, theme providers
- Used by: Next.js routing system, browser rendering

**Component Library:**
- Purpose: Provide reusable UI components with 8-bit retro aesthetics
- Location: `components/ui/`, `components/ui/8bit/`
- Contains: Base UI components (button, card, input, etc.), specialized components (data-table, profile-creator), blocks (reusable component patterns)
- Depends on: Radix UI primitives, TailwindCSS, class-variance-authority
- Used by: Pages, examples, and external consumers via registry

**Application Layer:**
- Purpose: Handle page-specific logic, data fetching, and state management
- Location: `app/dashboard/`, `app/profile-creator/`, `app/character-sheet/`, etc.
- Contains: Page components, form components, interactive features
- Depends on: Component library, server actions, client-side hooks
- Used by: Next.js routing

**Server Layer:**
- Purpose: Handle server-side operations and database interactions
- Location: `server/`
- Contains: Server actions (`"use server"`), database operations via Drizzle ORM
- Depends on: Database connection, Drizzle ORM schema
- Used by: Client components via form actions and async operations

**Data Layer:**
- Purpose: Manage database schema and connections
- Location: `db/`
- Contains: Drizzle ORM schema definitions, database client initialization
- Depends on: Neon serverless PostgreSQL
- Used by: Server actions and server-side queries

**Documentation Layer:**
- Purpose: Provide searchable documentation and component showcase
- Location: `content/docs/`, `app/docs/`
- Contains: MDX content files, fumadocs configuration, doc page rendering
- Depends on: fumadocs-mdx, fumadocs-ui, Shiki syntax highlighting
- Used by: Documentation pages and search functionality

**Registry/Distribution Layer:**
- Purpose: Distribute components as JSON packages for external consumption
- Location: `app/r/[component]/route.ts`, `lib/package.ts`
- Contains: Component registry endpoints, package building logic
- Depends on: Component system, registry.json data
- Used by: External tools (Cursor, v0, shadcn-ui CLI)

**Utilities & Shared Logic:**
- Purpose: Provide common utilities and helper functions
- Location: `lib/`, `hooks/`, `config/`
- Contains: Theme management, metadata, code highlighting, responsive utilities
- Depends on: Next.js APIs, React
- Used by: All other layers

## Data Flow

**Component Showcase Flow:**

1. User visits home page (`app/page.tsx`)
2. `ComponentShowcase` component renders example components from `components/examples/`
3. Examples use UI components from `components/ui/8bit/` with theme from `active-theme` context
4. TailwindCSS applies retro styling via `components/ui/8bit/styles/retro.css`
5. Browser renders pixelated borders and retro visual effects

**Documentation Flow:**

1. User navigates to `/docs/[...slug]` or uses search
2. `app/docs/[[...slug]]/page.tsx` fetches page from fumadocs source
3. Page metadata extracted, MDX compiled to React components
4. `mdx-components.tsx` maps MDX elements to UI components (8-bit styled where applicable)
5. Syntax highlighting via react-shiki with Shiki engine
6. Page rendered with table of contents, navigation breadcrumbs, sponsor cards

**Registry Download Flow:**

1. External tool (Cursor, v0, shadcn-ui) requests `GET /r/[component].json`
2. `app/r/[component]/route.ts` receives request
3. `getPackage()` from `lib/package.ts` loads component code and metadata
4. Component payload serialized to JSON and returned
5. Vercel Analytics tracks download event
6. External tool installs component in user's project

**Profile Creator Interactive Flow:**

1. User navigates to `/profile-creator`
2. `profile-creator.tsx` component initializes with URL search params via `nuqs`
3. User modifies form fields (name, avatar, bio, socials)
4. `useQueryStates` hook syncs state to URL
5. Live preview updates via `ProfileCard` component
6. User triggers download or copy-code action
7. `html-to-image` library converts preview to PNG image
8. Code snippet displays raw HTML/React code for component

**Server Action Flow (Project Submission):**

1. User submits project form on `/submit-project`
2. Form submission calls `createProject()` server action (`server/projects.ts`)
3. Server action validates against existing projects in database
4. Drizzle ORM inserts new project into PostgreSQL `projects` table
5. Success toast notification displayed via Sonner
6. User redirected to success page

**Theme Switching Flow:**

1. `ThemeProvider` at root (next-themes) manages theme state
2. `ActiveThemeProvider` reads user's theme preference from localStorage
3. Theme selection updates context state
4. UI components subscribe to theme context and apply variant CSS
5. 8-bit components update border colors and effects based on theme
6. CSS variables in tailwind config updated (dark mode detection)

**State Management:**

- Theme: Managed by `next-themes` + `ActiveThemeProvider` context
- URL query params: Managed by `nuqs` for shareable state (profile creator, filters)
- Form state: Managed by TanStack Form for validation and submission
- Table state: Managed by TanStack Table (sorting, filtering, pagination, column visibility)
- Toast notifications: Managed by Sonner toast system
- Client-side component state: React hooks (useState, useMemo, useCallback)

## Key Abstractions

**UI Component Wrapper Pattern:**

- Base Radix UI components wrapped in 8-bit styled versions
- Location: `components/ui/8bit/` files
- Pattern: Import shadcn/ui component, compose with CVA (class-variance-authority) for retro styling
- Example: `components/ui/8bit/button.tsx` wraps shadcn Button with pixelated borders
- Used for: Consistent styling across entire app while maintaining accessibility

**Component Registry System:**

- Components are discoverable via static JSON registry
- Location: `registry.json` at project root
- Pattern: Component metadata includes name, description, dependencies, code snippets
- Registry generated at build time and served via API routes
- Enables external tools to install components

**Page Layout Pattern:**

- Root layout (`app/layout.tsx`) establishes provider hierarchy:
  1. `NuqsAdapter` for URL state management
  2. `RootProvider` from fumadocs (search, navigation)
  3. `ThemeProvider` from next-themes (dark/light mode)
  4. `ActiveThemeProvider` (custom theme variants)
- Child layouts and pages inherit provider context
- Used for: Consistent theme, search, and navigation across all pages

**Server Action Pattern:**

- Data mutations via Next.js server actions marked with `"use server"`
- Located in `server/` directory
- Pattern: Async function that runs on server, validates input, returns result
- Used for: Form submissions, database writes, secure operations
- Example: `createProject()` validates and inserts project to database

**Content Source Pattern:**

- MDX documents stored in `content/docs/`
- fumadocs-mdx configuration transforms to pages
- Static params generated at build time for all docs routes
- Dynamic metadata generation per page
- Used for: Scalable documentation without database

## Entry Points

**Application Entry:**
- Location: `app/layout.tsx`
- Triggers: Server startup, page navigation
- Responsibilities: Initialize providers (theme, search, URL state), set up global layout structure, load analytics

**Homepage:**
- Location: `app/page.tsx`
- Triggers: Navigation to `/`
- Responsibilities: Display welcome message, show component showcase, promotion cards, sponsor section

**Component Registry API:**
- Location: `app/r/[component]/route.ts`
- Triggers: HTTP GET request to `/r/{name}.json`
- Responsibilities: Load component package, validate request, track analytics, return JSON response

**Documentation Pages:**
- Location: `app/docs/[[...slug]]/page.tsx`
- Triggers: Navigation to `/docs` or `/docs/...`
- Responsibilities: Fetch MDX page, generate metadata, render with TOC and navigation

**Interactive Tools:**
- Location: `app/profile-creator/page.tsx`, `app/character-sheet/page.tsx`, `app/dashboard/page.tsx`
- Triggers: User navigation
- Responsibilities: Manage client-side state, handle form submission to server actions, render real-time previews

## Error Handling

**Strategy:** Fallback UI and graceful degradation

**Patterns:**

- Next.js `notFound()` for 404 scenarios (missing docs, components)
- Try-catch blocks in server actions with error messages returned to client
- Sonner toast for user-facing error notifications
- Console error logging for server-side issues
- Skeleton loading states during async operations
- Suspense boundaries for lazy-loaded content

## Cross-Cutting Concerns

**Logging:**
- Browser console for development
- Server-side console.error in catch blocks
- Vercel Analytics for production events

**Validation:**
- Zod schema validation in server actions
- Form validation via TanStack Form
- URL param parsing via nuqs with type safety

**Authentication:**
- Not currently implemented
- Login pages exist (`app/login/`, `app/login-with-image/`) but appear to be placeholder examples

**CSS Architecture:**
- TailwindCSS for base utility styling
- CSS modules and class-variance-authority for component variants
- Custom retro CSS file (`components/ui/8bit/styles/retro.css`) for pixelated effects
- CSS variables in tailwind config for theme colors
- Dark mode support via next-themes class strategy

---

*Architecture analysis: 2026-01-31*
