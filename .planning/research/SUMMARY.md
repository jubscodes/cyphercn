# Research Summary: CyberCN Terminal UI Stack

**Domain:** Cyberpunk terminal UI component library
**Researched:** 2026-01-31
**Overall confidence:** MEDIUM (Strong on CSS techniques and accessibility patterns; WebSearch unavailable for 2026 ecosystem validation)

## Executive Summary

The transformation of 8bitcn-ui to CyberCN requires CSS-first implementation of terminal effects (scanlines, phosphor glow, CRT distortion) built on the existing Next.js 16 + Tailwind 4 + shadcn infrastructure. The technical stack is straightforward and well-established: CSS custom properties for theming, CSS filters and text-shadow for visual effects, Unicode box-drawing characters for borders, and Canvas API for image dithering (at build-time only).

The primary challenges are not technical complexity but design discipline and performance management. Terminal aesthetics create inherent tension between authenticity and accessibility. Monochrome green-on-black fails WCAG AA contrast ratios. CSS filters are GPU-intensive and compound rapidly on complex dashboards. Image dithering blocks the main thread if done at runtime. Box-drawing characters require specific monospace font support to avoid misalignment.

Success depends on three critical decisions made early: (1) Use CSS custom properties from day one (no hardcoded colors), (2) Apply expensive effects to containers not components (performance budget), (3) Build high-contrast accessible mode simultaneously with authentic mode (not as afterthought).

The existing codebase already contains proof-of-concept implementations in `components/ui/protheus/` and `components/ui/8bit/styles/protheus.css`. These demonstrate scanlines, glow effects, dithering patterns, and box-drawing borders working in production. The work ahead is systematization and expansion, not R&D.

## Key Findings

**Stack:** CSS-first terminal effects (filters, text-shadow, background patterns) + IBM Plex Mono typography + Canvas API for build-time dithering. Zero additional runtime dependencies beyond existing Tailwind 4 / Next.js 16 stack.

**Architecture:** Variant-parallel pattern where cyberpunk components live in `components/ui/cyber/` alongside existing `components/ui/8bit/`, both wrapping base shadcn components. Shared effects CSS in `cyber.css` loaded globally. Maintains shadcn registry compatibility.

**Critical pitfall:** CSS filter overload. Applying `filter`, `backdrop-filter`, and multi-layer `box-shadow` to every component kills 60fps on complex dashboards. Must budget GPU usage: max 5-7 active filters simultaneously, apply to containers not components.

## Implications for Roadmap

Based on research, suggested phase structure:

### 1. Foundation: Theme System & Typography (Week 1-2)
**Why first:** All visual effects depend on color system. Font loading affects layout stability. Get foundational infrastructure correct before building on it.

- Establish CSS custom property architecture (`--phosphor-primary`, `--phosphor-glow`, etc.)
- Integrate IBM Plex Mono via `next/font` with proper loading strategy (prevents FOUT)
- Create base theme variants (green, amber, cyan)
- Build theme switcher with instant toggle (CSS class on `<html>`, no React state cascade)

**Addresses:**
- Pitfall #9 (hardcoded colors causing refactor nightmare)
- Pitfall #4 (font loading FOUT breaking box-drawing alignment)
- Pitfall #5 (theme switching flash)

**Avoids:** Starting component work before color system exists, leading to hardcoded values that require painful refactor later.

### 2. Core Visual Effects Library (Week 2-3)
**Why second:** Reusable CSS utilities must exist before applying to components. Standardizes implementation patterns.

- Create Tailwind utilities for scanlines, glow, borders
- Implement CRT screen container effects (curvature, distortion)
- Build phosphor glow variants (text, border, intense)
- Document performance budget (max filters per viewport)
- Test on low-end devices (establish baseline)

**Addresses:**
- Pitfall #1 (CSS filter overload via container-scoped effects)
- Pitfall #7 (inconsistent borders via standard utilities)
- Feature dependencies (all components need these utilities)

**Avoids:** Per-component reinvention of effects, leading to inconsistency and performance issues.

### 3. Component Transformation (Week 3-5)
**Why third:** Foundation and effects library now exist. Transform components systematically in priority order.

- Phase 3a: Top 10 components (Button, Card, Input, Alert, Badge, Table, Dialog, Select, Tabs, Progress)
- Phase 3b: Remaining shadcn components (15-20 components)
- Apply standard border/glow/theme patterns
- Ensure accessible focus states (visible, WCAG compliant)

**Addresses:**
- All table-stakes features from FEATURES.md
- Component transformation requirements
- Consistency via established patterns

**Avoids:** Scope creep into differentiator features before basics work.

### 4. Accessibility & High-Contrast Mode (Week 5-6)
**Why fourth:** Can't ship without accessible mode. Must be built before launch, not as afterthought.

- Create high-contrast theme variants (WCAG AA compliant)
- Implement `prefers-contrast: high` media query support
- Build `prefers-reduced-motion` support for all animations
- Ensure 44x44px tap targets on mobile
- Run full accessibility audit (Axe DevTools)

**Addresses:**
- Pitfall #2 (WCAG failure blocking adoption)
- Pitfall #8 (motion sensitivity violations)
- Pitfall #13 (mobile tap target failures)

**Avoids:** Shipping inaccessible-by-default library that alienates users and fails enterprise compliance.

### 5. Differentiator Components (Week 6-8)
**Why fifth:** Core library functional and accessible. Now add unique value.

- Terminal Console component (scrolling output, command history)
- Command Input component (prompt, autocomplete)
- Dithered Image component (Canvas-based with Web Worker)
- ASCII Progress component
- System Monitor gauges

**Addresses:**
- Differentiators from FEATURES.md
- Pitfall #3 (dithering blocking main thread - use Web Worker)

**Avoids:** Building flashy features before fundamentals work, creating "looks cool but broken" reputation.

### 6. Additional Themes & Polish (Week 8-9)
**Why last:** Core functionality complete, accessible, differentiators shipped. Now expand palette.

- Red, white, orange theme variants
- Glitch text effect utilities
- Additional grid/wireframe backgrounds
- Documentation site reskin

**Phase ordering rationale:**
1. Foundation before effects (avoid refactors)
2. Effects before components (standardization)
3. Components before accessibility audit (all surfaces to test)
4. Accessibility before differentiators (non-negotiable baseline)
5. Differentiators before polish (value before perfection)

**Research flags for phases:**
- **Phase 2 (Effects):** Will need performance testing on target devices. Research suggests 5-7 filter budget, but real dashboards may differ. Flag for empirical measurement.
- **Phase 4 (Accessibility):** WCAG 2.2 updates post-training cutoff. Flag for standards verification.
- **Phase 5 (Dithering):** Web Worker implementation patterns for Canvas processing. Standard pattern but untested in this stack. Flag for POC.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | CSS techniques well-established. Dithering libraries and font recommendations based on training data, not verified with 2026 sources (WebSearch unavailable). |
| Features | MEDIUM | Table stakes identified from existing codebase + terminal UI conventions. Differentiators hypothesized from cyberpunk aesthetic patterns, not validated via market research. |
| Architecture | HIGH | Based on direct inspection of existing 8bitcn codebase structure. Variant-parallel pattern is proven in codebase already. |
| Pitfalls | HIGH | Accessibility and performance pitfalls are well-documented standards (WCAG 2.1, CSS performance). Framework-specific pitfalls (Next.js 16, React 19) may have evolved post-training. |

## Gaps to Address

### Unresolved During Research

1. **Current state of dithering libraries:** Training data identifies `image-dithering` npm package and `sharp` for Node.js. Unknown if better solutions emerged in 2025/2026 or if these have breaking changes.
   - **Mitigation:** Validate versions during Phase 5 implementation, be prepared to write custom Floyd-Steinberg if needed.

2. **Browser support for `backdrop-filter`:** Known to require `-webkit-` prefix in Safari <16 and have poor performance in Firefox <103. Current browser landscape unknown.
   - **Mitigation:** Test in all major browsers during Phase 2, implement `@supports` fallback.

3. **Tailwind 4 CSS layers best practices:** Tailwind 4 introduced CSS-first architecture. Specific patterns for custom effects layers not verified.
   - **Mitigation:** Review Tailwind 4 official docs during Phase 2 setup.

4. **Next.js 16 font optimization:** `next/font` API may have changed since training cutoff.
   - **Mitigation:** Verify Next.js 16 docs during Phase 1 typography integration.

5. **WCAG 2.2 updates:** WCAG 2.2 released in 2023, may have additional requirements post-training.
   - **Mitigation:** Full WCAG 2.2 audit during Phase 4.

### Topics Needing Phase-Specific Research Later

- **Phase 2:** GPU performance profiling methodology for 2026 devices
- **Phase 4:** Latest screen reader compatibility patterns (ARIA 1.3?)
- **Phase 5:** Web Worker setup in Next.js 16 (build config changes?)
- **Phase 6:** Current state of glitch effect libraries (worth adopting vs custom CSS?)

## What Might Be Missing

**Ecosystem changes:** Without WebSearch access, cannot validate if new cyberpunk UI libraries emerged in 2025/2026 that set new expectations or solve known problems better.

**Performance baselines:** Cannot verify current mobile device GPU capabilities. Research assumes 2024-era device constraints (potentially outdated).

**Design trends:** Cyberpunk aesthetic may have evolved. "Authentic terminal" in 2026 might mean different things than training data suggests.

**Integration patterns:** Unknown if Tailwind 4 or React 19 introduced new capabilities that simplify terminal effects (e.g., native CSS nesting, new React Compiler optimizations).

## Ready for Roadmap

Research complete with MEDIUM confidence. Recommendations are actionable despite gaps:

- **Stack decisions:** Clear and prescriptive (CSS custom properties + filters + Canvas)
- **Architecture pattern:** Proven in existing codebase
- **Phase structure:** Logical ordering with clear rationale
- **Risk areas flagged:** Known unknowns identified for validation during implementation

Primary recommendation: Validate browser support, library versions, and WCAG 2.2 requirements during Phase 1-2 setup. Core techniques (CSS filters, text-shadow, custom properties) are stable web standards unlikely to have changed significantly.

**Proceeding to roadmap creation is recommended.** Research provides sufficient foundation. Remaining gaps are "verify during implementation" not "blocking unknowns."
