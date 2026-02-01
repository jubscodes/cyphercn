# Testing Patterns

**Analysis Date:** 2026-01-31

## Test Framework

**Status:** No testing framework configured or in use

The codebase does not have any testing infrastructure set up. No Jest, Vitest, or other test runners are configured.

**package.json devDependencies:** No testing-related packages found (jest, vitest, mocha, chai, testing-library, etc.)

**Configuration files:** None detected (jest.config.*, vitest.config.*, etc.)

## No Test Files Found

The project contains no `.test.ts`, `.test.tsx`, `.spec.ts`, or `.spec.tsx` files in the application code.

Search results:
- `/Users/jubs/Development/8bitcn-ui/app/` - No test files
- `/Users/jubs/Development/8bitcn-ui/components/` - No test files
- `/Users/jubs/Development/8bitcn-ui/lib/` - No test files
- `/Users/jubs/Development/8bitcn-ui/server/` - No test files

Tests found in `node_modules/` only (from dependencies like `@mswjs/interceptors`, `until-async`, etc.)

## Recommendation for Future Testing Implementation

Should testing be required in the future, the following approach is recommended based on codebase structure:

**Suggested Stack:**
- **Test Runner:** Vitest (modern, Fast, Vite-native)
- **React Testing:** React Testing Library (user-centric testing)
- **Mocking:** MSW (Mock Service Worker) for API mocking
- **Assertion Library:** Vitest built-in assertions (compatible with Jest)

**Example Setup (for future reference):**

```typescript
// vitest.config.ts (to create)
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

**Test File Location Pattern:**
```
components/
├── button.tsx
├── button.test.tsx        # Co-located tests
└── ...

lib/
├── utils.ts
├── utils.test.ts          # Co-located tests
└── ...
```

## Current Code Quality Approach

**Linting & Formatting:**
- Biome v2.3.11 handles code quality checks
- Run with: `pnpm check` (verify) and `pnpm fix` (auto-fix)
- Covers TypeScript, JSX, JSON, CSS, and Markdown files

**Type Safety:**
- TypeScript strict mode enabled (`strict: true`, `strictNullChecks: true`)
- Zod for runtime schema validation: `z.infer<typeof schema>`
- Type-safe database operations with Drizzle ORM

**Pre-commit Hooks:**
- Husky v9.1.7 configured
- lint-staged v16.2.7 for staged file linting
- Configuration in `package.json`:
  ```json
  "lint-staged": {
    "*.{js,ts,jsx,tsx,json,css,md}": "pnpm check"
  }
  ```

## Areas Lacking Test Coverage

Critical areas that would benefit from unit and integration tests:

### High Priority:

1. **Form Validation:**
   - `components/forms/submit-project-form.tsx` - Form submission logic
   - `components/profile-creator.tsx` - Complex form state with URL validation
   - Need: Tests for regex patterns (HTTP_URL_REGEX, AT_SYMBOL_REGEX)

2. **Server Actions:**
   - `server/projects.ts` - Database operations
   - `createProject()` - Duplicate checking, error handling
   - Need: Tests for database queries, error cases

3. **State Management:**
   - `components/active-theme.tsx` - Theme context, URL sync logic
   - Complex useEffect dependencies and microtask queue operations
   - Need: Tests for theme switching, URL parameter updates

4. **Data Transformations:**
   - `components/profile-creator.tsx` - HTML code generation
   - `components/profile-creator.tsx` - Image export with font embedding
   - Need: Tests for code generation output, edge cases (special characters, etc.)

5. **Data Table Operations:**
   - `components/data-table.tsx` - Drag-and-drop, pagination, column visibility
   - Complex state management with multiple sources
   - Need: Tests for drag operations, filtering, sorting, pagination

### Medium Priority:

1. **Utility Functions:**
   - `lib/utils.ts` - `cn()` function for class merging
   - `lib/themes.ts` - Theme lookup and code generation
   - Need: Basic unit tests for output

2. **Custom Hooks:**
   - `hooks/use-mobile.ts` - Media query listener
   - Need: Tests for hook behavior at different screen sizes

3. **API Integration:**
   - Profile submission endpoints
   - Project creation API
   - Need: Integration tests with mock handlers

## Manual Testing Areas

Without automated tests, the following manual testing practices are evident:

1. **Component Rendering:**
   - Examples directory shows component usage patterns
   - Visual regression testing would be manual via design review

2. **Interactive Features:**
   - Drag-and-drop tested manually via page interaction
   - Theme switching tested via browser DevTools
   - Form submission tested through UI interaction

3. **Browser Compatibility:**
   - Responsive design tested at breakpoint (`MOBILE_BREAKPOINT = 768px`)
   - Device testing via browser inspector

## Example of Untested Logic

**Image Export Function** (`components/profile-creator.tsx`, lines 276-330):
- Fetches Google Fonts CSS
- Embeds fonts as base64 data URLs
- Generates PNG with html-to-image library
- Currently has error handling but no test coverage

```typescript
const getImage = async () => {
  // Complex logic here:
  // 1. Fetch Google Fonts CSS
  // 2. Replace font URLs with base64 data
  // 3. Generate PNG
  // 4. Download file
  try {
    // ... implementation ...
  } catch (e) {
    console.error("html-to-image failed", e);
    toast("Failed to generate profile card, try with manual upload.");
  }
};
```

---

*Testing analysis: 2026-01-31*
