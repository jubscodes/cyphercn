# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-01-31)

**Core value:** Every component must feel like it belongs on a 1980s command center terminal — monochrome, glowing, functional, intimidating.
**Current focus:** Phase 02.5 - Branch Audit Fixes (COMPLETE)

## Current Position

Phase: 02.5 of 4 (Branch Audit Fixes) — COMPLETE
Plan: 4 of 4 in current phase
Status: All 4 plans complete
Last activity: 2026-02-15 — Completed 02.5-04-PLAN.md: login forms + charts terminal restyle

Progress: [███████████] 100% (27 of 27 plans complete)

## Performance Metrics

**Velocity:**
- Total plans completed: 27
- Average duration: 2.8 min
- Total execution time: 1.5 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 01-foundation | 3 | 8m | 2.7m |
| 02-component-transformation | 7 | 19m | 2.7m |
| 02.1-documentation-refactor | 3 | 12m | 4m |
| 02.2-cyphercn-rebrand | 3 | 17m | 5.7m |
| 02.3-cyberpunk-stylesheet | 1 | 12m | 12m |
| 02.4-aesthetic-compliance-review | 4 | 7.8m | 1.95m |
| 02.5-branch-audit-fixes | 4 | 11m | 2.75m |
| 03.2-themes-page-showcase | 1 | 4.7m | 4.7m |

**Recent Trend:**
- Last 5 plans: 02.5-01 2.0m, 02.5-02 3.0m, 02.5-03 3.0m, 02.5-04 3.0m
- Trend: Fast execution on cleanup and refactor patterns

*Updated after each plan completion*

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- Thin 1px borders instead of pixel blocks — matches terminal aesthetic
- IBM Plex Mono as primary font — modern monospace with good readability
- Monochrome themes only — core to the aesthetic
- Dark mode as default — terminals are dark
- next/font/google for IBM Plex Mono eliminates FOUT via preloading
- oklch() color space for perceptually uniform brightness across variants
- 6 monochrome variants: green, amber, cyan, red, white, orange
- Phosphor glow uses CSS custom properties with currentColor fallback
- All CRT overlays use pointer-events: none to prevent blocking interactions
- z-index ordering: content < scanlines (10) < vignette (20) < reflection (21)
- All animations wrapped in @media (prefers-reduced-motion: no-preference)
- All borders use currentColor for automatic theme awareness
- Double borders use CSS 3px double for authentic DOS look
- Panel titles use data-title attribute for content injection
- High-contrast mode uses pure black/white for 21:1 ratio
- Decorative CRT effects disabled in forced-colors mode
- Focus uses :focus-visible for keyboard-only indication
- Use Radix primitives directly instead of ShadcnUI wrappers
- Consistent glow?: boolean prop across all interactive components
- Button "terminal" variant uses bracket notation [text]
- Badge bracket variant uses CSS ::before/::after for [text] display
- Alert shows [INFO], [WARN], [ERROR], [OK] prefixes based on variant
- Accordion uses [+]/[-] text indicators instead of chevron icons
- ASCII progress default variant uses # and - characters
- Table cells use tabular-nums + font-mono for numeric alignment
- HoverCard uses dos-panel class with optional title prop
- Tabs use thin 2px border-b indicator for active state
- Breadcrumb separator defaults to > character (terminal path style)
- Pagination uses < PREV and NEXT > with thin borders
- All menu items use bg-foreground/10 hover instead of border-dashed
- Menu labels use cyphercn (uppercase), items use cyphercn-normal
- Command uses > prompt prefix for terminal authenticity
- Shortcuts wrapped in brackets [Ctrl+K] for DOS-style
- Carousel uses < > characters instead of SVG arrows
- Resizable handle uses || grip character
- **RULE: Preserve shadcn library choices** — sonner for toast, vaul for drawer, cmdk for command (see PROJECT.md)
- **RULE: Use asChild on Triggers wrapping Buttons** — prevents nested button hydration errors
- **RULE: Read original implementation before transforming** — preserve libraries, only change styling
- @cyphercn/ namespace for all component installs (not @8bitcn/ or @cybercn/)
- Terminal terminology in docs (not 8-bit/pixel/retro)
- Registry uses cyphercn.com domain for component distribution
- RSS feed description updated to terminal-styled description
- Block description pattern: "A terminal-styled [functionality description]."
- Block ComponentPreview title pattern: "CypherCN [Block Name]"
- Theme.CypherCN is the default theme (renamed from Protheus)
- CSS classes: .cyphercn (uppercase) and .cyphercn-normal (normal case)
- Interface naming: CyphercnInputProps, CyphercnButtonProps, etc.
- Utility components use cyphercn class (icons, kbd)
- Spinner animations use glyph-* classes (not pixel-*)
- Avatar framed variant uses CSS double border (not div-based pixel frames)
- Terminal frames use CSS borders, not absolute-positioned divs
- ASCII art replaces image assets for terminal authenticity
- cyphercn for uppercase terminal text, cyphercn-normal for standard case
- Block components avoid 8-bit/retro/pixel terminology in favor of terminal language
- Documentation pattern: CypherCN branding, terminal terminology (not retro/8-bit/pixel)
- CSS class pattern: cyphercn for uppercase, cyphercn-normal for standard case
- Comment pattern: Use 'terminal' terminology in code comments
- Section component pattern: Title (cyphercn uppercase), description (terminal language), responsive grid
- Card wrapping: Individual components wrapped in Card for consistent showcase presentation
- Responsive grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 for section layouts
- [Phase 02.5-03]: Remove nested props?: CypherProgressProps anti-pattern from bar components, use flat progressBg prop
- [Phase 02.5-03]: Replace hardcoded hex colors with Tailwind classes (bg-red-500, shadow-red-500/50) for theme compatibility
- [Phase 02.5-04]: Login forms use terminal copy, no OAuth buttons, bracket-notation buttons
- [Phase 02.5-04]: Charts use monochrome hsl(var(--foreground)) colors for theme awareness

### Roadmap Evolution

- Phase 5 added: Image to ASCII Art & Dither Effects
- Phase 6 added: Protheus 30-60-10 Theme

### Pending Todos

None.

### Blockers/Concerns

Build errors resolved in 02.1-02 bug fix commit (a0adaa1):
- Avatar, Progress, Badge, Button variant type mismatches fixed
- All components now use correct variant types

## Session Continuity

Last session: 2026-02-15
Stopped at: Completed Phase 02.5 (Branch Audit Fixes) — all 4 plans complete
Resume file: None
Next: Continue with remaining phases (03, 03.2 already done, proceed to next unfinished phase)
