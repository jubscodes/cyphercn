# Codebase Structure

**Analysis Date:** 2026-01-31

## Directory Layout

```
8bitcn-ui/
├── app/                          # Next.js App Router pages and routes
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Homepage
│   ├── not-found.tsx             # 404 page
│   ├── globals.css               # Global styles
│   ├── api/                      # API routes
│   │   └── search/               # Documentation search endpoint
│   ├── docs/                     # Documentation pages (MDX-based)
│   ├── r/                        # Component registry API routes
│   │   ├── [component]/route.ts  # Dynamic component download
│   │   └── registry.json/route.ts # Full registry listing
│   ├── dashboard/                # Dashboard page
│   ├── profile-creator/          # Profile card creator tool
│   ├── character-sheet/          # Character sheet tool
│   ├── protheus/                 # Protheus feature/page
│   ├── about/                    # About page
│   ├── contributors/             # Contributors page
│   ├── sponsors/                 # Sponsors page
│   ├── themes/                   # Theme gallery
│   ├── login/                    # Login example page
│   ├── login-with-image/         # Login with image example page
│   └── submit-project/           # Project submission form
├── components/                   # React components
│   ├── ui/                       # Base UI component library
│   │   ├── 8bit/                 # 8-bit retro themed variants
│   │   │   ├── button.tsx        # Retro button with pixelated borders
│   │   │   ├── card.tsx          # Retro card component
│   │   │   ├── badge.tsx         # Retro badge
│   │   │   ├── alert.tsx         # Retro alert
│   │   │   ├── blocks/           # Pre-built component blocks
│   │   │   │   ├── audio-settings.tsx
│   │   │   │   └── ...
│   │   │   ├── styles/           # Retro CSS
│   │   │   │   └── retro.css     # Pixelated border effects
│   │   │   ├── protheus/         # Protheus-specific components
│   │   │   └── ...               # Other 8-bit components
│   │   ├── button.tsx            # Base shadcn button
│   │   ├── card.tsx              # Base shadcn card
│   │   ├── dialog.tsx            # Base shadcn dialog
│   │   ├── input.tsx             # Base shadcn input
│   │   ├── label.tsx             # Base shadcn label
│   │   └── ...                   # Other base components (40+ total)
│   ├── examples/                 # Example component implementations
│   │   ├── component-showcase.tsx # Featured examples on homepage
│   │   ├── command.tsx           # Command palette example
│   │   ├── calendar.tsx          # Calendar example
│   │   ├── date-picker.tsx       # Date picker example
│   │   ├── drawer.tsx            # Drawer example
│   │   ├── navigation-menu.tsx   # Navigation menu example
│   │   └── ...                   # 17+ examples
│   ├── forms/                    # Form components
│   │   └── ...
│   ├── hooks/                    # Custom React hooks
│   │   └── ...
│   ├── active-theme.tsx          # Theme context provider
│   ├── theme-provider.tsx        # next-themes wrapper
│   ├── site-header.tsx           # Top navigation bar
│   ├── site-footer.tsx           # Footer component
│   ├── search.tsx                # Search dialog component
│   ├── data-table.tsx            # Advanced table with DnD and charts
│   ├── profile-creator.tsx       # Profile card generator (large file)
│   ├── profile-card.tsx          # Profile card display
│   ├── docs-sidebar.tsx          # Documentation sidebar navigation
│   ├── docs-toc.tsx              # Table of contents component
│   ├── dashboard-header.tsx      # Dashboard header
│   └── ...                       # 40+ additional components
├── hooks/                        # Custom React hooks
│   └── use-mobile.ts             # Mobile breakpoint detection hook
├── lib/                          # Utility functions
│   ├── utils.ts                  # cn() for class merging, absoluteUrl()
│   ├── metadata.ts               # Shared SEO metadata
│   ├── package.ts                # Component registry package loading
│   ├── source.ts                 # fumadocs source configuration
│   ├── themes.ts                 # Theme definitions and metadata
│   ├── highlight-code.ts         # Code highlighting utilities
│   └── layout.shared.ts          # Shared layout utilities
├── server/                       # Server-side code
│   └── projects.ts               # Server actions for project submission
├── db/                           # Database configuration
│   ├── drizzle.ts                # Drizzle ORM client initialization
│   └── schema.ts                 # Database schema (projects table)
├── types/                        # TypeScript type definitions
│   └── use-react-screenshot.d.ts # Type definitions for libraries
├── config/                       # Configuration files
│   └── ...
├── content/                      # Content files
│   └── docs/                     # MDX documentation files
│       ├── components/           # Component documentation (59 folders)
│       ├── blocks/               # Block documentation (8 folders)
│       └── index.mdx             # Docs homepage
├── public/                       # Static assets
│   ├── assets/                   # Asset files
│   ├── avatars/                  # Avatar images
│   ├── icons/                    # Icon files
│   ├── images/                   # Other images
│   └── sponsors/                 # Sponsor logos
├── .planning/                    # Planning and analysis documents
│   └── codebase/                 # Codebase analysis files
├── .husky/                       # Git hooks configuration
├── .vscode/                      # VSCode workspace settings
├── .cursor/                      # Cursor IDE configuration
├── .opencode/                    # Open Code configuration
├── mdx-components.tsx            # MDX component mapping
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── components.json               # shadcn-ui configuration
├── drizzle.config.ts             # Drizzle ORM configuration
├── postcss.config.mjs            # PostCSS configuration
├── biome.jsonc                   # Biome linting/formatting config
├── package.json                  # Dependencies and scripts
├── pnpm-lock.yaml                # Locked dependency versions
├── registry.json                 # Component registry metadata
├── AGENTS.md                     # Agent configuration
├── README.md                     # Project readme
├── contributing.md               # Contributing guidelines
└── license.md                    # License file
```

## Directory Purposes

**app/**
- Purpose: Next.js App Router entry point with all application pages and routes
- Contains: Page components, layouts, API routes, server/client code
- Key files: `layout.tsx` (root provider setup), `page.tsx` (homepage)

**components/ui/**
- Purpose: Reusable UI component library (shadcn-based foundation)
- Contains: Button, Card, Dialog, Input, Select, Table, and 40+ other components
- Key files: `button.tsx`, `card.tsx`, `dialog.tsx` (base shadcn implementations)

**components/ui/8bit/**
- Purpose: Retro-styled variants of base UI components with pixelated borders
- Contains: 8-bit themed versions of buttons, cards, badges, alerts, etc.
- Key files: `button.tsx`, `card.tsx` (wrap base components with retro styling)
- Special: `styles/retro.css` contains CSS for pixelated border effects

**components/ui/8bit/blocks/**
- Purpose: Pre-built, reusable component blocks for common UI patterns
- Contains: AudioSettings, and other specialized component combinations
- Used by: Page components for faster development

**components/examples/**
- Purpose: Showcase component implementations and usage examples
- Contains: 17+ example files demonstrating components in action
- Key files: `component-showcase.tsx` (homepage examples), `calendar.tsx`, `date-picker.tsx`

**components/**
- Purpose: Page-specific and application-level components
- Contains: Layouts (header, footer, sidebar), forms, dialogs, feature components
- Key files: `site-header.tsx`, `site-footer.tsx`, `data-table.tsx`, `profile-creator.tsx`

**hooks/**
- Purpose: Custom React hooks for shared component logic
- Contains: Mobile detection, theme management, form handling
- Key file: `use-mobile.ts` (responsive design breakpoint)

**lib/**
- Purpose: Utility functions and helper modules
- Contains: Class name utilities, metadata, package loading, code highlighting
- Key files: `utils.ts` (cn function), `themes.ts` (theme definitions), `package.ts` (registry)

**server/**
- Purpose: Server-side logic and server actions (Next.js `"use server"`)
- Contains: Database operations, form handlers, secure operations
- Key file: `projects.ts` (project submission server action)

**db/**
- Purpose: Database configuration and schema management
- Contains: Drizzle ORM client, table schemas, type exports
- Key files: `drizzle.ts` (client init), `schema.ts` (projects table)

**content/docs/**
- Purpose: Documentation source files in MDX format
- Contains: 59 component docs, 8 block docs, organized by category
- Processed by: fumadocs-mdx at build time

**public/**
- Purpose: Static assets served by Next.js
- Contains: Images, avatars, icons, sponsor logos

**types/**
- Purpose: TypeScript type definitions and declarations
- Contains: Declaration files for untyped libraries
- Example: `use-react-screenshot.d.ts`

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout with theme provider, search, analytics setup
- `app/page.tsx`: Homepage with component showcase
- `next.config.ts`: Next.js configuration with MDX support

**Configuration:**
- `tsconfig.json`: TypeScript compiler options (path aliases, strict mode)
- `components.json`: shadcn-ui configuration with alias mappings
- `postcss.config.mjs`: PostCSS/TailwindCSS pipeline
- `biome.jsonc`: Code formatting and linting rules

**Core Logic:**
- `components/ui/8bit/button.tsx`: Example of retro styling pattern
- `server/projects.ts`: Server action pattern
- `lib/package.ts`: Component registry loading logic
- `components/data-table.tsx`: Complex interactive component example

**Styling:**
- `app/globals.css`: Global styles and TailwindCSS directives
- `components/ui/8bit/styles/retro.css`: Retro pixel border effects
- `lib/themes.ts`: Theme color definitions and metadata

**Documentation:**
- `content/docs/components/`: Individual component documentation files
- `mdx-components.tsx`: MDX element to React component mappings
- `app/docs/[[...slug]]/page.tsx`: Documentation page renderer

## Naming Conventions

**Files:**
- Components: PascalCase (e.g., `Button.tsx`, `ProfileCreator.tsx`)
- Utilities/Hooks: camelCase (e.g., `utils.ts`, `use-mobile.ts`)
- Server actions: camelCase (e.g., `projects.ts`)
- Styles: kebab-case for CSS files (e.g., `retro.css`)
- API routes: `route.ts` in directory structure

**Directories:**
- Feature/page directories: kebab-case (e.g., `profile-creator/`, `character-sheet/`)
- Component directories: lowercase singular (e.g., `ui/`, `examples/`, `hooks/`)
- Content structure: mirrors URL paths (e.g., `docs/components/button/`)

## Where to Add New Code

**New Page:**
- Primary code: `app/[feature-name]/page.tsx`
- Layout if needed: `app/[feature-name]/layout.tsx`
- Components used: `components/[feature-name].tsx` or component-specific folder
- Styles: Inline TailwindCSS classes or `components/ui/` components

**New Component:**
- Base component: `components/[component-name].tsx`
- Retro variant: `components/ui/8bit/[component-name].tsx` (if creating new UI primitive)
- Example: `components/examples/[component-name].tsx` (showcase usage)
- Documentation: `content/docs/components/[component-name]/page.mdx`

**New Server Action:**
- Location: `server/[feature-name].ts`
- Pattern: Export async function marked with `"use server"` at top
- Handle: Input validation with Zod, database operations with Drizzle, error catching

**New Database Table:**
- Schema definition: `db/schema.ts` (add new pgTable)
- Types: Infer from schema using `typeof table.$inferSelect` and `$inferInsert`
- Server action: `server/[feature-name].ts` to handle CRUD

**New Utility:**
- Location: `lib/[utility-name].ts` or add to existing file
- Export: Named exports for tree-shaking
- Use: Import via `@/lib/[utility-name]`

**New Hook:**
- Location: `hooks/use-[name].ts`
- Pattern: Custom hook exporting state and handlers
- Use: Import via `@/hooks/use-[name]`

**New Theme or Variant:**
- Definition: Add to `lib/themes.ts`
- CSS variables: Add to `app/globals.css` if needed
- Usage: Reference by name in components

## Special Directories

**node_modules/**
- Purpose: Dependencies (pnpm monorepo)
- Generated: Yes (pnpm install)
- Committed: No (listed in .gitignore)

**.next/**
- Purpose: Next.js build output and cache
- Generated: Yes (next build)
- Committed: No (listed in .gitignore)

**.planning/codebase/**
- Purpose: Codebase analysis documents for GSD orchestrator
- Generated: Yes (by GSD mapping agents)
- Committed: Yes (when available)

**.husky/ & .git/**
- Purpose: Git configuration and hooks
- Generated: Yes (git/husky)
- Committed: Partially (hooks are committed, not node_modules)

**registry.json**
- Purpose: Component registry metadata (name, description, code, dependencies)
- Generated: Yes (build time or manual)
- Committed: Yes

## Import Aliases

**Path aliases in tsconfig.json:**
- `@/*`: Root directory (allows `@/components`, `@/lib`, `@/app`, etc.)
- `fumadocs-mdx:collections/*`: Map to `.source/` for fumadocs collections

**Usage examples:**
```typescript
import { Button } from "@/components/ui/8bit/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { server-action } from "@/server/projects";
```

---

*Structure analysis: 2026-01-31*
