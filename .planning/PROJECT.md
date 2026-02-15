# CypherCN

## What This Is

CypherCN is a cyberpunk/MS-DOS terminal UI component library, forked from 8bitcn-ui and systematically refactored to achieve a hacker command center aesthetic. It replaces 8bitcn's playful pixel borders with thin terminal lines, CRT glow effects, scanlines, and dithered imagery. Distributed via shadcn registry for developers building modern platforms with retro-cyber feel.

## Core Value

Every component must feel like it belongs on a 1980s command center terminal — monochrome, glowing, functional, intimidating. The aesthetic is the product.

## Requirements

### Validated

<!-- Inherited from 8bitcn-ui codebase -->

- ✓ Next.js 16 documentation site with App Router — existing
- ✓ shadcn registry distribution (`/r/[component].json`) — existing
- ✓ 45+ base UI components (button, card, input, table, etc.) — existing
- ✓ Theme system with CSS custom properties — existing
- ✓ MDX documentation with fumadocs — existing
- ✓ Component preview system — existing
- ✓ Tailwind CSS 4 styling infrastructure — existing

### Active

<!-- CypherCN transformation scope -->

- [ ] Refactor all 8bit components to CypherCN thin-border aesthetic
- [ ] Replace pixel fonts with IBM Plex Mono / terminal fonts
- [ ] Implement CRT glow effects (phosphor bloom, scanlines)
- [ ] Create 6 monochrome color themes (green, amber, cyan, red, white, orange)
- [ ] Add dithering pattern utilities (Bayer, halftone, noise)
- [ ] Add DOS-style box-drawing borders (single, double, ASCII)
- [ ] Create radar/HUD display components
- [ ] Create terminal console components (log viewer, command prompt)
- [ ] Create dithered image treatment component
- [ ] Update documentation site branding to CypherCN
- [ ] Update registry to serve CypherCN components

### Out of Scope

- 8bitcn playful pixel aesthetic — this is a different product, not a theme
- Animation-heavy components — terminal UIs are functional, not flashy
- Light mode as primary — dark terminal is the default experience
- Mobile-first design — command centers are desktop experiences (responsive, but desktop-primary)

## Context

**Origin:** Fork of hoffms/8bitcn-ui, a retro 8-bit styled component library.

**Inspiration:** MS-DOS command centers, phosphor green terminals, dithering algorithms (Floyd-Steinberg, Atkinson, Bayer), cyberpunk interfaces, military radar displays. Reference images in `/Users/jubs/Downloads/protheus inspo/`.

**Existing work:** Protheus components already created in `components/ui/protheus/` as proof of concept — button, card, input, progress, alert, badge, separator, panel with thin borders and CRT effects.

**Target users:**
- Developers building SaaS dashboards and admin panels
- Crypto/Web3 projects wanting cyberpunk aesthetics
- Creative studios and portfolio sites
- Anyone wanting modern UX with retro-terminal feel

## Constraints

- **Tech stack**: Must remain compatible with shadcn/ui distribution model (copy-paste components)
- **Base**: Build on existing 8bitcn component structure, not from scratch
- **Accessibility**: Maintain WCAG compliance despite aesthetic choices (contrast ratios, focus states)
- **Performance**: CSS-only effects where possible, no heavy JS for visual effects

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Fork 8bitcn instead of new library | Leverage existing component coverage and registry infrastructure | — Pending |
| Thin 1px borders instead of pixel blocks | Matches terminal aesthetic, cleaner than bulky 8-bit borders | — Pending |
| IBM Plex Mono as primary font | Modern monospace with good readability, fits terminal feel | — Pending |
| Monochrome themes only | Core to the aesthetic — color is accent, not variety | — Pending |
| Dark mode as default | Terminals are dark. Light mode secondary. | — Pending |
| Preserve shadcn library choices | sonner for toast, vaul for drawer, cmdk for command — don't switch to Radix equivalents | ✓ Enforced |

## Component Transformation Rules

**CRITICAL: Read before modifying any component.**

### 1. Preserve Library Choices

shadcn uses specific libraries for certain components. **Never replace these with Radix equivalents:**

| Component | Library | NOT |
|-----------|---------|-----|
| Toast | `sonner` | ~~@radix-ui/react-toast~~ |
| Drawer | `vaul` | ~~@radix-ui/react-dialog~~ |
| Command | `cmdk` | ~~custom implementation~~ |
| Carousel | `embla-carousel-react` | — |
| Calendar | `react-day-picker` | — |
| Resizable | `react-resizable-panels` | — |
| Input OTP | `input-otp` | — |

**Before transforming:** Read the original component's imports. Preserve the library, only change styling.

### 2. Documentation Patterns

When Trigger components wrap Button components, **always use `asChild`:**

```tsx
// ✓ Correct
<DialogTrigger asChild>
  <Button>Open</Button>
</DialogTrigger>

// ✗ Wrong — creates nested <button><button>
<DialogTrigger>
  <Button>Open</Button>
</DialogTrigger>
```

Applies to: `DialogTrigger`, `AlertDialogTrigger`, `PopoverTrigger`, `TooltipTrigger`, `HoverCardTrigger`, `ContextMenuTrigger`, `SheetTrigger`, `DropdownMenuTrigger`

**Exception:** Plain text triggers don't need `asChild`:
```tsx
// ✓ OK — text, not Button
<DialogTrigger>Open</DialogTrigger>
```

### 3. Transformation Checklist

Before submitting a component transformation:

- [ ] Read original implementation first
- [ ] Preserve existing library (sonner, vaul, cmdk, etc.)
- [ ] Only change: CSS classes, styling, visual props
- [ ] Verify imports match package.json dependencies
- [ ] Update docs examples to use `asChild` where needed

---
*Last updated: 2026-01-31 after initialization*
