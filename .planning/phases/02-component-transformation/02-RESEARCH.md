# Phase 2: Component Transformation - Research

**Researched:** 2026-02-01
**Domain:** React Component Styling, shadcn/ui Extension, Terminal Aesthetic, WCAG Accessibility
**Confidence:** HIGH

## Summary

This research analyzes how to transform 40 existing shadcn-based 8bit components from their current "pixel block" aesthetic to the new "Protheus" terminal aesthetic with thin 1px borders, phosphor glow effects, and WCAG-compliant focus states.

The codebase already has:
1. **Complete foundation** in Phase 1: Protheus theme (6 color variants), phosphor glow utilities, DOS border utilities, focus utilities, CRT effects
2. **Existing 8bit components** (40+ files in `components/ui/8bit/`) using thick 6px pixel borders and "Press Start 2P" font
3. **POC Protheus components** (8 files in `components/ui/protheus/`) demonstrating the target aesthetic with thin borders, IBM Plex Mono, and terminal styling

**Primary recommendation:** Transform each 8bit component by replacing pixel-border patterns (6px borders, absolute-positioned corner blocks) with terminal-border patterns (1px currentColor borders, phosphor-glow classes) while preserving Radix UI accessibility primitives and adding enhanced WCAG-compliant focus states.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| class-variance-authority | ^0.7.x | Component variant management | Used throughout shadcn/ui, enables type-safe variants |
| @radix-ui/* | ^1.x | Accessible primitives | Handles keyboard nav, focus management, ARIA |
| tailwind-merge | ^2.x | Class conflict resolution | Resolves Tailwind class conflicts cleanly |
| clsx | ^2.x | Conditional class composition | Standard for className concatenation |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @radix-ui/react-slot | ^1.x | Slot composition | For asChild prop pattern |
| cmdk | ^1.x | Command palette primitive | For Command component specifically |

### Already in Codebase
- All dependencies are already installed
- Protheus CSS utilities already exist in `components/ui/8bit/styles/protheus.css`
- Theme definitions already in `app/globals.css` (`.theme-protheus` with 6 variants)

**No new dependencies needed for this phase.**

## Architecture Patterns

### Existing 8bit Component Structure (TO REPLACE)
```
components/ui/8bit/
├── button.tsx         # 151 lines - thick pixel borders via absolute divs
├── card.tsx           # 137 lines - 6px borders
├── input.tsx          # 55 lines - thick borders
├── dialog.tsx         # 95 lines - thick borders on modal
├── command.tsx        # 235 lines - complex, thick borders
├── menubar.tsx        # 378 lines - most complex, multi-part
├── styles/
│   ├── retro.css      # Press Start 2P font
│   └── protheus.css   # Terminal CSS utilities (already complete)
└── ... (40 total components)
```

### Target Protheus Component Structure (REFERENCE)
```
components/ui/protheus/
├── button.tsx         # 67 lines - thin borders, glow variants
├── card.tsx           # 103 lines - simple border, optional title
├── input.tsx          # 86 lines - prompt style, cursor
├── alert.tsx          # 141 lines - level prefixes [INFO], [WARN]
├── badge.tsx          # 72 lines - bracket/tag variants
├── progress.tsx       # 150 lines - ASCII progress bars
├── separator.tsx      # 120 lines - box-drawing characters
└── panel.tsx          # 186 lines - DOS window with header
```

### Transformation Pattern

**Pattern 1: Replace Pixel Borders with Terminal Borders**

BEFORE (8bit style):
```tsx
// Pixel border using absolute positioned blocks
<div className="relative border-y-6 border-foreground dark:border-ring">
  <Component className="rounded-none" />
  <div className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none" />
</div>
```

AFTER (Protheus style):
```tsx
// Thin terminal border with optional glow
<Component
  className={cn(
    "border border-foreground",  // 1px border using currentColor
    glow && "phosphor-border-glow",
    className
  )}
/>
```

**Pattern 2: Replace Font Class**

BEFORE:
```tsx
className={cn(font !== "normal" && "retro", className)}
// retro = Press Start 2P
```

AFTER:
```tsx
className={cn("protheus", className)}
// protheus = IBM Plex Mono, uppercase, letter-spacing
// protheus-normal = IBM Plex Mono, normal case
```

**Pattern 3: Add Glow Prop Pattern**
```tsx
export interface ProtheusComponentProps extends BaseProps {
  glow?: boolean;  // Add glow prop to all interactive components
}

function Component({ glow = false, className, ...props }) {
  return (
    <BaseComponent
      className={cn(
        "protheus border border-foreground",
        glow && "phosphor-glow",  // or phosphor-border-glow for boxes
        className
      )}
      {...props}
    />
  );
}
```

**Pattern 4: Enhanced Focus States**
```tsx
// All interactive elements need focus-visible styling
className={cn(
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
  // OR use pre-built utility:
  "focus-glow",  // Terminal-style glow focus
)}
```

### Anti-Patterns to Avoid

- **Don't wrap with extra divs for borders** - Use CSS borders directly on components
- **Don't use absolute positioning for borders** - Thin 1px borders don't need corner blocks
- **Don't remove Radix primitives** - Keep all accessibility features intact
- **Don't hardcode colors** - Use CSS custom properties and currentColor
- **Don't forget focus states** - Every interactive element needs visible focus

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Keyboard navigation | Custom key handlers | Radix primitives | Complex edge cases across browsers |
| Focus management | Manual focus code | Radix Dialog/Popover | Focus trap, restoration handled |
| ARIA attributes | Manual aria-* | Radix primitives | Tested against WCAG guidelines |
| Class conflicts | String concatenation | tailwind-merge | Proper Tailwind class resolution |
| Variant types | Manual union types | cva VariantProps | Automatic type inference |
| Glow effects | Custom box-shadow | .phosphor-glow classes | Already optimized in protheus.css |
| DOS borders | Custom border code | .border-dos classes | Already defined in protheus.css |

**Key insight:** The Radix primitives in existing 8bit components handle all accessibility. The transformation only touches styling classes, not functionality.

## Common Pitfalls

### Pitfall 1: Breaking Accessibility When Restyling
**What goes wrong:** Removing or modifying Radix wrapper components breaks keyboard/screen reader support
**Why it happens:** Focus on visual changes without understanding component structure
**How to avoid:** Only modify className props and wrapper divs, never remove Radix primitives
**Warning signs:** Components don't respond to keyboard navigation after changes

### Pitfall 2: Focus States Not Visible in All Themes
**What goes wrong:** Focus indicators invisible in some of the 6 color variants
**Why it happens:** Using hardcoded colors instead of currentColor
**How to avoid:** All focus styles must use `currentColor` or CSS custom properties
**Warning signs:** Focus ring disappears on certain theme variants

### Pitfall 3: Contrast Ratio Failures in High-Contrast Mode
**What goes wrong:** WCAG AA compliance fails in high-contrast mode
**Why it happens:** Not testing with `.theme-protheus.high-contrast` class
**How to avoid:** Test every component in both normal and high-contrast mode
**Warning signs:** Low contrast warnings in accessibility tools

### Pitfall 4: Glow Effects Blocking Interactions
**What goes wrong:** Pointer events don't reach interactive elements
**Why it happens:** Pseudo-elements for glow effects covering content
**How to avoid:** All decorative overlays must have `pointer-events: none`
**Warning signs:** Click/tap not registering on elements with glow

### Pitfall 5: Animation Without Reduced Motion Check
**What goes wrong:** Animations play even when user prefers reduced motion
**Why it happens:** Forgetting the media query wrapper
**How to avoid:** All animations wrapped in `@media (prefers-reduced-motion: no-preference)`
**Warning signs:** Terminal cursor blinking even when reduced motion enabled

### Pitfall 6: Inconsistent Border Colors Across Components
**What goes wrong:** Some components have different border opacity/color
**Why it happens:** Mixing direct color values with currentColor
**How to avoid:** All borders use `border-foreground` or `border-current`
**Warning signs:** Visual inconsistency when switching themes

## Code Examples

Verified patterns from existing Protheus POC components:

### Button Transformation
```tsx
// Source: components/ui/protheus/button.tsx
export const buttonVariants = cva(
  "protheus inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-primary hover:bg-primary/90 phosphor-border-glow",
        outline: "border border-foreground bg-transparent text-foreground hover:bg-foreground/10",
        ghost: "bg-transparent text-foreground hover:bg-foreground/10",
        terminal: "bg-transparent text-foreground border-0 hover:text-primary before:content-['['] after:content-[']'] before:mr-1 after:ml-1",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 py-1.5 text-xs",
        lg: "h-11 px-6 py-3 text-base",
        icon: "size-9 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### Input with Terminal Prompt
```tsx
// Source: components/ui/protheus/input.tsx
const Input = React.forwardRef<HTMLInputElement, ProtheusInputProps>(
  ({ className, type, prompt = ">", glow = false, ...props }, ref) => {
    return (
      <div className={cn("protheus flex items-center gap-2", glow && "phosphor-glow")}>
        <span className="text-foreground/70 select-none">{prompt}</span>
        <input
          type={type}
          className={cn(
            "flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground outline-none",
            "protheus-normal text-sm",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <span className="terminal-cursor text-foreground/70" />
      </div>
    );
  }
);
```

### Alert with Level Prefixes
```tsx
// Source: components/ui/protheus/alert.tsx
const variantPrefixes = {
  default: "[INFO]",
  warning: "[WARN]",
  error: "[ERROR]",
  success: "[OK]",
};

function Alert({ variant = "default", title, glow = false, className, children }) {
  return (
    <div
      role="alert"
      className={cn(
        "protheus border border-foreground p-3 text-sm",
        variantStyles[variant],
        glow && "phosphor-border-glow",
        className
      )}
    >
      <div className="flex items-start gap-2">
        <span className="font-bold shrink-0">{variantPrefixes[variant]}</span>
        <div className="flex-1 protheus-normal">
          {title && <div className="font-semibold mb-1">{title}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}
```

### Badge with Bracket Variants
```tsx
// Source: components/ui/protheus/badge.tsx
export const badgeVariants = cva(
  "protheus inline-flex items-center text-xs uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "border border-foreground px-2 py-0.5",
        bracket: "before:content-['['] after:content-[']'] px-1",
        tag: "before:content-['<'] after:content-['>'] px-0.5 text-foreground/70",
        dot: "gap-1.5",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
```

### WCAG-Compliant Focus States
```css
/* Source: components/ui/8bit/styles/protheus.css */
.protheus *:focus-visible {
  outline: 2px solid var(--ring, currentColor);
  outline-offset: 2px;
}

.focus-glow:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--background),
    0 0 0 4px var(--primary),
    0 0 8px var(--phosphor-glow, var(--primary));
}

.focus-ring-thick:focus-visible {
  outline: 3px solid var(--ring, currentColor);
  outline-offset: 3px;
}
```

## Component Batching Strategy

Based on complexity analysis (lines of code) and dependencies:

### Batch 1: Core Interactive (8 components) - Foundation
Priority components used by other components:
- **Button** (151 LOC) - Used everywhere
- **Input** (55 LOC) - Form foundation
- **Textarea** - Related to Input
- **Checkbox** (56 LOC) - Form control
- **Radio** - Form control
- **Switch** - Form control
- **Toggle** - Interactive control
- **Label** - Form labels

### Batch 2: Containers & Layout (7 components)
Structural components:
- **Card** (137 LOC) - Common container
- **Alert** - Notification container
- **Badge** - Inline element
- **Separator** - Layout divider
- **Skeleton** - Loading state
- **Accordion** (94 LOC) - Expandable content
- **Collapsible** - Simple expand

### Batch 3: Data Display (5 components)
Data-focused components:
- **Table** (120 LOC) - Data display
- **Progress** - Status indicator
- **Avatar** (171 LOC) - User representation
- **Tooltip** - Information hover
- **Hover Card** - Rich hover content

### Batch 4: Overlays & Modals (7 components)
Complex overlay components:
- **Dialog** (95 LOC) - Modal window
- **Alert Dialog** (215 LOC) - Confirmation modal
- **Sheet** (280 LOC) - Side panel
- **Drawer** (159 LOC) - Slide-in panel
- **Popover** - Floating content
- **Toast** - Notifications
- **Toaster** - Toast container

### Batch 5: Navigation (7 components)
Navigation-focused components:
- **Tabs** (97 LOC) - Tab navigation
- **Breadcrumb** (192 LOC) - Path navigation
- **Pagination** (289 LOC) - Page navigation
- **Navigation Menu** (191 LOC) - Site nav
- **Menubar** (378 LOC) - App menu
- **Dropdown Menu** (161 LOC) - Context dropdown
- **Context Menu** (285 LOC) - Right-click menu

### Batch 6: Form Controls (4 components)
Advanced form components:
- **Select** (182 LOC) - Dropdown select
- **Slider** - Range input
- **Calendar** (219 LOC) - Date picker
- **Input OTP** - One-time password

### Batch 7: Complex & Specialized (2 components)
Most complex components:
- **Command** (235 LOC) - Command palette
- **Resizable** - Resizable panels
- **Carousel** (316 LOC) - Image slider
- **Scroll Area** - Custom scrollbars

## State of the Art

| Old Approach (8bit) | Current Approach (Protheus) | Impact |
|---------------------|----------------------------|--------|
| 6px pixel borders via divs | 1px CSS borders | Simpler, fewer DOM elements |
| Press Start 2P font | IBM Plex Mono | Better readability |
| Dark mode via dark: prefix | Dark mode as default | Matches terminal aesthetic |
| Hardcoded border colors | currentColor | Automatic theme awareness |
| No glow effects | phosphor-glow utilities | Enhanced visual feedback |
| Basic outline focus | Glow-based focus | Terminal-appropriate UX |

**Key changes from 8bit pattern:**
- Remove all absolute-positioned border corner blocks
- Remove wrapper divs needed for pixel border effect
- Replace `retro` class with `protheus` or `protheus-normal`
- Add `glow` prop to interactive components
- Use `.border-dos` utilities instead of custom border styles

## Open Questions

Things that couldn't be fully resolved:

1. **Chart Component Styling**
   - What we know: Chart uses Recharts library with specific styling
   - What's unclear: How to apply terminal aesthetic to chart elements
   - Recommendation: May need custom Recharts theme, defer to implementation

2. **Carousel Terminal Aesthetic**
   - What we know: Uses Embla Carousel
   - What's unclear: Best approach for prev/next indicators in terminal style
   - Recommendation: Consider ASCII arrows `<` `>` or bracket indicators

3. **Calendar Component Complexity**
   - What we know: 219 LOC, uses react-day-picker
   - What's unclear: How to style date cells in terminal way
   - Recommendation: May need custom day render function

## Sources

### Primary (HIGH confidence)
- Codebase analysis: `components/ui/8bit/` (40+ components)
- Codebase analysis: `components/ui/protheus/` (8 POC components)
- Codebase analysis: `components/ui/8bit/styles/protheus.css` (699 lines)
- Codebase analysis: `app/globals.css` (.theme-protheus definition)

### Secondary (MEDIUM confidence)
- [WCAG 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- [Sara Soueidan Focus Indicators Guide](https://www.sarasoueidan.com/blog/focus-indicators/)
- [CVA Documentation](https://cva.style/docs/getting-started/variants)

### Tertiary (LOW confidence)
- Web search for WCAG 2.2 updates - verified against official W3C docs
- Web search for shadcn patterns - verified against codebase patterns

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All libraries already in use, patterns verified in codebase
- Architecture: HIGH - Clear transformation pattern from 8bit to Protheus POC
- Batching strategy: MEDIUM - Based on LOC analysis, may need adjustment
- Accessibility: HIGH - WCAG requirements well-documented, Radix handles complexity

**Research date:** 2026-02-01
**Valid until:** 2026-03-01 (30 days - stable domain, patterns unlikely to change)
