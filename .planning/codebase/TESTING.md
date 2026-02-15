# Testing Patterns

**Analysis Date:** 2026-02-15

## Test Framework

**Current Status:** No testing framework currently configured or in use.

**Runner:**
- Not applicable (no tests exist in codebase)

**Assertion Library:**
- Not applicable

**Run Commands:**
```bash
# No test commands configured
# pnpm check       # Runs Biome linting/formatting check (not unit tests)
# pnpm fix         # Runs Biome formatter/linter
```

## Test File Organization

**Current Approach:**
- No test files present (verified with file search)
- No `jest.config.js`, `vitest.config.ts`, or similar test runner config

**Expected Structure (if tests were added):**
- Test files would likely use `.test.ts` or `.spec.ts` suffix
- Co-located with source files (e.g., `components/button.test.tsx` next to `components/button.tsx`)
- Or in separate `__tests__` directories following Next.js conventions

**Recommended Setup (Future):**
- Framework: Vitest (lightweight, fast, Vite-native) or Jest
- Location: Alongside source files with `.test.ts` suffix
- Coverage tool: Vitest with `@vitest/coverage-v8`

## Test Coverage Gaps

**Untested Areas:**
- **React Components:** All components lack unit tests
  - Files: `components/ui/*.tsx`, `components/forms/*.tsx`, `components/examples/*.tsx`
  - Risk: Component behavior changes go undetected; visual regression not caught
  - Priority: High - UI components are critical and frequently modified

- **Custom Hooks:** All custom hooks untested
  - Files: `hooks/use-mobile.ts`, `components/hooks/use-copy-to-clipboard.ts`
  - Risk: Hook state management bugs, lifecycle issues in production
  - Priority: High - hooks control state across multiple components

- **API Routes:** No API route tests
  - Files: `app/api/search/route.ts`, `app/r/registry.json/route.ts`, `app/r/[component]/route.ts`
  - Risk: API contract changes, error handling failures, tracking failures
  - Priority: Medium - limited external dependencies but critical for distribution

- **Server Actions:** Form submission action untested
  - Files: `server/projects.ts` (import in `submit-project-form.tsx`)
  - Risk: Data validation failures, project creation bugs
  - Priority: High - user-facing critical path

- **Utility Functions:** No tests for helpers
  - Files: `lib/utils.ts` (the `cn()` function), `lib/themes.ts`, `lib/source.ts`
  - Risk: Class merging or theme selection bugs across entire application
  - Priority: Medium - utilities are widely used

- **Form Validation:** Zod schema validation untested
  - Files: `components/forms/submit-project-form.tsx` (embedded `formSchema`)
  - Risk: Invalid data submitted to backend, client-side validation bypassed
  - Priority: High - data validation is critical

## Why Tests Are Missing

**No Testing Infrastructure:**
- No test runner dependencies in `package.json` (dev or otherwise)
- No test configuration files present
- No pre-commit hooks running tests
- `biome.jsonc` configured for linting only, not testing

**Development Stage:**
- Project appears to be in active development/refactoring phase (see git history with recent refactors)
- Focus has been on UI/UX and component design rather than test coverage
- Contributing guide mentions component development but doesn't mention testing requirements

## Recommended Testing Strategy

**Phase 1: Foundation (Highest Priority)**
1. Set up test runner (recommend Vitest for Next.js projects)
2. Write tests for critical hooks:
   - `useIsMobile()` - test media query listener behavior
   - `useCopyToClipboard()` - test clipboard API, timeout handling
3. Add tests for utility functions:
   - `cn()` function - test class merging with Tailwind
   - `getThemeCode()` - test theme resolution

**Phase 2: Component Testing (Medium Priority)**
1. Test form components:
   - `SubmitProjectForm` - test validation, submission, error states
   - Form field components - test input handling, error display
2. Test UI components:
   - `Button` - test variants and sizes
   - `Card` and subcomponents - test composition
3. Test interactive components:
   - `DataTable` - test sorting, filtering, pagination, drag-and-drop
   - `ThemeSelector` - test theme switching

**Phase 3: Integration/E2E (Lower Priority)**
1. API route testing (MSW for mocking)
2. Form submission flow (component + server action)
3. Page-level interactions

## Testing Patterns to Adopt

**Hook Testing Pattern:**
```typescript
// Example for useIsMobile hook testing
import { renderHook, waitFor } from '@testing-library/react';
import { useIsMobile } from '@/hooks/use-mobile';

describe('useIsMobile', () => {
  it('returns false for desktop viewport', () => {
    // Mock window.innerWidth
    // Mock matchMedia
  });

  it('updates on resize', async () => {
    // Test media query listener
  });
});
```

**Component Testing Pattern (TanStack Form Example):**
```typescript
// Components using @tanstack/react-form need form context
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SubmitProjectForm } from '@/components/forms/submit-project-form';

describe('SubmitProjectForm', () => {
  it('validates project name length', async () => {
    render(<SubmitProjectForm />);
    const input = screen.getByPlaceholderText('project name');
    await userEvent.type(input, 'ab'); // < MIN_PROJECT_NAME_LENGTH
    // Expect validation error
  });
});
```

**API Route Testing Pattern:**
```typescript
// Using MSW for mocking external calls
import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import { server } from '@/mocks/server';
import { GET } from '@/app/api/search/route';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());

describe('GET /api/search', () => {
  it('returns registry JSON', async () => {
    const response = await GET(new Request('http://localhost/api/search'));
    const json = await response.json();
    expect(json).toHaveProperty('components');
  });
});
```

**Component Snapshot Testing (with Caution):**
- Can be used for UI components to catch unintended visual changes
- Not recommended for snapshot testing of complex interactive components
- Use more specific assertions for behavior testing

## Code Quality Tools (Current)

**Biome (Linting & Formatting):**
- Configured via `biome.jsonc`
- Runs on pre-commit via `lint-staged`
- Command: `pnpm check` (validate), `pnpm fix` (apply fixes)
- Covers code style, but NOT functionality testing

**Pre-commit Hooks:**
- `lint-staged` configured in `package.json`
- Runs `pnpm check` on `*.{js,ts,jsx,tsx,json,css,md}` files
- No test execution currently

## Future Considerations

**Testing Framework Choice:**
- **Vitest:** Modern, fast, ESM-native, great Next.js support
- **Jest:** Industry standard, more mature ecosystem, slower
- Recommendation: Vitest for this Next.js project

**Additional Tools:**
- `@testing-library/react` for component testing
- `@testing-library/user-event` for realistic user interactions
- `msw` (Mock Service Worker) for API mocking
- `@vitest/coverage-v8` for coverage reports
- Consider adding coverage threshold enforcement in CI

**CI Integration:**
- Tests should run in GitHub Actions before merge
- Coverage reports should be available for PRs
- Currently no CI pipeline configured (verify `.github/workflows/`)

---

*Testing analysis: 2026-02-15*
*Current state: Testing infrastructure not yet implemented*
*Recommendation: Begin with Phase 1 (foundational tests) for hooks and utilities*
