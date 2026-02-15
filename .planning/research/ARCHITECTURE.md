# Architecture Patterns: Component Library Refactoring

**Domain:** Component library transformation (8bitcn-ui to CyberCN)
**Researched:** 2026-01-31
**Confidence:** HIGH (based on existing codebase analysis)

## Recommended Architecture

The transformation from 8bitcn-ui to CyberCN follows a **variant-parallel architecture** where new cyberpunk components coexist with existing 8-bit variants, maintaining shadcn registry compatibility throughout.

### Architecture Pattern: Variant Isolation

```
components/
├── ui/                          # Base shadcn components (unchanged)
│   ├── button.tsx              # Core component with CVA variants
│   ├── card.tsx
│   └── ...
├── ui/8bit/                     # 8-bit variant (existing, preserved)
│   ├── button.tsx              # Wraps ui/button.tsx + pixel borders
│   ├── card.tsx
│   ├── styles/
│   │   └── retro.css          # Shared 8-bit styling
│   └── ...
└── ui/cyber/                    # NEW: Cyberpunk variant (to create)
    ├── button.tsx              # Wraps ui/button.tsx + terminal styling
    ├── card.tsx
    ├── styles/
    │   └── cyber.css          # Shared cyberpunk styling
    └── ...
```

**Key architectural principle:** Variants wrap base components, never replace them. This maintains:
- Registry compatibility (base components remain unchanged)
- Component composition (variants add styling, not logic)
- Backward compatibility (8-bit variants continue working)

### Component Boundaries

| Component Layer | Responsibility | Dependencies |
|----------------|---------------|--------------|
| **Base Components** (`ui/`) | Core functionality, accessibility, Radix UI integration | Radix UI, CVA, tailwind-merge |
| **Variant Components** (`ui/8bit/`, `ui/cyber/`) | Visual theming, border styling, typography overrides | Base components, variant CSS |
| **Variant Styles** (`ui/{variant}/styles/`) | CSS rules for fonts, effects (CRT, scanlines, glows) | External fonts (Google Fonts, local) |
| **Theme System** (`globals.css`) | CSS variables for colors, spacing, shadows | Tailwind CSS v4 inline theme |
| **Registry** (`registry.json`) | Component distribution metadata | Variant components + dependencies |

### Data Flow

1. **User imports component from registry**
   ```bash
   npx shadcn@latest add https://8bitcn.com/r/cyber-button.json
   ```

2. **Registry resolves dependencies**
   - Fetches `cyber/button.tsx`
   - Includes `cyber/styles/cyber.css`
   - May include base `ui/button.tsx` if not present

3. **Component renders with theme**
   - Variant component wraps base component
   - CSS variables from `theme-cyber` apply
   - Additional styling from `cyber.css` applies

4. **Visual result**
   - Terminal borders (thin, phosphor green)
   - Cyberpunk typography (monospace, uppercase)
   - CRT effects (scanlines, glow, flicker)

## Refactoring Approach: Systematic Component Transformation

### Phase 1: Foundation (Do First)

**Create shared infrastructure before touching components.**

#### 1.1 Create Cyber Theme System
**When:** Phase 1, Day 1
**What:**
- Add `theme-cyber` CSS variables to `app/globals.css`
- Define color palette (phosphor green, amber, cyan accents)
- Set up typography variables (monospace, tracking)
- Configure CRT effect variables (glow intensity, scanline opacity)

**Why first:** All components depend on theme variables. Creating theme first prevents rework.

**Breaking changes:** None (additive only)

#### 1.2 Create Cyber CSS Utilities
**When:** Phase 1, Day 2-3
**What:**
- Create `components/ui/cyber/styles/cyber.css`
- Define utility classes:
  - `.cyber` - base cyberpunk styling
  - `.terminal-border` - thin phosphor border
  - `.scanline` - CRT scanline effect
  - `.phosphor-glow` - green glow effect
  - `.dithered` - image dithering filter

**Why first:** Components reference these classes. CSS must exist before components.

**Breaking changes:** None (new file)

#### 1.3 Set Up Font Loading
**When:** Phase 1, Day 3-4
**What:**
- Add IBM Plex Mono or similar monospace font
- Configure font loading in `app/layout.tsx`
- Add font-face declarations to `cyber.css`

**Why first:** Prevents FOUT (flash of unstyled text) during component development.

**Breaking changes:** None (theme-scoped fonts)

### Phase 2: Primitive Components (Build Order)

**Transform components with NO dependencies first.**

#### Component Dependency Tiers

**Tier 0: Zero Dependencies**
These components import ONLY base shadcn components and utilities.

| Component | Why No Dependencies | Transform Order |
|-----------|-------------------|-----------------|
| `separator.tsx` | Pure visual element | 1 (easiest) |
| `badge.tsx` | Standalone indicator | 2 |
| `skeleton.tsx` | Loading placeholder | 3 |
| `progress.tsx` | Standalone bar | 4 |

**Transform approach:**
1. Copy base component structure
2. Wrap with cyber styling
3. Replace borders (8-bit pixel → thin terminal)
4. Add phosphor glow effects
5. Test in isolation

**Tier 1: Single Dependency**
These components depend on ONE other component.

| Component | Dependency | Transform Order |
|-----------|-----------|-----------------|
| `button.tsx` | None (uses base only) | 5 |
| `input.tsx` | None | 6 |
| `textarea.tsx` | None | 7 |
| `label.tsx` | None | 8 |
| `alert.tsx` | None | 9 |

**Tier 2: Compound Components**
These have multiple sub-components but no external dependencies.

| Component | Sub-components | Transform Order |
|-----------|---------------|-----------------|
| `card.tsx` | Header, Title, Description, Content, Footer | 10 |
| `accordion.tsx` | Item, Trigger, Content | 11 |
| `tabs.tsx` | List, Trigger, Content | 12 |

**Tier 3: Overlay Components**
These use portals or complex Radix primitives.

| Component | Radix Primitive | Transform Order |
|-----------|----------------|-----------------|
| `dialog.tsx` | Dialog | 13 |
| `popover.tsx` | Popover | 14 |
| `tooltip.tsx` | Tooltip | 15 |
| `dropdown-menu.tsx` | DropdownMenu | 16 |
| `context-menu.tsx` | ContextMenu | 17 |

**Tier 4: Composite Components**
These combine multiple components.

| Component | Dependencies | Transform Order |
|-----------|-------------|-----------------|
| `command.tsx` | Dialog, Input, List | 18 |
| `select.tsx` | Popover, Button | 19 |
| `combobox.tsx` | Popover, Command | 20 |
| `date-picker.tsx` | Popover, Calendar | 21 |

### Phase 3: Complex Components (Last)

**Tier 5: Data Components**
These handle complex data structures.

| Component | Complexity | Transform Order |
|-----------|-----------|-----------------|
| `table.tsx` | Sorting, filtering | 22 |
| `data-table.tsx` | Pagination, selection | 23 |
| `chart.tsx` | Recharts integration | 24 |

**Tier 6: Layout Components**
These affect page structure.

| Component | Complexity | Transform Order |
|-----------|-----------|-----------------|
| `sheet.tsx` | Slide-over panel | 25 |
| `drawer.tsx` | Bottom drawer | 26 |
| `navigation-menu.tsx` | Multi-level nav | 27 |

## Patterns to Follow

### Pattern 1: Variant Wrapper Pattern
**What:** Cyber components wrap base components, adding only styling.

**When:** All component transformations

**Example:**
```typescript
// components/ui/cyber/button.tsx
import { Button as BaseButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "@/components/ui/cyber/styles/cyber.css";

export const buttonVariants = cva(
  "cyber terminal-border phosphor-glow",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        ghost: "bg-transparent hover:bg-primary/10",
      },
      size: {
        default: "h-9 px-4 text-sm",
        sm: "h-8 px-3 text-xs",
      },
    },
  }
);

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

**Why:** Preserves base component logic and accessibility while changing appearance.

### Pattern 2: Theme-Scoped Styling
**What:** Use theme CSS variables for all colors and effects.

**When:** Any color or visual effect

**Example:**
```css
/* components/ui/cyber/styles/cyber.css */
.cyber {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide, 0.05em);
}

.terminal-border {
  border: 1px solid var(--phosphor);
  box-shadow: 0 0 4px var(--phosphor-glow);
}

.phosphor-glow {
  text-shadow:
    0 0 2px var(--phosphor),
    0 0 4px var(--phosphor-glow);
}
```

**Why:** Theme variables enable easy color switching and maintain consistency.

### Pattern 3: Progressive Enhancement
**What:** Add effects that gracefully degrade.

**When:** CRT effects, animations, complex visuals

**Example:**
```css
/* Scanlines - optional effect */
.scanline::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    var(--phosphor-dim) 2px,
    var(--phosphor-dim) 3px
  );
  opacity: 0.1;
  pointer-events: none;
  animation: scanline-flicker 8s infinite;
}

/* Disable in reduced motion */
@media (prefers-reduced-motion: reduce) {
  .scanline::before {
    animation: none;
  }
}
```

**Why:** Accessibility and performance. Users can disable effects.

### Pattern 4: Registry Dependency Declaration
**What:** Explicitly declare all dependencies in registry.json.

**When:** Adding any component to registry

**Example:**
```json
{
  "name": "cyber-button",
  "type": "registry:component",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "components/ui/cyber/button.tsx",
      "type": "registry:component",
      "target": "components/ui/cyber/button.tsx"
    },
    {
      "path": "components/ui/cyber/styles/cyber.css",
      "type": "registry:component",
      "target": "components/ui/cyber/styles/cyber.css"
    }
  ]
}
```

**Why:** Ensures users get all required files. Prevents broken imports.

### Pattern 5: Shared Utilities Extraction
**What:** Extract common styling logic to shared utilities.

**When:** Same pattern used in 3+ components

**Example:**
```typescript
// components/ui/cyber/lib/cyber-utils.ts
export function terminalBorder(className?: string) {
  return cn(
    "border border-foreground",
    "shadow-[0_0_4px_var(--phosphor-glow)]",
    className
  );
}

export function cyberText(className?: string) {
  return cn(
    "cyber",
    "uppercase tracking-wider",
    "font-mono",
    className
  );
}

// Usage in components
<div className={terminalBorder("bg-card p-4")}>
  <h2 className={cyberText("text-lg")}>Terminal</h2>
</div>
```

**Why:** DRY principle. Single source of truth for common patterns.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Modifying Base Components
**What:** Changing `ui/button.tsx` to add cyber styling.

**Why bad:**
- Breaks shadcn registry compatibility
- Breaks 8-bit variant (depends on base)
- Prevents future shadcn updates
- Violates Open-Closed Principle

**Instead:** Create `ui/cyber/button.tsx` that wraps base.

**Detection:** Any changes to files in `components/ui/*.tsx` (except new files).

### Anti-Pattern 2: Duplicating Base Logic
**What:** Copying entire button component code and modifying styling.

**Why bad:**
- Duplicates accessibility logic
- Duplicates Radix UI integration
- Bugs in base won't be fixed in variant
- Maintenance nightmare (two sources of truth)

**Instead:** Import and wrap base component.

**Detection:** Seeing Radix UI imports in variant components.

### Anti-Pattern 3: Hard-Coded Colors
**What:** Using `text-green-500` instead of `text-phosphor`.

**Why bad:**
- Can't change theme colors
- Can't support light/dark mode properly
- Inconsistent colors across components

**Instead:** Use CSS variables via theme classes.

**Detection:** Grep for `text-\[color\]-\d+` or `bg-\[color\]-\d+` in cyber components.

### Anti-Pattern 4: Inline Styles for Effects
**What:** Adding CRT effects via `style={{}}` prop.

**Why bad:**
- Can't be overridden by users
- Violates CSP (Content Security Policy)
- Performance issues (no CSS caching)

**Instead:** Use CSS classes defined in `cyber.css`.

**Detection:** `style={{` in variant components (except Radix-required).

### Anti-Pattern 5: Breaking Registry Schema
**What:** Not following shadcn registry.json schema.

**Why bad:**
- Components won't install via CLI
- Missing dependencies cause import errors
- Breaks discoverability

**Instead:** Follow exact schema from shadcn documentation.

**Detection:** Install test - `npx shadcn@latest add` fails.

## Transformation Workflow (Per Component)

### Step-by-Step Process

#### Step 1: Analysis
- [ ] Identify base component in `ui/`
- [ ] List all sub-components (e.g., Card has Header, Title, etc.)
- [ ] Check 8-bit variant for reference patterns
- [ ] Note any Radix UI primitives used

#### Step 2: Structure Creation
- [ ] Create `ui/cyber/{component}.tsx`
- [ ] Import base component(s)
- [ ] Import cyber.css
- [ ] Set up CVA variants

#### Step 3: Styling Transformation
- [ ] Replace pixel borders → thin terminal borders
- [ ] Replace 8-bit font → monospace
- [ ] Add phosphor glow effects
- [ ] Add uppercase text transform
- [ ] Remove rounded corners (sharp terminal aesthetic)

#### Step 4: Testing
- [ ] Visual test: Matches cyberpunk aesthetic
- [ ] Accessibility test: Keyboard navigation works
- [ ] Theme test: Works in light/dark mode
- [ ] Responsive test: Mobile/desktop rendering

#### Step 5: Registry Entry
- [ ] Add to `registry.json`
- [ ] Declare dependencies
- [ ] List all required files
- [ ] Test CLI installation

#### Step 6: Documentation
- [ ] Update component docs
- [ ] Add usage examples
- [ ] Document props/variants
- [ ] Note breaking changes (if any)

### Checklist Template (Copy per Component)

```markdown
## [Component Name] Transformation

**Base:** `ui/{component}.tsx`
**Variant:** `ui/cyber/{component}.tsx`
**Dependencies:** [list]

### Analysis
- [ ] Base component reviewed
- [ ] Sub-components identified: [list]
- [ ] Radix primitives noted: [list]
- [ ] 8-bit variant referenced

### Implementation
- [ ] File created: `ui/cyber/{component}.tsx`
- [ ] Base component imported
- [ ] cyber.css imported
- [ ] CVA variants defined
- [ ] Border styling updated (pixel → terminal)
- [ ] Typography updated (retro → cyber)
- [ ] Glow effects added
- [ ] Uppercase transform applied

### Testing
- [ ] Visual: Cyberpunk aesthetic ✓
- [ ] Accessibility: Keyboard nav ✓
- [ ] Theme: Light/dark modes ✓
- [ ] Responsive: Mobile/desktop ✓
- [ ] Integration: Works with other cyber components ✓

### Registry
- [ ] Entry added to registry.json
- [ ] Dependencies declared
- [ ] Files listed
- [ ] CLI install tested

### Documentation
- [ ] Component docs updated
- [ ] Examples added
- [ ] Props documented
- [ ] Breaking changes noted (if any)

**Status:** [ ] Not Started | [ ] In Progress | [ ] Complete
```

## Breaking Changes Strategy

### Types of Changes

#### Non-Breaking (Safe)
- Adding new variant components (e.g., `ui/cyber/button.tsx`)
- Adding new CSS files
- Adding new theme variables
- Adding new registry entries

**Impact:** Zero. Users opt-in by importing cyber variants.

#### Potentially Breaking (Caution)
- Changing theme variable names
- Removing old variants
- Restructuring file paths

**Impact:** Medium. Only affects users who customized themes.

**Mitigation:**
1. Keep old variable names as aliases
2. Add deprecation warnings
3. Document migration path
4. Provide codemod scripts

#### Breaking (Avoid)
- Modifying base component APIs
- Removing base components
- Changing registry schema

**Impact:** High. Breaks existing installations.

**Mitigation:**
1. DON'T DO THIS
2. If absolutely necessary, major version bump
3. Extensive migration guide
4. Automated codemod tool

### Migration Path Documentation

For each potentially breaking change, provide:

```markdown
## Migration: [Change Description]

**What changed:** [specific change]
**Who's affected:** [user segment]
**When:** [version number]

### Before
\`\`\`tsx
// Old code
<Button className="retro">Click</Button>
\`\`\`

### After
\`\`\`tsx
// New code
import { Button } from "@/components/ui/cyber/button";
<Button className="cyber">Click</Button>
\`\`\`

### Codemod
\`\`\`bash
npx @8bitcn/codemod migrate-to-cyber
\`\`\`
```

## Registry Architecture

### Registry Structure

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "8bitcn",
  "homepage": "https://8bitcn.com",
  "items": [
    {
      "name": "cyber-button",
      "type": "registry:component",
      "title": "Cyber Button",
      "description": "Cyberpunk terminal-style button",
      "categories": ["cyberpunk", "terminal"],
      "registryDependencies": ["button"],
      "files": [
        {
          "path": "components/ui/cyber/button.tsx",
          "type": "registry:component",
          "target": "components/ui/cyber/button.tsx"
        },
        {
          "path": "components/ui/cyber/styles/cyber.css",
          "type": "registry:component",
          "target": "components/ui/cyber/styles/cyber.css"
        }
      ]
    }
  ]
}
```

### Dependency Resolution Order

1. **User runs:** `npx shadcn@latest add https://8bitcn.com/r/cyber-button.json`
2. **CLI fetches:** `cyber-button` registry entry
3. **CLI checks:** `registryDependencies: ["button"]`
4. **CLI resolves:**
   - If `ui/button.tsx` missing → fetch from shadcn registry
   - If present → skip
5. **CLI installs:**
   - `components/ui/cyber/button.tsx`
   - `components/ui/cyber/styles/cyber.css`
6. **User imports:**
   ```tsx
   import { Button } from "@/components/ui/cyber/button";
   ```

### Registry Categories

Organize components by category for discoverability:

| Category | Components | Purpose |
|----------|-----------|---------|
| `cyberpunk` | All cyber variants | Main category |
| `terminal` | CLI-style components | Specific aesthetic |
| `effects` | CRT, scanline components | Visual effects |
| `primitives` | Button, Input, Badge | Basic building blocks |
| `layout` | Card, Dialog, Sheet | Structural components |
| `data` | Table, Chart, List | Data display |

## Scalability Considerations

### At 10 Components (MVP)

**Approach:** Manual transformation, direct file creation

**Structure:**
```
ui/cyber/
├── button.tsx
├── input.tsx
├── card.tsx
├── badge.tsx
├── alert.tsx
└── styles/
    └── cyber.css (single file, ~200 lines)
```

**Tooling:** None needed. Hand-written components.

### At 45 Components (Full Library)

**Approach:** Template-driven generation, shared utilities

**Structure:**
```
ui/cyber/
├── primitives/
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
├── layout/
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
├── data/
│   ├── table.tsx
│   └── ...
├── lib/
│   ├── cyber-utils.ts (shared utilities)
│   └── variants.ts (shared CVA variants)
└── styles/
    ├── cyber.css (base)
    ├── effects.css (CRT, scanlines)
    └── animations.css (flicker, glow)
```

**Tooling:**
- Component generator CLI
- Style extraction tool
- Visual regression testing (Percy, Chromatic)

### At 100+ Components (Future Growth)

**Approach:** Automated generation, design tokens, visual testing

**Structure:**
```
ui/cyber/
├── [organized by domain]
├── tokens/
│   ├── colors.json (design tokens)
│   ├── typography.json
│   └── effects.json
├── lib/
│   ├── theme-generator.ts
│   └── variant-factory.ts
└── styles/
    ├── [generated from tokens]
```

**Tooling:**
- Design token pipeline (Style Dictionary)
- Automated visual regression
- Component playground (Storybook)
- Performance monitoring

## File Organization Best Practices

### Recommended Structure

```
components/ui/cyber/
├── README.md                    # Variant overview
├── index.ts                     # Re-exports all components
├── lib/                         # Shared utilities
│   ├── cyber-utils.ts          # Common helper functions
│   ├── variants.ts             # Shared CVA definitions
│   └── constants.ts            # Magic numbers, config
├── styles/                      # CSS files
│   ├── cyber.css               # Base cyber styling
│   ├── effects.css             # CRT, scanlines, glows
│   ├── animations.css          # Flicker, pulse, etc.
│   └── fonts.css               # Font-face declarations
├── primitives/                  # Tier 0-1 components
│   ├── button.tsx
│   ├── input.tsx
│   ├── badge.tsx
│   └── ...
├── layout/                      # Tier 2-3 components
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
└── data/                        # Tier 4-5 components
    ├── table.tsx
    └── ...
```

### Import Barrel Pattern

```typescript
// components/ui/cyber/index.ts
export { Button } from "./primitives/button";
export { Input } from "./primitives/input";
export { Card } from "./layout/card";
// ... etc

// User imports
import { Button, Input, Card } from "@/components/ui/cyber";
```

**Why:** Single import point, easier refactoring, cleaner code.

## Testing Strategy

### Per-Component Tests

```typescript
// __tests__/cyber/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/cyber/button";

describe("Cyber Button", () => {
  it("renders with terminal border", () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("terminal-border");
  });

  it("applies phosphor glow", () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("phosphor-glow");
  });

  it("uses monospace font", () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("cyber");
  });

  it("maintains accessibility", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

### Visual Regression Tests

Use Playwright or Chromatic for visual testing:

```typescript
// e2e/cyber/button.spec.ts
test("button visual snapshot", async ({ page }) => {
  await page.goto("/cyber/button");
  await expect(page.locator("button")).toHaveScreenshot("cyber-button.png");
});
```

### Integration Tests

Test component interactions:

```typescript
test("dialog with cyber button", async ({ page }) => {
  await page.click("button:has-text('Open Dialog')");
  await expect(page.locator("[role=dialog]")).toBeVisible();
  await expect(page.locator("[role=dialog]")).toHaveClass(/cyber/);
});
```

## Roadmap Implications

### Phase Structure Recommendation

Based on component dependencies and complexity:

1. **Phase 1: Foundation (Week 1)**
   - Theme system setup
   - CSS utilities creation
   - Font loading

2. **Phase 2: Primitives (Week 2)**
   - Tier 0-1 components (10 components)
   - Button, Input, Badge, Alert, Label

3. **Phase 3: Layout Components (Week 3)**
   - Tier 2-3 components (15 components)
   - Card, Dialog, Tabs, Accordion

4. **Phase 4: Complex Components (Week 4)**
   - Tier 4-5 components (10 components)
   - Command, Select, Table

5. **Phase 5: Polish (Week 5)**
   - Visual testing
   - Documentation
   - Registry setup

### Critical Path

```
Theme System → CSS Utilities → Fonts
    ↓
Button (reference implementation)
    ↓
Other Primitives (parallel)
    ↓
Layout Components (depends on primitives)
    ↓
Complex Components (depends on layout)
```

**Bottleneck:** Button component. All other work can reference its patterns.

### Parallelization Opportunities

After Button is complete, these can happen in parallel:
- Primitive components (different developers)
- CSS effects refinement
- Documentation writing
- Visual testing setup

## Sources

**HIGH Confidence Sources:**
- 8bitcn-ui codebase analysis (direct inspection)
- shadcn/ui registry schema (official documentation)
- Radix UI component patterns (existing usage)
- CVA (class-variance-authority) patterns (existing usage)

**Observations from codebase:**
1. Existing 8-bit variant already uses wrapper pattern (confirmed in `components/ui/8bit/button.tsx`)
2. Base components use CVA for variant management (confirmed in `components/ui/button.tsx`)
3. Tailwind CSS v4 inline theme system already in use (confirmed in `app/globals.css`)
4. Registry structure follows shadcn schema (confirmed in `registry.json`)
5. Protheus theme already exists as reference cyberpunk implementation (confirmed in `components/ui/protheus/`)

**Key insight:** The protheus variant components (`ui/protheus/`) already demonstrate the cyberpunk terminal aesthetic and can serve as a reference implementation. The architecture should formalize patterns already proven in protheus.
