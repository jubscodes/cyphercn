# External Integrations

**Analysis Date:** 2026-01-31

## APIs & External Services

**Analytics & Monitoring:**
- Vercel Analytics - Web analytics tracking for user interactions
  - SDK: @vercel/analytics 1.6.1
  - Implementation: `app/layout.tsx` (Analytics component)
  - Tracking API: Used in `app/r/[component]/route.ts` with `track()` function for registry downloads

- Vercel Speed Insights - Core Web Vitals monitoring
  - SDK: @vercel/speed-insights 1.3.1
  - Implementation: `app/layout.tsx` (SpeedInsights component)

- Wandry Analytics SDK - Custom registry and component analytics
  - SDK: @wandry/analytics-sdk 1.16.0
  - Implementation: `app/rss.xml/route.ts`
  - Purpose: Generates RSS feed for component registry with analytics

**GitHub Integration:**
- GitHub API
  - Purpose: RSS feed generation requires last commit date for registry items
  - Token: `GITHUB_TOKEN` environment variable (required in `app/rss.xml/route.ts`)
  - Repository: TheOrcDev/8bitcn-ui
  - Endpoint: `https://api.github.com/repos/TheOrcDev/8bitcn-ui/contributors` (used in `app/contributors/page.tsx`)
  - Usage: Fetch contributor list, commit metadata for RSS publishing dates

## Data Storage

**Primary Database:**
- **PostgreSQL (Neon Serverless)**
  - Connection: `DATABASE_URL` environment variable required
  - Client: @neondatabase/serverless 1.0.2
  - ORM: drizzle-orm 0.45.1
  - Location: `db/drizzle.ts` - Database client initialization
  - Schema: `db/schema.ts`
  - Tables:
    - `projects` - User-submitted projects with id (uuid), name, url, createdAt, updatedAt

**File Storage:**
- Local filesystem only
  - `registry.json` - Component registry metadata read by `lib/package.ts`
  - Configuration files and documentation content stored in version control

**Caching:**
- Next.js built-in caching
  - Component caching enabled in `next.config.ts` (cacheComponents: true)
  - RSS feed response caching: max-age=3600, s-maxage=3600, stale-while-revalidate=86400

## Authentication & Identity

**Auth Provider:**
- None - Public application without user authentication

**Authorization:**
- Anonymous access to all pages and APIs
- Project submission requires no authentication (form validation only via Zod)

## Content Management

**Documentation:**
- fumadocs-core 16.4.7 - Content loading and search
  - Implementation: `lib/source.ts` - Source loader with Fumadocs
  - Search API: `app/api/search/route.ts` - Full-text search via Orama
  - Language: English
  - Content location: `.source/` directory (fumadocs-mdx:collections mapping)

**Component Registry:**
- shadcn/ui compatible registry format
  - Location: `registry.json` (root)
  - Components served via: `app/r/[component]/route.ts`
  - Registry metadata endpoint: `app/r/registry.json/route.ts`
  - Static generation for all components via `generateStaticParams()`

## Monitoring & Observability

**Error Tracking:**
- None dedicated - Errors logged to console
  - Error handling: try-catch blocks in async operations

**Logs:**
- Browser console logging (client-side)
- Server console logging (errors in routes: `app/r/[component]/route.ts`, `app/rss.xml/route.ts`)
- Environment flag: `APP_ENV` for development debug features

## CI/CD & Deployment

**Hosting Platform:**
- Vercel (inferred from analytics SDKs and next.config.ts patterns)

**CI/CD Pipeline:**
- GitHub Actions (configured in `.github/` directory)
- Pre-commit hooks via husky for lint-staged checks

**Build Process:**
- Next.js build: `next build`
- Development: `next dev`
- Production start: `next start`
- Code checks: `ultracite check` (Biome-based linting)
- Code fixing: `ultracite fix`

## Webhooks & Callbacks

**Incoming:**
- None configured

**Outgoing:**
- GitHub API calls for:
  - Contributor list fetching (`app/contributors/page.tsx`)
  - RSS feed commit date metadata (`app/rss.xml/route.ts`)

## RSS & Syndication

**RSS Feed:**
- Endpoint: `/rss.xml` (route: `app/rss.xml/route.ts`)
- Format: RSS/Atom feed
- Content: Component registry items with metadata
- Generation: Dynamic with Wandry Analytics SDK
- Caching: 1 hour (max-age), up to 24 hours stale-while-revalidate
- Metadata Strategy: GitHub last commit date for publishing
- URL Resolver: Maps categories from registry items to doc URLs

## Font Services

**Google Fonts:**
- Geist Sans and Geist Mono fonts loaded via Next.js font optimization
- Implementation: `app/layout.tsx`
- Subsets: latin

## Environment Configuration

**Required Environment Variables:**
- `DATABASE_URL` - PostgreSQL connection string (Neon serverless)
- `GITHUB_TOKEN` - GitHub API token for RSS feed generation and contributor data
- `NEXT_PUBLIC_BASE_URL` - Public base URL for absolute URL generation (used in `lib/utils.ts`)

**Optional Environment Variables:**
- `NODE_ENV` - Set automatically (production/development)
- `APP_ENV` - Development flag (checked in `app/layout.tsx` for debug features)

**Secrets Location:**
- Environment variables configured via Vercel deployment platform
- `.env.local` for local development (not committed)

## Dependency Locations by Purpose

**Core Application:**
- Next.js, React, React DOM: `app/`, `components/`, `lib/`

**Form Handling:**
- TanStack Form: `components/forms/submit-project-form.tsx`

**Database Operations:**
- Drizzle ORM: `db/drizzle.ts`, `db/schema.ts`
- Drizzle Kit: Configuration in `drizzle.config.ts`

**Documentation:**
- Fumadocs: `lib/source.ts`, `app/api/search/route.ts`

**Styling:**
- Tailwind CSS: Global styles in `app/globals.css`, component classes throughout

**UI Components:**
- Radix UI: Component primitives throughout `components/`
- shadcn/ui: Copied components in `components/ui/8bit/` and `components/ui/`

**Icons:**
- Lucide React: Used in components across the app
- Tabler Icons: `@tabler/icons-react` dependency

---

*Integration audit: 2026-01-31*
