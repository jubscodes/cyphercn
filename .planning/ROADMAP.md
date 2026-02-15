# Roadmap: CypherCN

## Overview

Transform 8bitcn-ui into CypherCN — a cyberpunk terminal command center UI library. This roadmap delivers a production-ready component library with thin-border terminal styling, CRT effects, monochrome themes, and cyberpunk-specific components, distributed via shadcn registry at cyphercn.com. Four phases progress from foundational visual effects through component transformation to unique differentiators and final distribution.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Visual Effects** - Theme system, typography, and reusable CSS effect utilities
- [x] **Phase 2: Component Transformation** - Transform all 40 base components to terminal aesthetic with accessibility
- [x] **Phase 2.1: Documentation Refactor** [INSERTED] - Update all component docs to display Protheus terminal aesthetic
- [x] **Phase 2.2: CypherCN Rebrand** [INSERTED] - Rename CyberCN to CypherCN across codebase, update registry to cyphercn.com
- [x] **Phase 2.3: Cyberpunk Stylesheet** [INSERTED] - Create cyberpunk.css with terminal typography, phosphor glow, CRT effects; apply to cypher components
- [x] **Phase 2.4: Aesthetic Compliance Review** [INSERTED] - Review cypher components for aesthetic compliance, replace pixelated elements with ASCII art
- [ ] **Phase 2.5: Branch Audit Fixes** [INSERTED] - Fix critical/high-priority issues from component audit: missing CSS imports, React 19 migration, registry corrections, props anti-patterns, terminal aesthetic gaps
- [ ] **Phase 3: Cyberpunk Differentiators** - Build unique terminal/HUD components that define CypherCN identity
- [ ] **Phase 3.2: Themes Page Showcase** [INSERTED] - Refactor /themes page to showcase CypherCN components organized by thematic sections
- [ ] **Phase 4: Distribution & Registry** - Update registry, verify installation, complete documentation
- [ ] **Phase 5: Image to ASCII Art & Dither Effects** - Add image-to-ASCII-art conversion and dither/halftone embedding for terminal-styled imagery
- [ ] **Phase 6: Protheus 30-60-10 Theme** - Create a 30-60-10 color ratio theme for the Protheus aesthetic

## Phase Details

### Phase 1: Foundation & Visual Effects
**Goal**: Establish the visual foundation that all components depend on — theme system, typography, and reusable CSS effect utilities.
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06, FOUND-07, FOUND-08, FOUND-09, FOUND-10
**Success Criteria** (what must be TRUE):
  1. Developer can switch between 6 monochrome themes (green, amber, cyan, red, white, orange) with instant visual update
  2. IBM Plex Mono displays consistently across all browsers with no FOUT (flash of unstyled text)
  3. Scanline and phosphor glow effects can be applied to any container via utility classes
  4. CRT screen container displays curvature and vignette effects without breaking layout
  5. Box-drawing borders (single, double, ASCII) render correctly in monospace context
  6. High-contrast accessibility mode meets WCAG AA contrast ratios
  7. All animations respect prefers-reduced-motion user preference
**Plans**: 3 plans in 2 waves

Plans:
- [x] 01-01-PLAN.md — Theme System & Typography (FOUND-01, FOUND-02, FOUND-03)
- [x] 01-02-PLAN.md — Visual Effects Library (FOUND-04, FOUND-05, FOUND-06, FOUND-08)
- [x] 01-03-PLAN.md — Box Borders & Accessibility (FOUND-07, FOUND-09, FOUND-10)

### Phase 2: Component Transformation
**Goal**: Refactor all 40 shadcn base components to terminal aesthetic with accessible focus states.
**Depends on**: Phase 1
**Requirements**: COMP-01 through COMP-40 (all 40 base components)
**Success Criteria** (what must be TRUE):
  1. All 40 components display thin 1px terminal borders instead of 8bit pixel blocks
  2. Components apply phosphor glow effects on hover/focus states using utilities from Phase 1
  3. Button, Input, and Dialog components work correctly in all 6 monochrome themes
  4. Focus indicators are WCAG AA compliant in both authentic terminal and high-contrast modes
  5. Table component displays data with monospace alignment and thin borders
  6. Command Palette component provides terminal-style command search with bracket styling
**Plans**: 7 plans in 2 waves

Plans:
- [x] 02-01-PLAN.md — Core Interactive Components (Button, Input, Textarea, Checkbox, Radio, Switch, Toggle, Label)
- [x] 02-02-PLAN.md — Containers & Layout (Card, Alert, Badge, Separator, Skeleton, Accordion, Collapsible)
- [x] 02-03-PLAN.md — Data Display (Table, Progress, Avatar, Tooltip, Hover Card)
- [x] 02-04-PLAN.md — Overlays & Modals (Dialog, Alert Dialog, Sheet, Drawer, Popover, Toast)
- [x] 02-05-PLAN.md — Navigation (Tabs, Breadcrumb, Pagination, Navigation Menu, Menubar, Dropdown Menu, Context Menu)
- [x] 02-06-PLAN.md — Form Controls (Select, Slider, Calendar, Input OTP)
- [x] 02-07-PLAN.md — Complex & Specialized (Command, Resizable, Carousel, Scroll Area)

### Phase 2.1: Documentation Refactor [INSERTED]
**Goal**: Update all documentation from 8bitcn to CypherCN branding with terminal-styled terminology.
**Depends on**: Phase 2
**Requirements**: DOC-01 through DOC-05
**Success Criteria** (what must be TRUE):
  1. All component MDX files updated with terminal-themed titles and descriptions
  2. ComponentPreview wrapper styled with Protheus terminal aesthetic (thin borders, optional scanlines)
  3. Code examples show correct import paths and usage patterns
  4. InstallationCommands reference correct registry namespace (@cybercn/)
  5. All preview components render with new terminal styling (verified visually)
**Plans**: 3 plans in 1 wave

Plans:
- [x] 02.1-01-PLAN.md — Shared infrastructure (InstallationCommands, ComponentPreview, index pages)
- [x] 02.1-02-PLAN.md — Component MDX batch update (57 files)
- [x] 02.1-03-PLAN.md — Block MDX batch update (33 files)

### Phase 2.2: CypherCN Rebrand [INSERTED]
**Goal**: Rename project from CyberCN to CypherCN and update registry domain to cyphercn.com.
**Depends on**: Phase 2.1
**Requirements**: BRAND-01, BRAND-02, BRAND-03
**Success Criteria** (what must be TRUE):
  1. All references to "CyberCN" replaced with "CypherCN" throughout codebase
  2. All references to "@cybercn/" replaced with "@cyphercn/" in registry namespace
  3. Registry domain updated from 8bitcn.com to cyphercn.com in all files
  4. Theme name "Protheus" renamed to "CypherCN" for brand consistency
  5. PROJECT.md, ROADMAP.md, STATE.md updated with new branding
  6. Build passes with no broken references
**Plans**: 3 plans in 2 waves

Plans:
- [x] 02.2-01-PLAN.md — Theme system & CSS foundation (Protheus → CypherCN rename)
- [x] 02.2-02-PLAN.md — MDX documentation batch update (90+ files)
- [x] 02.2-03-PLAN.md — Planning docs, registry config & verification

### Phase 2.3: Cyberpunk Stylesheet [INSERTED]
**Goal**: Create the cyberpunk CSS foundation — replace retro.css with cyberpunk.css containing terminal typography, phosphor glow effects, CRT scanlines, and monochrome utilities. Apply to all cypher components.
**Depends on**: Phase 2.2
**Requirements**: STYLE-01, STYLE-02, STYLE-03, STYLE-04
**Success Criteria** (what must be TRUE):
  1. New `cyberpunk.css` replaces `retro.css` with IBM Plex Mono typography (`.cyphercn`, `.cyphercn-normal`)
  2. Phosphor glow utilities (`.phosphor-glow`, `.phosphor-border-glow`) create authentic terminal glow effect
  3. CRT scanline overlay (`.crt-scanlines`, `.crt-scanlines-subtle`) works without blocking interactions
  4. All cypher components import and use the new stylesheet
  5. Protheus component patterns (Panel, Button glow, box-drawing chars) are available as utilities
  6. Build passes and components render with cyberpunk aesthetic
**Plans**: 2 plans in 2 waves

Plans:
- [x] 02.3-01-PLAN.md — Create cyberpunk.css stylesheet with typography, glow, scanlines, themes
- [x] 02.3-02-PLAN.md — Update 60+ component imports and verify visual rendering

### Phase 2.4: Aesthetic Compliance Review [INSERTED]
**Goal**: Review all existing cypher components for compliance to the MS-DOS terminal aesthetic, update styles/copy, and replace pixelated visual elements with ASCII art alternatives.
**Depends on**: Phase 2.3
**Requirements**: Derived from user request
**Success Criteria** (what must be TRUE):
  1. All cypher components reviewed for aesthetic compliance (terminal styling, copy, typography)
  2. Components use appropriate terminal-style copy (no "pixel" or "retro" terminology)
  3. Avatar pixel frame replaced with ASCII/box-drawing character alternative
  4. Any other pixelated decorative elements converted to ASCII art patterns
  5. Components consistently apply phosphor glow, thin borders, and terminal typography
  6. Build passes and visual audit confirms MS-DOS terminal aesthetic
**Plans**: 5 plans in 3 waves

Plans:
- [x] 02.4-01-PLAN.md — Avatar pixel frame replacement (variant="pixel" to variant="framed" with thin double border)
- [x] 02.4-02-PLAN.md — Core utilities update (icons, spinner, kbd: retro/pixel classes to cyphercn/glyph)
- [x] 02.4-03-PLAN.md — Game blocks batch (main-menu, game-over, save-slots, loading-screen: copy and class updates)
- [x] 02.4-04-PLAN.md — Player blocks batch (friend-list, character-sheet, player-profile-card, leaderboard, dialogue)
- [x] 02.4-05-PLAN.md — Final blocks, README update, build verification, and visual audit checkpoint
- [x] 02.4-06 — Replace 8bitcn pixel-block borders with terminal-style borders across 24 components

### Phase 2.5: Branch Audit Fixes [INSERTED]
**Goal**: Fix critical and high-priority issues identified during branch component audit — missing CSS imports, React 19 ref migration, registry.json corrections, props anti-patterns, terminal aesthetic gaps in charts/login blocks, and typos.
**Depends on**: Phase 2.4
**Requirements**: Derived from branch audit review
**Success Criteria** (what must be TRUE):
  1. All cypher components import cyberpunk.css (scroll-area, slider, switch fixed)
  2. forwardRef usage migrated to React 19 ref prop pattern (avatar, context-menu, carousel, slider, switch)
  3. Registry.json corrected: terminal-log added, combo-box removed, title/description typos fixed
  4. Props anti-pattern fixed in health-bar, mana-bar, enemy-health-display (flat props instead of nested)
  5. Slider component has terminal aesthetic styling applied
  6. Toast uses rounded-none instead of rounded-lg
  7. Console.log statements removed from carousel
  8. Charts and login forms either restyled for terminal aesthetic or removed from cypher registry
  9. All naming typos fixed (BitDropownMenu, BitSkeletonProp, displayname)
  10. Build passes with no regressions
**Plans**: 4 plans in 2 waves

Plans:
- [ ] 02.5-01-PLAN.md — Registry fixes, naming typos, console.log removal
- [ ] 02.5-02-PLAN.md — Missing CSS imports, React 19 ref migration, toast/scroll-area fixes
- [ ] 02.5-03-PLAN.md — Props anti-pattern fix, hardcoded color replacement
- [ ] 02.5-04-PLAN.md — Login form and chart terminal aesthetic restyle

### Phase 3: Cyberpunk Differentiators
**Goal**: Build the unique terminal/HUD components that differentiate CypherCN from standard UI libraries.
**Depends on**: Phase 2.4
**Requirements**: CYBER-01, CYBER-02, CYBER-03, CYBER-04, CYBER-05, CYBER-06, CYBER-07, CYBER-08, CYBER-09
**Success Criteria** (what must be TRUE):
  1. Terminal Console component displays scrolling log output with timestamps and level-based styling
  2. Command Input component provides interactive prompt with cursor animation and command history navigation
  3. Dithered Image component applies Bayer/halftone/noise patterns to images without blocking main thread
  4. Status Indicator component shows online/offline/processing states with appropriate glow effects
  5. System Monitor and Network Monitor components display real-time gauge visualizations in terminal style
  6. ASCII Spinner provides loading animation that respects prefers-reduced-motion
**Plans**: 3 plans in 1 wave

Plans:
- [ ] 03-01-PLAN.md — CommandInput with history navigation (CYBER-02)
- [ ] 03-02-PLAN.md — DitheredImage with web worker dithering (CYBER-05)
- [ ] 03-03-PLAN.md — Gauge, SystemMonitor, NetworkMonitor components (CYBER-06, CYBER-07)

**Note:** CYBER-01 (TerminalLog), CYBER-03 (LogEntry), CYBER-04 (Status), CYBER-08 (Spinner/LoadingDots), and CYBER-09 (Panel/Card variants) already exist in the codebase.

### Phase 3.2: Themes Page Showcase [INSERTED]
**Goal**: Refactor the /themes page to properly showcase CypherCN components organized by thematic sections, demonstrating the library's full potential.
**Depends on**: Phase 2.4
**Requirements**: Derived from user request
**Success Criteria** (what must be TRUE):
  1. /themes page displays components organized by thematic sections:
     - Command Center (Terminal Console, Command Input, System Monitor, Status Indicators)
     - Cyber Games (Game blocks: main-menu, game-over, save-slots, leaderboard, character-sheet)
     - Base Components (Button, Card, Dialog, Form controls, etc.)
     - Dashboard (Charts, Tables, Progress, Gauges)
  2. Each section showcases components with proper terminal styling and phosphor glow effects
  3. Theme switcher affects all component sections seamlessly
  4. Page serves as a visual portfolio for the CypherCN aesthetic
  5. Responsive layout works on mobile and desktop
**Plans**: 2 plans in 2 waves

Plans:
- [ ] 03.2-01-PLAN.md — Refactor page structure, implement Command Center and Cyber Games sections
- [ ] 03.2-02-PLAN.md — Implement Base Components and Dashboard sections, visual verification

### Phase 4: Distribution & Registry
**Goal**: Make CypherCN components installable via shadcn CLI and document installation/usage.
**Depends on**: Phase 3
**Requirements**: DIST-01, DIST-02, DIST-03
**Success Criteria** (what must be TRUE):
  1. Registry JSON includes all CypherCN components with correct dependencies and metadata
  2. Developer can install any component via `npx shadcn@latest add <component>` from CypherCN registry
  3. Component installation instructions are documented and verified on clean Next.js project
  4. Registry API endpoint (`/r/[component].json`) returns valid component packages
**Plans**: TBD

Plans:
- [ ] 04-01: TBD

### Phase 5: Image to ASCII Art & Dither Effects
**Goal**: Add components for converting images to ASCII art and embedding dither/halftone effects, enabling terminal-styled imagery throughout CypherCN.
**Depends on**: Phase 4
**Plans**: 0 plans

Plans:
- [ ] TBD (run /gsd:plan-phase 5 to break down)

**Details:**
[To be added during planning]

### Phase 6: Protheus 30-60-10 Theme
**Goal**: Create a 30-60-10 color ratio theme for the Protheus aesthetic — 60% dominant background, 30% secondary/surface, 10% accent — delivering a polished, balanced color system.
**Depends on**: Phase 5
**Plans**: 0 plans

Plans:
- [ ] TBD (run /gsd:plan-phase 6 to break down)

**Details:**
[To be added during planning]

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 2.1 → 2.2 → 2.3 → 2.4 → 2.5 → 3 → 3.2 → 4 → 5 → 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Visual Effects | 3/3 | Complete | 2026-02-01 |
| 2. Component Transformation | 7/7 | Complete | 2026-02-01 |
| 2.1. Documentation Refactor | 3/3 | Complete | 2026-02-01 |
| 2.2. CypherCN Rebrand | 3/3 | Complete | 2026-02-01 |
| 2.3. Cyberpunk Stylesheet | 2/2 | Complete | 2026-02-06 |
| 2.4. Aesthetic Compliance Review | 6/6 | Complete | 2026-02-06 |
| 2.5. Branch Audit Fixes | 0/4 | Not started | - |
| 3. Cyberpunk Differentiators | 0/3 | Planned | - |
| 3.2. Themes Page Showcase | 0/2 | Planned | - |
| 4. Distribution & Registry | 0/TBD | Not started | - |
| 5. Image to ASCII Art & Dither Effects | 0/TBD | Not started | - |
| 6. Protheus 30-60-10 Theme | 0/TBD | Not started | - |
