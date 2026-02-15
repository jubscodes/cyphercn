# Feature Landscape

**Domain:** Cyberpunk Terminal UI Component Library
**Researched:** 2026-01-31
**Confidence:** MEDIUM (based on existing code inspection, cyberpunk UI patterns from training, and terminal aesthetic conventions)

## Table Stakes

Features users expect from a cyberpunk/terminal UI library. Missing these = product feels incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Thin 1px borders** | Core terminal aesthetic, replaces 8bit's chunky pixel borders | Low | Already in protheus.css - expand to all components |
| **Monospace typography** | Terminals use monospace fonts, non-negotiable for authenticity | Low | IBM Plex Mono already imported in protheus.css |
| **CRT scanline overlay** | Instant "terminal screen" recognition, table stakes for retro-cyber | Low | `.crt-scanlines` and `.crt-scanlines-subtle` exist |
| **Phosphor glow effects** | CRT monitors had phosphor bloom - text/borders glow | Medium | Text glow, border glow, and intense variants exist |
| **Monochrome color themes** | Classic terminals were single-color (green, amber, cyan) | Medium | Protheus has green - need amber, cyan, red, white, orange |
| **Terminal prompt patterns** | `>` prefix, command-line brackets `[option]` | Low | `.terminal-prompt` class exists, need more variants |
| **ASCII box-drawing borders** | DOS-style single/double line borders for panels | Low | `.dos-border` and `.dos-border-double` exist |
| **Status indicators** | Online/offline/alert states with blink/pulse | Low | `.status-online`, `.status-offline`, `.status-alert` exist |
| **Terminal console output** | Log viewer showing scrolling command output | Medium | Not in protheus yet - needs new component |
| **Uppercase text defaults** | Terminals often displayed uppercase, gives command feel | Low | `.protheus` class has `text-transform: uppercase` |
| **Blinking cursor** | Terminal cursor animation for inputs | Low | `.terminal-cursor` with blink animation exists |
| **ASCII progress bars** | `[=======> ]` style progress indicators | Medium | `.ascii-progress` skeleton exists, needs full component |
| **Grid/wireframe backgrounds** | Radar/HUD grid overlays for sections | Low | `.grid-wireframe` and `.grid-wireframe-fine` exist |
| **Dithered imagery** | Bayer/halftone/crosshatch patterns for image treatment | Medium | 7 dither patterns in CSS, need component wrapper |
| **Keyboard shortcuts display** | `<Kbd>` component showing terminal-style key combos | Low | Exists in 8bit/kbd.tsx - needs cyberpunk reskin |

## Component Transformations

How existing 8bitcn components must change for cyberpunk aesthetic.

| Component | Current (8bit) | Required Transformation | Complexity |
|-----------|---------------|------------------------|------------|
| Button | Chunky pixel border, playful | Thin border, uppercase, phosphor glow on hover | Low |
| Card | Thick pixel frame | 1px border, optional scanlines, DOS-style title bar | Low |
| Input | Pixel border, friendly | Thin border, terminal prompt prefix option, monospace | Low |
| Alert | Rounded corners, soft | Sharp corners, status color glow, ASCII icon prefixes | Low |
| Badge | Chunky outline | Thin border, bracketed text `[BADGE]`, glow | Low |
| Table | Pixel borders | ASCII table drawing characters, monospace data | Medium |
| Progress | Chunky bar | ASCII `[====>  ]` or thin bar with scanlines | Medium |
| Dialog | Pixel frame | DOS window with title bar, close as `[X]` | Low |
| Select | Friendly dropdown | Command-line style with `>` selection indicator | Medium |
| Tabs | Rounded tabs | Terminal tabs with `[ACTIVE]` bracketing | Low |
| Tooltip | Soft popup | Sharp tooltip with terminal border, monospace | Low |
| Accordion | Pixel chevron | `>` or `+` ASCII expand indicators | Low |
| Calendar | Rounded cells | Grid with ASCII borders, monospace dates | Medium |
| Command Palette | Soft search | Terminal-style fuzzy finder with `>` prompt | Medium |
| Switch | Rounded toggle | `[ON]`/`[OFF]` or `|` slider with brackets | Low |
| Slider | Friendly bar | ASCII `|----o----|` style range slider | Medium |

## Differentiators

Features that set CyberCN apart from generic terminal libraries. Not expected, but highly valued.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Radar/HUD display components** | Circular radar with sweep animation, positioning markers | High | Iconic cyberpunk element - rotating scan line, target markers |
| **Dithered image component** | Auto-applies Bayer/Atkinson/Floyd-Steinberg dithering to images | High | Transforms any image to terminal aesthetic, canvas-based |
| **Terminal boot sequence** | Animated POST/BIOS-style loading screens for app init | Medium | Nostalgic UX moment, builds anticipation |
| **Matrix-style data cascade** | Vertical scrolling columns of characters/numbers | Medium | Background decoration for dashboards, pure aesthetic |
| **Glitch text effects** | Brief corruption/scramble animations on state changes | Medium | Cyberpunk signature - suggests data instability |
| **ASCII art generator** | Convert text to figlet-style ASCII headers | Low | Headers that feel like terminal banners |
| **Perspective grid backgrounds** | Faux-3D wireframe grids (Tron-style) | Low | `.grid-perspective` exists, needs full background option |
| **Tactical display panels** | Angled corner brackets, coordinate displays, mission-brief aesthetic | Medium | Military command center feel, metadata-heavy |
| **Waveform/oscilloscope displays** | Audio-reactive or data visualization as waveforms | High | Signal processing aesthetic, real-time data |
| **Encryption/decryption animation** | Text scramble then resolve for content reveals | Medium | Hacker aesthetic, progressive disclosure |
| **System status dashboard** | CPU/MEM/NET style system monitors (fake or real) | Medium | Command center table stakes, could use real metrics via API |
| **Code block with syntax highlighting** | Monochrome syntax highlighting matching theme color | Medium | Developers are target audience - must support code well |
| **Terminal window chrome** | Draggable terminal windows with title bars, minimize/maximize | High | Multi-window dashboard UX, advanced layout |
| **Pixelated/dithered video backgrounds** | Live video feed with real-time dither filter | High | Extreme aesthetic commitment, performance-intensive |
| **Enemy/health displays** | RPG-style health bars, already exists in 8bit | Low | Repurpose existing `health-bar.tsx`, `mana-bar.tsx`, `xp-bar.tsx` |

## Anti-Features

Features to explicitly NOT build. Common mistakes that break the aesthetic.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **Smooth gradients** | Terminals can't render gradients, breaks monochrome discipline | Use dithering patterns to suggest gradient with halftone |
| **Rounded corners** | Terminals are sharp rectangles, curves feel modern/soft | Sharp 90° corners, or subtle chamfered corners (1-2px) |
| **Drop shadows** | Too modern, too soft, terminals don't cast shadows | Use glow instead of shadow for depth |
| **Emoji or icon fonts** | Too colorful, too friendly, breaks monochrome | ASCII art icons, Unicode box-drawing characters |
| **Animation easing curves** | Smooth animations feel polished - wrong aesthetic | Linear or step-based animations, instant state changes |
| **Thick borders (>2px)** | 8bitcn's chunky style - wrong product | 1px borders only, or 3px for double-line DOS borders |
| **Multiple colors per component** | Breaks monochrome discipline | One accent color per theme, rest is shades of that color |
| **Light mode as default** | Terminals are dark screens in dark rooms | Dark mode primary, light mode optional if demanded |
| **Stock photos** | Too real, too modern | Dithered imagery only, or pure data visualizations |
| **Serif or humanist fonts** | Terminals use monospace, period | IBM Plex Mono, JetBrains Mono, or other terminal fonts |

## Component Additions

New components needed beyond shadcn base set.

### High Priority (Core Terminal UX)

| Component | Purpose | Complexity |
|-----------|---------|------------|
| **Terminal Console** | Scrolling log output, command history, live updates | High |
| **Command Input** | Input with prompt, autocomplete, history navigation | Medium |
| **Radar Display** | Circular sweep with markers, HUD aesthetic | High |
| **Dithered Image** | Wrapper that applies dithering to any image | High |
| **ASCII Progress** | Full component with `[====>   ] 65%` style | Low |
| **System Monitor** | CPU/MEM/NET gauges in terminal style | Medium |
| **Status Panel** | Panel with title bar, status indicators, collapsible | Low |
| **Boot Sequence** | Animated BIOS/POST screen for loading states | Medium |

### Medium Priority (Enhanced UX)

| Component | Purpose | Complexity |
|-----------|---------|------------|
| **Data Table (terminal)** | ASCII borders, sortable, paginated | Medium |
| **Glitch Text** | Text with brief corruption animations | Low |
| **Matrix Cascade** | Background decoration with falling characters | Medium |
| **ASCII Art Header** | Figlet-style text rendering | Low |
| **Tactical Panel** | Angled corners, metadata display | Medium |
| **Code Block** | Syntax highlighting in monochrome | Medium |

### Low Priority (Polish)

| Component | Purpose | Complexity |
|-----------|---------|------------|
| **Waveform Display** | Oscilloscope-style data viz | High |
| **Encryption Animation** | Scramble/resolve text reveal | Low |
| **Terminal Window Chrome** | Draggable window with controls | High |
| **Perspective Grid BG** | Full-screen Tron-style grid | Low |

## Feature Dependencies

```
Core Aesthetic Layer (Foundation)
├─ Thin borders (all components depend on this)
├─ Monospace typography (all text depends on this)
├─ Phosphor glow utilities (buttons, borders, text)
├─ CRT scanlines (panels, cards, overlays)
└─ Monochrome themes (entire color system)

Component Layer (Built on Core)
├─ Standard shadcn components (transformed)
│   ├─ Button → requires: borders, glow
│   ├─ Card → requires: borders, scanlines, DOS title
│   ├─ Input → requires: borders, prompt, monospace
│   └─ ... (all 45+ components)
│
└─ New cyberpunk components
    ├─ Terminal Console → requires: scrolling, monospace, prompt
    ├─ Radar Display → requires: SVG, animation, glow
    ├─ Dithered Image → requires: canvas, image processing
    └─ ASCII Progress → requires: monospace, brackets

Effects Layer (Applied on Top)
├─ Dithering patterns → can apply to any component
├─ Glitch effects → can apply to text anywhere
└─ Grid backgrounds → can apply to layouts
```

**Critical path:** Core Aesthetic → Standard Components → Terminal Components → Effects

## MVP Recommendation

For initial cyberpunk transformation, prioritize in this order:

### Phase 1: Core Aesthetic (Week 1-2)
1. Establish monochrome theme system (green, amber, cyan)
2. Create thin-border variants for top 10 components (Button, Card, Input, Alert, Badge, Table, Dialog, Select, Tabs, Progress)
3. Verify glow/scanline effects work across components

### Phase 2: Terminal Foundation (Week 3-4)
4. Build Terminal Console component (high-value differentiator)
5. Build Command Input component (completes terminal UX)
6. Transform remaining shadcn components (15-20 components)

### Phase 3: Differentiators (Week 5-6)
7. Radar Display component (signature visual)
8. Dithered Image component (aesthetic enforcer)
9. ASCII Progress and System Monitor (functional polish)

### Phase 4: Effects & Polish (Week 7-8)
10. Glitch text utilities
11. Additional themes (red, white, orange)
12. Documentation site reskin to CyberCN

**Defer to post-MVP:**
- Matrix cascade (pure decoration)
- Waveform displays (complex, niche)
- Terminal window chrome (complex, not core UX)
- Encryption animations (polish)
- Pixelated video (performance-intensive)

## Existing Assets to Leverage

From 8bitcn codebase:

| Asset | Status | Action |
|-------|--------|--------|
| `components/ui/8bit/*.tsx` | 45+ components | Transform to cyberpunk in parallel |
| `components/ui/protheus/*.tsx` | 9 components (proof of concept) | Use as templates for transformation |
| `components/ui/8bit/styles/protheus.css` | Core effects library | Extend with additional utilities |
| `components/ui/8bit/health-bar.tsx` | RPG-style bars | Rebrand as system monitors |
| `components/ui/8bit/kbd.tsx` | Keyboard shortcuts | Reskin to terminal style |
| `components/ui/8bit/empty.tsx` | Empty state | Add ASCII art option |
| `registry.json` | shadcn registry | Update with CyberCN components |

## Validation Strategy

How to know if features achieve cyberpunk aesthetic:

**Visual Tests:**
- Screenshot component, desaturate to grayscale - does it still look terminal-like?
- Apply each monochrome theme - does component feel like same terminal, different phosphor?
- View at 1x zoom - are borders crisp 1px, not blurry?

**Aesthetic Checklist:**
- [ ] No rounded corners (except subtle 1-2px chamfer)
- [ ] No smooth gradients (dithering only)
- [ ] Monospace font throughout
- [ ] Single accent color (theme color)
- [ ] Sharp borders, no soft shadows
- [ ] Uppercase text for labels/buttons
- [ ] ASCII/Unicode characters over icon fonts

**Functional Requirements:**
- [ ] WCAG contrast ratios maintained (glow doesn't hurt readability)
- [ ] Keyboard navigation works (terminal users expect keyboard-first)
- [ ] Screen reader compatible (ARIA labels, semantic HTML)
- [ ] No layout shift with glow effects (use outline instead of inset)

## Sources

**Confidence level: MEDIUM**

Research based on:
- Direct code inspection of `/components/ui/protheus/` and `/components/ui/8bit/styles/protheus.css` (HIGH confidence for existing features)
- PROJECT.md requirements and constraints (HIGH confidence for project goals)
- Training knowledge of cyberpunk UI patterns, terminal aesthetics, and retro-computing interfaces (MEDIUM confidence - patterns are established but not verified with 2026 sources)
- Component list from existing 8bitcn library (HIGH confidence - file system inspection)

**Gaps requiring validation:**
- Current state of cyberpunk UI libraries in 2026 (no WebSearch available)
- Latest dithering algorithm implementations for web (training data may be outdated)
- Performance benchmarks for canvas-based dithering (need testing)
- User expectations for "cyberpunk" in 2026 (aesthetic may have evolved)

**What might be missing:**
- AR/VR-style holographic effects (emerging in cyberpunk aesthetic?)
- Accessibility patterns specific to high-contrast monochrome UIs
- Mobile-specific terminal UI patterns (project is desktop-first, but responsive)
- Integration patterns with modern frameworks (Next.js, Remix, Astro)
