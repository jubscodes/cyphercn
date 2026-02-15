# Phase 1: Foundation & Visual Effects - Research

**Researched:** 2026-02-01
**Domain:** CSS theming, typography, terminal effects, accessibility
**Confidence:** HIGH

## Summary

The CyberCN/Protheus theme will follow the established 8bitcn theming pattern: CSS custom properties defined in `.theme-protheus` class selectors in `app/globals.css`, with Tailwind CSS 4's `@theme inline` directive bridging to utility classes. The existing protheus.css file provides CRT effects utilities (scanlines, phosphor glow, dithering) that are already production-ready.

Key findings:
- 8bitcn uses a **class-based theme switching** system (`theme-{name}`) via ActiveThemeProvider, not `prefers-color-scheme`
- IBM Plex Mono is already configured but imported via Google Fonts URL in protheus.css (line 6); should migrate to `next/font/google` for optimization
- Tailwind CSS 4 uses `@theme inline` (already in globals.css) to map CSS custom properties to utility classes
- Existing CRT effect utilities in protheus.css are well-implemented and follow modern CSS patterns

**Primary recommendation:** Consolidate the Protheus theme definition in globals.css to match other themes' structure, migrate font loading to next/font, and formalize the CSS utility patterns using Tailwind 4's @utility directive.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.4 | React framework | App Router with native font optimization |
| Tailwind CSS | 4.1.18 | Utility CSS | CSS-first configuration via @theme directive |
| next-themes | 0.4.6 | Theme management | SSR-safe dark mode, used by ThemeProvider |
| CSS Custom Properties | Native | Theme tokens | Dynamic runtime theming without JS |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/font/google | Built-in | Font optimization | IBM Plex Mono with automatic subsetting |
| class-variance-authority | 0.7.1 | Variant management | Component variants (already used in button.tsx) |
| clsx / tailwind-merge | Current | Class utilities | cn() helper for conditional classes |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS custom properties | Tailwind theme config | CSS properties allow runtime switching; config requires rebuild |
| next/font/google | Google Fonts CDN | next/font provides automatic optimization, preloading, zero layout shift |
| @utility directive | @layer utilities | @utility is Tailwind 4 native, provides better variant support |

**Installation:**
```bash
# All dependencies already installed in package.json
# No additional packages required for Phase 1
```

## Architecture Patterns

### Recommended Project Structure
```
app/
├── globals.css              # Theme definitions + @theme inline directive
└── layout.tsx               # Font loading with next/font/google

components/ui/
├── protheus/                # Themed components
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── 8bit/styles/
    └── protheus.css         # CRT effect utilities
```

### Pattern 1: Theme Definition (8bitcn Established Pattern)
**What:** Define themes as CSS class selectors with CSS custom properties, not as data attributes or media queries
**When to use:** For all themes in the 8bitcn system
**Example:**
```css
/* Source: app/globals.css lines 1203-1282 */
.theme-protheus {
  --radius: 0rem;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.85 0.25 142);
  --primary: oklch(0.85 0.25 142);
  /* ... all theme tokens */

  @variant dark {
    --background: oklch(0.05 0 0);
    --foreground: oklch(0.85 0.25 142);
    /* ... dark variant overrides */
  }
}
```

### Pattern 2: Font Loading with next/font/google
**What:** Use next/font/google for IBM Plex Mono instead of Google Fonts URL import
**When to use:** In app/layout.tsx for global font configuration
**Example:**
```tsx
// Source: Next.js docs + IBM Plex Mono specifications
import { IBM_Plex_Mono } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
})

// Apply: className={ibmPlexMono.variable}
```

### Pattern 3: Tailwind 4 @theme inline Bridging
**What:** Map CSS custom properties to Tailwind utility classes
**When to use:** At the top of globals.css (already implemented lines 9-47)
**Example:**
```css
/* Source: app/globals.css lines 9-47 */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-mono: var(--font-ibm-plex-mono);
  /* Creates utilities like bg-background, text-foreground, font-mono */
}
```

### Pattern 4: CSS Utilities for Visual Effects
**What:** Define reusable CRT effect classes as CSS utilities
**When to use:** For scanlines, glow, dithering effects
**Example:**
```css
/* Source: components/ui/8bit/styles/protheus.css lines 28-56 */
.crt-scanlines::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(0, 0, 0, 0.15) 1px,
    rgba(0, 0, 0, 0.15) 2px
  );
  pointer-events: none;
  z-index: 10;
}

.phosphor-glow {
  text-shadow:
    0 0 2px currentColor,
    0 0 4px currentColor,
    0 0 8px rgba(51, 255, 51, 0.5);
}
```

### Pattern 5: Component Theming with cn() Helper
**What:** Combine base classes with theme-aware variants
**When to use:** In all Protheus components
**Example:**
```tsx
// Source: components/ui/protheus/button.tsx
import { cn } from "@/lib/utils";
import "@/components/ui/8bit/styles/protheus.css";

const buttonVariants = cva(
  "protheus inline-flex items-center justify-center uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-primary phosphor-border-glow",
      }
    }
  }
);
```

### Anti-Patterns to Avoid
- **Hardcoding theme colors in components:** Always use CSS custom properties (--primary, --foreground) not literal colors
- **Using @import for Google Fonts in CSS:** Use next/font/google for automatic optimization and zero layout shift
- **Mixing theme systems:** Don't use `prefers-color-scheme` or data-theme attributes; 8bitcn uses class-based switching
- **Forgetting pointer-events: none on overlays:** Scanline and effect overlays must not block interactions

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading | `<link>` tags in HTML | next/font/google | Automatic subsetting, preloading, FOUT prevention, zero layout shift |
| Theme switching | Custom context + localStorage | next-themes ThemeProvider | SSR-safe, automatic system preference detection, proven solution |
| Class conditional logic | String concatenation | clsx + tailwind-merge (cn helper) | Handles conflicts, deduplication, type-safe |
| Color palette | RGB/hex values | oklch() color space | Perceptually uniform, better dark mode, wider gamut |
| Accessibility queries | Custom JS media queries | CSS @media (prefers-reduced-motion) | Native browser support, respects user preferences |

**Key insight:** Font optimization and theme management have subtle edge cases (FOUT, hydration mismatches, SSR flash). Established solutions handle these robustly.

## Common Pitfalls

### Pitfall 1: Font Loading Order Causing FOUT
**What goes wrong:** Flash of Unstyled Text when Google Fonts load from CDN
**Why it happens:** @import in CSS is render-blocking but font file download is async
**How to avoid:** Use next/font/google which preloads font files and injects optimized CSS
**Warning signs:** Text shifts size/position on initial page load

### Pitfall 2: Theme Flash on Page Load
**What goes wrong:** Brief flash of wrong theme before correct theme applies
**Why it happens:** Theme class applies after hydration, but CSS is already parsed
**How to avoid:** 8bitcn's ActiveThemeProvider sets theme class on both `document.body` and `document.documentElement` (lines 61-71)
**Warning signs:** User sees default theme momentarily before theme switches

### Pitfall 3: CSS Custom Properties Not Updating
**What goes wrong:** Changing --foreground value doesn't affect text-foreground utility
**Why it happens:** Tailwind 4's @theme inline creates static mappings at build time
**How to avoid:** CSS custom properties update at runtime, but utility class names stay the same. The --color-foreground → var(--foreground) indirection is correct.
**Warning signs:** Utility classes don't respond to theme changes

### Pitfall 4: Scanlines Blocking Click Events
**What goes wrong:** CRT scanline overlay prevents users from clicking buttons/links
**Why it happens:** Pseudo-element ::before covers content without pointer-events: none
**How to avoid:** Always add `pointer-events: none` to decorative overlays (already done in protheus.css line 39)
**Warning signs:** UI elements appear clickable but don't respond

### Pitfall 5: Glow Effects Causing Performance Issues
**What goes wrong:** Heavy text-shadow on many elements causes GPU overdraw
**Why it happens:** Multiple layered shadows require rasterization per layer
**How to avoid:** Limit phosphor-glow to headings/accents, use phosphor-glow-subtle for body text
**Warning signs:** Scrolling jank, reduced frame rate on lower-end devices

### Pitfall 6: Reduced Motion Not Respected
**What goes wrong:** Animations play for users who have enabled reduce-motion
**Why it happens:** CSS animations don't check prefers-reduced-motion media query
**How to avoid:** Wrap animations in @media (prefers-reduced-motion: no-preference)
**Warning signs:** Accessibility audits fail, users report motion sickness

## Code Examples

Verified patterns from official sources:

### IBM Plex Mono Font Loading
```tsx
// Source: Next.js docs + Google Fonts IBM Plex Mono
import { IBM_Plex_Mono } from 'next/font/google'

// IBM Plex Mono has 8 weights: 100, 200, 300, 400, 500, 600, 700
// For terminal UI, recommend: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap', // Prevents FOIT
})

// In layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body>{children}</body>
    </html>
  )
}
```

### Protheus Theme Definition
```css
/* Source: app/globals.css pattern + protheus.css values */
.theme-protheus {
  /* Typography */
  --font-sans: var(--font-ibm-plex-mono);
  --font-mono: var(--font-ibm-plex-mono);

  /* Phosphor green palette */
  --phosphor: oklch(0.85 0.25 142);
  --phosphor-dim: oklch(0.45 0.15 142);
  --phosphor-bright: oklch(0.95 0.3 142);
  --phosphor-glow: oklch(0.7 0.2 142 / 0.5);

  /* Theme tokens - light mode (inverted) */
  --radius: 0rem;
  --background: oklch(0.85 0.2 142);
  --foreground: oklch(0.15 0.05 142);
  --primary: oklch(0.15 0.05 142);
  --primary-foreground: oklch(0.85 0.2 142);
  --border: oklch(0.2 0.08 142);

  @variant dark {
    /* Dark mode - primary mode: green on black */
    --background: oklch(0.05 0 0);
    --foreground: oklch(0.85 0.25 142);
    --primary: oklch(0.85 0.25 142);
    --primary-foreground: oklch(0.05 0 0);
    --border: oklch(0.85 0.25 142);
  }
}
```

### CRT Scanlines with Reduced Motion Support
```css
/* Source: protheus.css + accessibility best practices */
@media (prefers-reduced-motion: no-preference) {
  .crt-scanlines::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 1px,
      rgba(0, 0, 0, 0.15) 1px,
      rgba(0, 0, 0, 0.15) 2px
    );
    pointer-events: none;
    z-index: 10;
  }
}
```

### Tailwind 4 Custom Utility with @utility
```css
/* Source: Tailwind CSS 4 docs - Functions and directives */
@utility terminal-border {
  border: 1px solid currentColor;
  box-shadow:
    0 0 1px currentColor,
    0 0 2px rgba(51, 255, 51, 0.5),
    inset 0 0 1px rgba(51, 255, 51, 0.2);
}

/* Usage in HTML */
/* <div class="terminal-border">Content</div> */
```

### Dithering Pattern (Bayer)
```css
/* Source: protheus.css lines 117-125 */
.dither-bayer {
  background-image:
    linear-gradient(45deg, currentColor 25%, transparent 25%),
    linear-gradient(-45deg, currentColor 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, currentColor 75%),
    linear-gradient(-45deg, transparent 75%, currentColor 75%);
  background-size: 4px 4px;
  background-position: 0 0, 0 2px, 2px -2px, -2px 0px;
}
```

### Component with Multiple Color Themes
```tsx
// Source: Existing protheus button.tsx + 8bitcn theme patterns
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/8bit/styles/protheus.css";

export const cardVariants = cva(
  "protheus rounded-none border border-foreground bg-background text-foreground",
  {
    variants: {
      theme: {
        green: "theme-protheus-green",
        amber: "theme-protheus-amber",
        blue: "theme-protheus-blue",
        red: "theme-protheus-red",
        white: "theme-protheus-white",
        monochrome: "theme-protheus-monochrome",
      },
      glow: {
        none: "",
        subtle: "phosphor-glow",
        intense: "phosphor-glow-intense",
      }
    },
    defaultVariants: {
      theme: "green",
      glow: "none",
    }
  }
);
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Google Fonts CDN | next/font/google | Next.js 13+ | Zero layout shift, automatic subsetting, preloading |
| tailwind.config.js | @theme directive in CSS | Tailwind v4 (2024) | CSS-first configuration, better DX, runtime theming |
| rgb() / hsl() colors | oklch() color space | 2023-2024 | Perceptually uniform, wider gamut, better dark mode |
| @layer utilities | @utility directive | Tailwind v4 (2024) | Better variant support, automatic sorting |
| data-theme attribute | Class-based themes | 8bitcn pattern | Simpler SSR, no hydration issues |

**Deprecated/outdated:**
- `@import "tailwindcss/base"` → `@import "tailwindcss"` (Tailwind v4)
- `@apply` for component classes → Use cva() variants or @utility (better performance)
- RGB/HSL for theming → oklch() for perceptually uniform colors
- Font subsetting in config → Automatic in next/font

## Open Questions

Things that couldn't be fully resolved:

1. **6-color theme variants structure**
   - What we know: Requirement FOUND-01 specifies 6 color variants (green, amber, blue, red, white, monochrome)
   - What's unclear: Should these be separate `.theme-protheus-{color}` classes or CSS custom property overrides within `.theme-protheus`?
   - Recommendation: Create sub-themes as nested classes (`.theme-protheus.variant-amber`) to allow mixing with dark mode

2. **Box-drawing borders implementation**
   - What we know: FOUND-07 requires DOS-style box-drawing characters
   - What's unclear: CSS borders vs Unicode box-drawing characters (U+2500–U+257F)
   - Recommendation: Use thin 1px CSS borders for performance; optionally provide Unicode variant for authentic DOS aesthetic

3. **High-contrast mode color values**
   - What we know: FOUND-09 requires high-contrast mode support
   - What's unclear: Should high-contrast use forced-colors media query or be a separate theme variant?
   - Recommendation: Support both: @media (forced-colors: active) for system high-contrast, plus `.theme-protheus.high-contrast` class for manual toggle

## Sources

### Primary (HIGH confidence)
- Next.js Font Optimization Docs: https://nextjs.org/docs/app/getting-started/fonts
- Tailwind CSS v4 Upgrade Guide: https://tailwindcss.com/docs/upgrade-guide
- Tailwind CSS Functions and Directives: https://tailwindcss.com/docs/functions-and-directives
- IBM Plex Mono on Google Fonts: https://fonts.google.com/specimen/IBM+Plex+Mono
- Existing 8bitcn codebase: app/globals.css, components/active-theme.tsx, components/ui/protheus/button.tsx, components/ui/8bit/styles/protheus.css

### Secondary (MEDIUM confidence)
- [Tailwind CSS Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns)
- [Tailwind CSS v4: Functional Utilities](https://cixel.com.au/blog/tailwind-css-v4-functional-utilities)
- [Dark Mode with CSS: A Comprehensive Guide (2026)](https://618media.com/en/blog/dark-mode-with-css-a-comprehensive-guide/)
- [Using media queries for accessibility - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)

### Tertiary (LOW confidence)
- [Retro CRT terminal screen in CSS + JS](https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh) - WebSearch only, techniques verified against protheus.css
- [Interactive WebGL Backgrounds: Bayer Dithering](https://tympanus.net/codrops/2025/07/30/interactive-webgl-backgrounds-a-quick-guide-to-bayer-dithering/) - Recent but WebGL approach (CSS version in protheus.css is simpler)
- [The prefers-contrast and forced-colors CSS media features](https://dev.to/vivitt/the-prefers-contrast-and-forced-colors-css-media-features-g7m) - DEV Community article, concepts valid

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All libraries verified in package.json, documentation current
- Architecture: HIGH - Patterns extracted from working 8bitcn codebase
- Pitfalls: HIGH - Common issues documented in Next.js/Tailwind communities, verified in MDN
- CRT effects: HIGH - Working implementation exists in protheus.css
- Font integration: MEDIUM - Pattern clear but migration from URL import to next/font not yet implemented
- Color theme variants: MEDIUM - Structure needs design decision (nested classes vs separate themes)

**Research date:** 2026-02-01
**Valid until:** 2026-03-01 (30 days - stable ecosystem, Tailwind v4 and Next.js 16 are current)
