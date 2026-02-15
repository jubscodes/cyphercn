# External Integrations

**Analysis Date:** 2026-02-15

## APIs & External Services

**GitHub API:**
- Contributors endpoint - Fetches repository contributors for display
  - Endpoint: `https://api.github.com/repos/jubscodes/cyphercn-ui/contributors`
  - Usage: `app/contributors/page.tsx` - Displays list of project contributors
  - Auth: OAuth token via `GITHUB_TOKEN` env var
  - SDK/Client: Native fetch API (no SDK)

**Wandry Analytics:**
- RSS feed generation for component registry
  - Package: `@wandry/analytics-sdk` 1.16.0
  - Usage: `app/rss.xml/route.ts` - Generates RSS feed with component metadata
  - Purpose: Track and publish component library updates
  - Requires: GitHub integration for last-edit metadata

## Data Storage

**Databases:**
- PostgreSQL (Neon Serverless)
  - Connection: Via `DATABASE_URL` environment variable
  - Client: `@neondatabase/serverless` 1.0.2 (HTTP-based serverless driver)
  - ORM: Drizzle ORM 0.45.1
  - Schema location: `db/schema.ts`
  - Tables: `projects` table (id, name, url, createdAt, updatedAt)
  - Client instance: Initialized in `db/drizzle.ts` with neon HTTP client

**File Storage:**
- Local filesystem only
  - User assets: `public/` directory
  - Content: `content/docs/` for MDX documentation
  - Component registry: `registry.json` file

**Search/Indexing:**
- Orama (embedded indexing via Fumadocs)
  - Documentation: Referenced in `app/api/search/route.ts`
  - Purpose: Full-text search for documentation
  - SDK/Integration: Via Fumadocs search plugin (`fumadocs-core/search/server`)
  - Language support: English configured

**Caching:**
- None detected - HTTP caching headers used for API responses

## Authentication & Identity

**Auth Provider:**
- None detected - No authentication framework integrated
- GitHub authentication: OAuth-style token-based (GitHub API only, not for user login)
- No user login system - Public access only with GitHub API integration for metadata

## Monitoring & Observability

**Analytics:**
- Vercel Analytics 1.6.1
  - Package: `@vercel/analytics/react`
  - Loaded in: `app/layout.tsx`
  - Purpose: Web vitals and performance tracking

- Speed Insights 1.3.1
  - Package: `@vercel/speed-insights/next`
  - Loaded in: `app/layout.tsx`
  - Purpose: Core Web Vitals monitoring

**Logs:**
- Console-based logging (no external logging service detected)
- Development: `APP_ENV === "development"` check in `app/layout.tsx`

**Error Tracking:**
- None detected - No error tracking service (Sentry, Rollbar, etc.) integrated

## CI/CD & Deployment

**Hosting:**
- Assumed Vercel (based on @vercel packages and Next.js optimization)
- Git-based deployment (supports typical Vercel/GitHub integration)

**CI Pipeline:**
- Husky 9.1.7 - Git pre-commit hooks
  - Config: `.husky/` directory
  - Usage: Runs linters via lint-staged on staged files before commit

- Lint-staged 16.2.7 - Staged file linting
  - Config: `lint-staged` field in package.json
  - Runs: `ultracite check` on staged TypeScript, JavaScript, JSON, CSS, and Markdown files

**Environment Configuration:**

**Required env vars:**
- `DATABASE_URL` - PostgreSQL connection string (required, throws error if missing in `drizzle.config.ts`)
- `GITHUB_TOKEN` - GitHub API token for last-edit tracking in RSS feed (used in `app/rss.xml/route.ts`)

**Optional env vars:**
- `NEXT_PUBLIC_BASE_URL` - Base URL for documentation (referenced in `app/rss.xml/route.ts`)
- `NEXT_PUBLIC_WANDRY_ANALYTICS_TOKEN` - Wandry Analytics token (loaded in `app/layout.tsx` analytics)
- `APP_ENV` - Environment detection ("development" checked in `app/layout.tsx`)

**Secrets location:**
- Environment variables stored in deployment platform (likely Vercel environment config)
- No `.env` files committed to repository
- `.env*` files are ignored/not present in working directory

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- None detected

## Registry & Component Distribution

**Component Registry:**
- `registry.json` - Component package registry file
- API route: `app/r/registry.json/route.ts` - Serves component registry
- Usage: Component installation and distribution (shadcn/ui compatible format)

**Component Retrieval:**
- API route: `app/r/[component]/route.ts` - Serves individual component code
- Format: Compatible with shadcn/ui CLI for component installation

## Documentation & Content

**Documentation Framework:**
- Fumadocs MDX 14.2.6 - MDX-based documentation site
- Source: `content/docs/` directory
- Configuration: `source.config.ts` and `.source/source.config.mjs`
- Deployed at: `/docs` URL path with search capability

**Fonts:**
- Google Fonts via Next.js optimization (`next/font/google`)
- Fonts: Geist Sans, IBM Plex Mono (loaded in `app/layout.tsx`)

---

*Integration audit: 2026-02-15*
