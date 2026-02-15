# Coding Conventions

**Analysis Date:** 2026-02-15

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `NavMain`, `ThemeSelector`, `SubmitProjectForm`)
- Hooks: camelCase with `use` prefix (e.g., `useCopyToClipboard`, `useIsMobile`)
- Utilities: camelCase (e.g., `getThemeCode`, `cn`, `absoluteUrl`)
- UI Components: PascalCase with nested component exports (e.g., `Card`, `CardHeader`, `CardContent`)
- API routes: lowercase with hyphens in directory names (e.g., `/app/api/search/route.ts`)
- Constants: SCREAMING_SNAKE_CASE (e.g., `MOBILE_BREAKPOINT`, `MIN_PROJECT_NAME_LENGTH`, `MAX_PROJECT_NAME_LENGTH`)

**Functions:**
- Exported functions use camelCase (e.g., `cn()`, `useForm()`, `getThemeCode()`)
- React components use PascalCase
- Event handlers: `handle[EventName]` pattern (e.g., `handleSubmit()`, `handleDragEnd()`, `handleChange()`)
- Getter/setter prefixes: `use` for hooks, `get` for pure functions

**Variables:**
- camelCase for all variables (e.g., `isMobile`, `isSubmitting`, `activeTheme`, `isInvalid`)
- State variables using hooks: `[state, setState]` pattern
- Boolean variables prefixed with `is`, `has`, `should`, `can` (e.g., `isCopied`, `isSubmited`, `hasData`)

**Types:**
- Interfaces: PascalCase (exported from external libraries via `type` imports)
- Type aliases: PascalCase (e.g., `Theme`)
- Generic parameters: Single uppercase letter or descriptive PascalCase (e.g., `T`, `Row`)

## Code Style

**Formatting:**
- Tool: Biome (biomejs)
- Config: `biome.jsonc` at root
- Line length: Default Biome settings
- Indentation: 2 spaces (enforced by Biome)
- Semicolons: Required (enforced by Biome)

**Linting:**
- Tool: Biome (extends `ultracite/core`, `ultracite/next`, `ultracite/react`)
- Config: `biome.jsonc` with custom includes/excludes
- Excluded paths: `!public`, `!components/ui`, `!hooks/use-mobile.ts`, `!lib/utils.ts`, `!.source`
- Run command: `pnpm check` (checks and validates)
- Fix command: `pnpm fix` (applies fixes)
- Pre-commit hook: `lint-staged` runs `pnpm check` on staged files

**Ignored in linting:**
- shadcn UI components and utilities (marked with `// biome-ignore-all` when necessary)
- Third-party UI library components

## Import Organization

**Order:**
1. Node.js built-in modules (e.g., `import * as React from "react"`)
2. Third-party packages (e.g., `@tabler/icons-react`, `zod`, `next/link`)
3. Radix UI and component libraries (e.g., `@radix-ui/react-slot`)
4. Type imports from external libraries (e.g., `type Icon from "@tabler/icons-react"`)
5. Local utility imports (e.g., `@/lib/utils`)
6. Local component imports (e.g., `@/components/ui/button`)
7. Server action imports (e.g., `@/server/projects`)
8. Custom hooks (e.g., `./active-theme`)
9. Sibling components in same directory (e.g., `./CodeSnippet`)

**Path Aliases:**
- `@/*` maps to root directory (configured in `tsconfig.json`)
- Used consistently throughout codebase (e.g., `@/components`, `@/lib`, `@/hooks`, `@/server`)
- Never use relative imports; always use path aliases

## Error Handling

**Patterns:**
- Try-catch blocks used selectively, mainly in API routes and server actions
- Error logging: `console.error()` in catch blocks for non-critical errors
- User-facing errors: Return error strings or use `toast.error()` for user notification (see `SubmitProjectForm`)
- Async functions in forms: Wrapped in try-catch with error state management
- Promise handling: `.catch()` chains with `console.error()` for analytics/tracking errors
- Validation: Zod schemas for form/data validation, with errors displayed via UI components

**Example from `submit-project-form.tsx`:**
```typescript
onSubmit: async ({ value }) => {
  try {
    const newProject = await createProject({
      name: value.projectName,
      url: value.url,
    });

    if (typeof newProject === "string") {
      toast.error(newProject);
      return;
    }

    toast.success("Project submitted successfully. Good luck!");
  } catch {
    throw new Error("Failed to create project");
  }
}
```

## Logging

**Framework:** `console` (native browser/Node.js APIs)

**Patterns:**
- `console.error()` for error logging in catch blocks
- `console.warn()` for warnings (e.g., missing data validation)
- No structured logging library in use
- Errors in try-catch blocks in API routes and server actions logged to console
- Analytics tracking wrapped in try-catch to prevent blocking main operations (see `registry.json/route.ts`)

**When to log:**
- Only in error/catch scenarios for user-facing operations
- In API routes when errors occur during external service calls
- Not in component render paths (avoid console logs in production React code)

## Comments

**When to Comment:**
- Explain complex business logic or domain-specific decisions
- Document workarounds or non-obvious implementations
- In comments within form validation or configuration objects (see `submit-project-form.tsx` with URL regex explanation)
- Multi-line comments for complex algorithm explanations

**JSDoc/TSDoc:**
- Minimal usage; types are preferred over JSDoc for documentation
- Component props documented through TypeScript types rather than JSDoc comments
- Used selectively for complex utility functions

**Ignore directives:**
- `// biome-ignore-all` used in shadcn UI components to skip linting
- `// eslint-disable-next-line react-hooks/incompatible-library` used for specific hook warnings

## Function Design

**Size:**
- Prefer smaller, focused functions
- Components with complex logic extracted into separate functions (see `DragHandle`, `DraggableRow` in `data-table.tsx`)
- Event handlers kept inline or extracted if reused

**Parameters:**
- Use destructured object parameters for components (see `NavMain` component takes `{ items }` object)
- Function parameters typed explicitly with TypeScript
- Default parameters used (e.g., `timeout = 2000` in `useCopyToClipboard`)
- Optional parameters marked with `?` in TypeScript

**Return Values:**
- Components return JSX
- Hooks return state and handlers (tuple pattern for simple hooks)
- Utility functions explicit about return types
- API routes return `NextResponse.json()`
- Server actions return data or error strings for error handling

## Module Design

**Exports:**
- Named exports preferred over default exports
- Multiple related exports grouped (e.g., Card subcomponents: `CardHeader`, `CardContent`, `CardFooter`)
- Re-exports from `index.ts` files in component directories (e.g., `components/ui/cypher/index.ts`)
- Type exports use `export type` syntax

**Barrel Files:**
- Used in `components/ui/` for consistent exports
- Not used in simpler directories like `lib/` or `hooks/`
- Example: `components/ui/cypher/index.ts` exports multiple component variants

**Component Composition:**
- UI components composed from Radix UI primitives
- Radix `Slot` component used for polymorphic component behavior (e.g., `asChild` prop)
- Class merging with `cn()` utility (combines `clsx` and `tailwind-merge`)
- Data slot attributes used on elements for styling targeting (e.g., `data-slot="card"`)

## TypeScript

**Configuration:**
- Target: `ES2017`
- `strict: true` and `strictNullChecks: true`
- Module resolution: `bundler` (for Next.js)
- JSX: `react-jsx`

**Usage Patterns:**
- Explicit type annotations on function parameters
- Inferred return types where obvious
- `type` imports for TypeScript-only constructs
- Union types for variant props (see `buttonVariants` in button component)
- `z.infer<typeof schema>` for deriving types from Zod schemas

**Null Safety:**
- Strict null checks enforced
- Optional chaining and nullish coalescing used
- Type guards for conditional rendering (e.g., `if (isAssigned) return` pattern in data table)

## File Structure Conventions

**Co-location:**
- Component files with related styles/types in same directory
- UI component variants organized under `components/ui/cypher/` for terminal-styled variants
- Examples organized under `components/examples/`
- Forms organized under `components/forms/`

**Naming consistency:**
- Dashboard, page, and layout files follow Next.js conventions
- API route files named `route.ts` in their respective directories
- Test files would be named `[filename].test.ts` or `[filename].spec.ts` (currently no tests)
