# Coding Conventions

**Analysis Date:** 2026-01-31

## Naming Patterns

**Files:**
- React components: PascalCase (`ProfileCard.tsx`, `DataTable.tsx`, `ActiveTheme.tsx`)
- Hooks: camelCase prefixed with `use-` (`use-mobile.ts`)
- Utilities: camelCase (`utils.ts`, `themes.ts`)
- Pages/routes: lowercase with hyphens in directories (`app/profile-creator/page.tsx`)
- Example components in subdirectories: camelCase (`calendar.tsx`, `command.tsx`)

**Functions:**
- Component functions: PascalCase (`function ProfileCreator()`, `export function DataTable()`)
- Regular functions: camelCase (`function handleDragEnd()`, `const getThemeCode = ...`)
- Handler functions: prefixed with `handle` or `get/set` (`handleDragEnd`, `getImage`, `setProfileImage`)

**Variables:**
- Constants: camelCase for regular constants, UPPER_SNAKE_CASE for configuration constants
  - `const MOBILE_BREAKPOINT = 768`
  - `const COOKIE_NAME = "active_theme"`
  - `const DEFAULT_THEME = Theme.Default`
- Regular variables: camelCase (`activeTheme`, `tempImage`, `rowSelection`)
- State variables: camelCase with descriptive names (`isMobile`, `isDragging`, `isRetroAvatar`)

**Types:**
- Type names: PascalCase (`ThemeContextType`, `InsertProject`, `SelectProject`)
- Enum-like objects: PascalCase for properties (`Theme.Default`, `Theme.Sega`)
- Zod schemas: lowercase (`schema`)

## Code Style

**Formatting:**
- Tool: Biome v2.3.11 (configured in `biome.jsonc`)
- Configuration extends: `ultracite/core`, `ultracite/next`, `ultracite/react`
- Line length: No explicit specification, but code follows standard formatting
- Indentation: 2 spaces (inferred from patterns)

**Linting:**
- Tool: Biome for linting and formatting
- Commands:
  ```bash
  pnpm check    # Run Biome checks
  pnpm fix      # Auto-fix Biome issues
  ```
- Configuration location: `/Users/jubs/Development/8bitcn-ui/biome.jsonc`
- Ignored paths: `public/`, `components/ui/`, `hooks/use-mobile.ts`, `lib/utils.ts`, `.source/`

**Biome ignore directives:**
- Used for specific lint rule suppressions: `// biome-ignore lint/<rule-path>: <reason>`
  - Example: `// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API is not widely supported yet`
  - Example: `// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: This function generates HTML code...`
  - Example: `// biome-ignore lint/performance/noNamespaceImport: html-to-image library exports are designed...`

## Import Organization

**Order:**
1. React and Next.js imports (`"use client"` at top of client components)
2. Third-party library imports (grouped by package)
3. Internal component imports from `@/components`
4. Internal utility/hook imports from `@/lib`, `@/hooks`, `@/db`, etc.
5. Type imports (using `type` keyword)

**Pattern:**
```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";

import { Button } from "@/components/ui/8bit/button";
import { useThemeConfig } from "@/components/active-theme";
import { cn } from "@/lib/utils";
import type { Theme } from "@/lib/themes";
```

**Path Aliases:**
- `@/*` points to project root (configured in `tsconfig.json`)
- Used consistently throughout codebase for clean imports
- Barrel files created in some directories but not consistently used

## Error Handling

**Patterns:**
- Try-catch blocks for async operations:
  ```typescript
  try {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  } catch {
    throw new Error("Failed to create project");
  }
  ```

- Error returns (dual return values):
  ```typescript
  export async function createProject(
    project: InsertProject
  ): Promise<string | SelectProject> {
    const check = await db.query.projects.findFirst({...});
    if (check) {
      return "Project already added.";  // Returns error string
    }
    // ... rest of logic
  }
  ```

- Toast notifications for user-facing errors:
  ```typescript
  import { toast } from "sonner";
  toast.promise(new Promise(...), {
    loading: "Loading...",
    success: "Done",
    error: "Error",
  });
  ```
  Or catch errors:
  ```typescript
  catch (e) {
    console.error("html-to-image failed", e);
    toast("Failed to generate profile card, try with manual upload.");
  }
  ```

- Conditional rendering for missing data:
  ```typescript
  if (!node) {
    return;
  }
  ```

## Logging

**Framework:** `console.error()` for error logging

**Patterns:**
- Error logging: `console.error("context or library failed", error)`
- Example: `console.error("html-to-image failed", e);`

## Comments

**When to Comment:**
- Complex logic explanations (e.g., microtask queue deferring for URL synchronization)
- Workarounds and why they exist (see `active-theme.tsx` for URL sync comments)
- HTML generation code with inline comments for conditionals
- Suppress specific linter warnings with explanation

**JSDoc/TSDoc:**
- Not consistently used
- When present, focuses on function purpose and parameters
- Example comment pattern: `// Note: when a file is uploaded we convert it to a data URL...`

## Function Design

**Size:** Functions are moderately sized, with complex logic broken into smaller components
- Example: `generateProfileCardCode()` in `profile-creator.tsx` is 150+ lines for HTML generation
- Helper functions like `DragHandle()` extracted for clarity in `data-table.tsx`

**Parameters:**
- Use destructuring for object parameters: `function DragHandle({ id }: { id: number })`
- Use type definitions for parameters: `data: z.infer<typeof schema>[]`
- Props in components use interface pattern: `{ data: z.infer<typeof schema>[] }`

**Return Values:**
- Components return JSX elements
- Functions return typed values: `Promise<string | SelectProject>`
- Nullable returns use `| undefined` or `| null`
- Complex returns use union types

## Module Design

**Exports:**
- Named exports for utilities and functions: `export function cn(...)`
- Default exports for page components: `export default function Home()`
- Default exports for feature components: `export default function ProfileCreator()`
- Named exports for smaller reusable components: `export function CalendarExample()`

**Barrel Files:**
- UI components often imported directly: `@/components/ui/8bit/button`
- No observable use of barrel index.ts files in main codebase
- lib utilities imported individually: `@/lib/utils`, `@/lib/themes`

**File Organization:**
- Related functionality grouped in same directory (e.g., `components/examples/`)
- UI component library in `components/ui/8bit/`
- Shared utilities in `lib/`
- Server actions in `server/`
- Database logic in `db/`

## TypeScript Usage

**Strict Mode:** Enabled in `tsconfig.json`
- `strict: true`
- `strictNullChecks: true`

**Typing Patterns:**
- Zod for schema validation and type inference: `z.infer<typeof schema>`
- Interface definitions for context types: `interface ThemeContextType`
- Type assertions in event handlers: `const node = document.getElementById(...) as HTMLElement | null`
- Union types for flexible returns: `Promise<string | SelectProject>`

## React Patterns

**Client Components:**
- Marked with `"use client"` directive at file top
- Used for interactive components and hooks

**Server Components:**
- Page components and layout files use server rendering by default
- Example: `app/layout.tsx`, `app/page.tsx`

**Hooks:**
- Custom hooks stored in `hooks/` directory
- Standard React hooks imported from `"react"`
- Hooks follow naming convention `use*`

**State Management:**
- `useState` for local component state
- Context API with `createContext` and `useContext` for theme management
- URL state with `useQueryStates` from `nuqs` library

---

*Convention analysis: 2026-01-31*
