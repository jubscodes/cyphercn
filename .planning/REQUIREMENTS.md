# Requirements: CyberCN

**Defined:** 2026-01-31
**Core Value:** Every component must feel like it belongs on a 1980s command center terminal — monochrome, glowing, functional, intimidating.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation (FOUND)

- [x] **FOUND-01**: Theme system with CSS custom properties for all colors
- [x] **FOUND-02**: 6 monochrome color themes (green, amber, cyan, red, white, orange)
- [x] **FOUND-03**: IBM Plex Mono typography integration via next/font
- [x] **FOUND-04**: Scanline effect CSS utility (subtle and strong variants)
- [x] **FOUND-05**: Phosphor glow CSS utility (text, border, intense variants)
- [x] **FOUND-06**: CRT screen container effect (curvature, vignette)
- [x] **FOUND-07**: Box-drawing border utilities (single, double, ASCII)
- [x] **FOUND-08**: Dithering pattern CSS utilities (Bayer, halftone, noise)
- [x] **FOUND-09**: High-contrast accessibility mode (WCAG AA compliant)
- [x] **FOUND-10**: prefers-reduced-motion support for all animations

### Component Transformation (COMP)

- [ ] **COMP-01**: Button — thin border, terminal variants, glow on hover
- [ ] **COMP-02**: Card — DOS window style with title bar option
- [ ] **COMP-03**: Input — terminal prompt style with cursor
- [ ] **COMP-04**: Textarea — bordered terminal input
- [ ] **COMP-05**: Alert — system notification style with level prefixes
- [ ] **COMP-06**: Badge — bracket and tag variants
- [ ] **COMP-07**: Table — thin borders, monospace alignment
- [ ] **COMP-08**: Dialog — DOS modal window style
- [ ] **COMP-09**: Select — terminal dropdown
- [ ] **COMP-10**: Tabs — underline/bracket variants
- [ ] **COMP-11**: Progress — ASCII progress bar variants
- [ ] **COMP-12**: Checkbox — terminal checkbox style
- [ ] **COMP-13**: Radio — terminal radio style
- [ ] **COMP-14**: Switch — terminal toggle
- [ ] **COMP-15**: Slider — thin line slider
- [ ] **COMP-16**: Accordion — collapsible terminal sections
- [ ] **COMP-17**: Avatar — pixelated/dithered avatar
- [ ] **COMP-18**: Breadcrumb — path-style navigation
- [ ] **COMP-19**: Calendar — terminal date picker
- [ ] **COMP-20**: Carousel — terminal image slider
- [ ] **COMP-21**: Collapsible — expandable sections
- [ ] **COMP-22**: Command — terminal command palette
- [ ] **COMP-23**: Context Menu — right-click terminal menu
- [ ] **COMP-24**: Drawer — slide-in terminal panel
- [ ] **COMP-25**: Dropdown Menu — terminal dropdown
- [ ] **COMP-26**: Hover Card — terminal tooltip card
- [ ] **COMP-27**: Menubar — terminal menu bar
- [ ] **COMP-28**: Navigation Menu — terminal nav
- [ ] **COMP-29**: Pagination — terminal page navigation
- [ ] **COMP-30**: Popover — terminal popover
- [ ] **COMP-31**: Scroll Area — terminal scroll container
- [ ] **COMP-32**: Separator — ASCII line separators
- [ ] **COMP-33**: Sheet — terminal side panel
- [ ] **COMP-34**: Skeleton — terminal loading placeholder
- [ ] **COMP-35**: Toast — terminal notification
- [ ] **COMP-36**: Toggle — terminal toggle button
- [ ] **COMP-37**: Toggle Group — terminal toggle group
- [ ] **COMP-38**: Tooltip — terminal tooltip
- [ ] **COMP-39**: Resizable — terminal resizable panels
- [ ] **COMP-40**: Input OTP — terminal OTP input

### New Cyberpunk Components (CYBER)

- [ ] **CYBER-01**: Terminal Console — scrolling log output with timestamps
- [ ] **CYBER-02**: Command Input — prompt with cursor animation and history
- [ ] **CYBER-03**: Log Entry — individual log line with level styling
- [ ] **CYBER-04**: Status Indicator — online/offline/processing states
- [ ] **CYBER-05**: Dithered Image — apply dither patterns to images
- [ ] **CYBER-06**: System Monitor — CPU/memory gauge display
- [ ] **CYBER-07**: Network Monitor — bandwidth/connection display
- [ ] **CYBER-08**: ASCII Spinner — terminal loading animation
- [ ] **CYBER-09**: Panel — DOS-style bordered panel with title

### Distribution (DIST)

- [ ] **DIST-01**: Update registry.json for CyberCN components
- [ ] **DIST-02**: Verify shadcn CLI installation works
- [ ] **DIST-03**: Create component installation instructions

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Branding & Documentation

- **DOCS-01**: Rebrand documentation site to CyberCN
- **DOCS-02**: Create component showcase with cyberpunk examples
- **DOCS-03**: Write theme customization guide
- **DOCS-04**: Create "building a dashboard" tutorial

### Advanced Components

- **ADV-01**: Radar Display — animated radar sweep
- **ADV-02**: Wireframe Globe — 3D globe visualization
- **ADV-03**: Boot Sequence — startup animation component
- **ADV-04**: Glitch Text — animated glitch effect
- **ADV-05**: Matrix Rain — falling character animation

## Out of Scope

| Feature | Reason |
|---------|--------|
| 8bitcn playful pixel aesthetic | Different product, not a theme variant |
| Animation-heavy components | Terminal UIs are functional, not flashy |
| Light mode as primary | Dark terminal is the default experience |
| Mobile-first design | Command centers are desktop-primary |
| Real-time video dithering | Performance concerns, defer post-v1 |
| Multiple fonts per theme | Monospace only for terminal consistency |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Complete |
| FOUND-02 | Phase 1 | Complete |
| FOUND-03 | Phase 1 | Complete |
| FOUND-04 | Phase 1 | Complete |
| FOUND-05 | Phase 1 | Complete |
| FOUND-06 | Phase 1 | Complete |
| FOUND-07 | Phase 1 | Complete |
| FOUND-08 | Phase 1 | Complete |
| FOUND-09 | Phase 1 | Complete |
| FOUND-10 | Phase 1 | Complete |
| COMP-01 | Phase 2 | Pending |
| COMP-02 | Phase 2 | Pending |
| COMP-03 | Phase 2 | Pending |
| COMP-04 | Phase 2 | Pending |
| COMP-05 | Phase 2 | Pending |
| COMP-06 | Phase 2 | Pending |
| COMP-07 | Phase 2 | Pending |
| COMP-08 | Phase 2 | Pending |
| COMP-09 | Phase 2 | Pending |
| COMP-10 | Phase 2 | Pending |
| COMP-11 | Phase 2 | Pending |
| COMP-12 | Phase 2 | Pending |
| COMP-13 | Phase 2 | Pending |
| COMP-14 | Phase 2 | Pending |
| COMP-15 | Phase 2 | Pending |
| COMP-16 | Phase 2 | Pending |
| COMP-17 | Phase 2 | Pending |
| COMP-18 | Phase 2 | Pending |
| COMP-19 | Phase 2 | Pending |
| COMP-20 | Phase 2 | Pending |
| COMP-21 | Phase 2 | Pending |
| COMP-22 | Phase 2 | Pending |
| COMP-23 | Phase 2 | Pending |
| COMP-24 | Phase 2 | Pending |
| COMP-25 | Phase 2 | Pending |
| COMP-26 | Phase 2 | Pending |
| COMP-27 | Phase 2 | Pending |
| COMP-28 | Phase 2 | Pending |
| COMP-29 | Phase 2 | Pending |
| COMP-30 | Phase 2 | Pending |
| COMP-31 | Phase 2 | Pending |
| COMP-32 | Phase 2 | Pending |
| COMP-33 | Phase 2 | Pending |
| COMP-34 | Phase 2 | Pending |
| COMP-35 | Phase 2 | Pending |
| COMP-36 | Phase 2 | Pending |
| COMP-37 | Phase 2 | Pending |
| COMP-38 | Phase 2 | Pending |
| COMP-39 | Phase 2 | Pending |
| COMP-40 | Phase 2 | Pending |
| CYBER-01 | Phase 3 | Pending |
| CYBER-02 | Phase 3 | Pending |
| CYBER-03 | Phase 3 | Pending |
| CYBER-04 | Phase 3 | Pending |
| CYBER-05 | Phase 3 | Pending |
| CYBER-06 | Phase 3 | Pending |
| CYBER-07 | Phase 3 | Pending |
| CYBER-08 | Phase 3 | Pending |
| CYBER-09 | Phase 3 | Pending |
| DIST-01 | Phase 4 | Pending |
| DIST-02 | Phase 4 | Pending |
| DIST-03 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 62 total
- Mapped to phases: 62
- Unmapped: 0 ✓

---
*Requirements defined: 2026-01-31*
*Last updated: 2026-02-01 after roadmap creation*
