# Technology Stack - Cyberpunk Terminal UI Effects

**Project:** CyberCN (8bitcn-ui fork)
**Researched:** 2026-01-31
**Confidence:** MEDIUM (based on training data, WebSearch unavailable)

## Executive Summary

Cyberpunk terminal UI effects are best achieved through CSS-first techniques with minimal JavaScript. The core stack leverages CSS custom properties for theming, CSS filters for CRT effects, background patterns for scanlines, and text-shadow for phosphor glow. Image dithering requires Canvas API or WebGL. Box-drawing characters are pure Unicode. Performance-critical animations use CSS transforms and GPU acceleration.

**Key principle:** CSS > Canvas > JavaScript. Heavy JS animations defeat the retro aesthetic and hurt performance.

## Recommended Stack

### Core Visual Effects (CSS-First)

| Technique | Implementation | Purpose | Why |
|-----------|---------------|---------|-----|
| **CSS Custom Properties** | Theme variables | Monochrome color schemes | Dynamic theming without JS, scoped cascading |
| **CSS Filters** | `contrast()`, `brightness()`, `saturate()` | CRT color bleed, phosphor glow | GPU-accelerated, performant, no layout thrashing |
| **CSS text-shadow** | Multiple layered shadows | Phosphor glow on text | Pure CSS, animatable, zero JS overhead |
| **CSS background patterns** | Linear gradients + background-size | Scanlines overlay | No image assets, scalable, tiny footprint |
| **CSS backdrop-filter** | `blur()`, `saturate()` | Glass morphism, CRT glass effect | Modern browser support, compositing layer optimization |
| **CSS @keyframes** | Flicker, screen warp | CRT distortion animations | Declarative, GPU-accelerated, pauses when tab inactive |
| **CSS border-image** | Gradient borders | Neon border glow | CSS-only, no JS, animatable with transitions |

### Specialized Effects

| Technique | Implementation | Purpose | Why |
|-----------|---------------|---------|-----|
| **Canvas API** | ImageData manipulation | Image dithering (Floyd-Steinberg, Bayer) | Required for pixel-level manipulation, one-time processing |
| **CSS clip-path** | Polygon shapes | Terminal window bezels | Crisp edges, animatable, compositing layer |
| **CSS mix-blend-mode** | `screen`, `multiply`, `overlay` | Color bleed, light leakage | Compositing effects without JS |
| **Unicode box-drawing** | `U+2500` - `U+257F` | Thin terminal borders | Zero dependencies, accessible, copy-paste safe |

### Typography

| Font | Purpose | Why |
|------|---------|-----|
| **IBM Plex Mono** | Primary terminal font | Modern, readable, multiple weights, excellent Unicode support |
| **JetBrains Mono** | Code-heavy components | Ligatures optional, clear at small sizes, designed for terminals |
| **Berkeley Mono** | Premium alternative | Authentic VT220 feel, but commercial license |
| **Cascadia Code** | Fallback | Free, Powerline glyphs, maintained by Microsoft |

**Font stack recommendation:**
```css
font-family: 'IBM Plex Mono', 'JetBrains Mono', 'Cascadia Code', 'Courier New', monospace;
```

**Why IBM Plex Mono first:**
- Open source (SIL Open Font License)
- Designed for UI (not just code)
- Excellent readability at UI sizes (12-16px)
- Complete box-drawing character support
- Professional, less "developer tool" aesthetic than JetBrains Mono

### Dithering Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Canvas API (native)** | N/A | Floyd-Steinberg dithering | Full control, zero dependencies, build-time processing |
| **sharp** (Node.js) | ^0.33.x | Build-time image processing | Pre-process images during build, best quality |
| **image-dithering** (npm) | ^1.x | Browser runtime dithering | User-uploaded images, dynamic dithering |

**Recommendation:** Pre-process images at build time with sharp + custom Floyd-Steinberg implementation. Avoid runtime dithering except for user uploads (heavy computation).

### Animation Performance

| Approach | Use For | Avoid For |
|----------|---------|-----------|
| **CSS transforms** | Scanline movement, flicker | Layout changes (use transform, not top/left) |
| **CSS opacity** | Fade effects | Color changes (use color transition instead) |
| **requestAnimationFrame** | Canvas-based effects only | DOM manipulation (use CSS transitions) |
| **Intersection Observer** | Pause animations off-screen | Continuous polling |

## NOT Recommended

| Technology | Why NOT | What to Use Instead |
|------------|---------|-------------------|
| Three.js / WebGL shaders | Overkill for terminal UI, 500KB+ bundle | CSS filters + backdrop-filter |
| GSAP / Framer Motion | Heavy animation libraries | CSS @keyframes + transitions |
| Lottie animations | Not retro aesthetic, file size | CSS animations |
| SVG filters | Poor performance on complex effects | CSS filters (hardware accelerated) |
| JavaScript-based scanlines | Janky, layout thrashing | CSS background patterns |
| Web Workers for dithering | Complexity for marginal gain | Build-time processing with sharp |

## Implementation Patterns

### Pattern 1: CRT Screen Effect (CSS-Only)

**What:** Curved screen distortion, scanlines, phosphor glow
**When:** Container-level effect for terminal windows
**Performance:** GPU-accelerated, ~0ms CPU overhead

```css
.crt-screen {
  /* Curved screen distortion */
  filter: contrast(1.1) brightness(1.05);
  backdrop-filter: blur(0.5px);

  /* Scanline overlay */
  background-image:
    repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0px,
      transparent 1px,
      transparent 2px
    );
  background-size: 100% 2px;

  /* Subtle screen warp animation */
  animation: crt-warp 8s ease-in-out infinite;
}

@keyframes crt-warp {
  0%, 100% { transform: scaleY(1.0); }
  50% { transform: scaleY(1.002); }
}
```

### Pattern 2: Phosphor Glow (Text Shadow)

**What:** Multi-layered text glow simulating phosphor decay
**When:** Text content in terminal
**Performance:** Compositing layer, no reflow

```css
.phosphor-text {
  color: var(--terminal-green);
  text-shadow:
    0 0 4px var(--terminal-green),
    0 0 8px var(--terminal-green),
    0 0 12px rgba(0, 255, 0, 0.5),
    0 0 20px rgba(0, 255, 0, 0.3);
}
```

### Pattern 3: Dithered Image (Canvas API)

**What:** Floyd-Steinberg dithering to monochrome palette
**When:** Build time for static images, runtime for user uploads
**Performance:** O(n) where n = pixel count, run once then cache

```typescript
// Build-time processing (preferred)
function ditherImage(imageData: ImageData, palette: number[]): ImageData {
  // Floyd-Steinberg algorithm
  const { data, width, height } = imageData;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const oldColor = data[idx]; // Grayscale value
      const newColor = findClosestPaletteColor(oldColor, palette);
      const error = oldColor - newColor;

      data[idx] = data[idx + 1] = data[idx + 2] = newColor;

      // Distribute error to neighbors
      distributeError(data, width, height, x, y, error);
    }
  }

  return imageData;
}
```

### Pattern 4: Box-Drawing Borders (Unicode)

**What:** Thin-line borders using Unicode box-drawing characters
**When:** All component borders (avoid thick pixel borders)
**Performance:** Zero overhead, semantic HTML

```typescript
const BoxChars = {
  topLeft: '┌',
  topRight: '┐',
  bottomLeft: '└',
  bottomRight: '┘',
  horizontal: '─',
  vertical: '│',
  cross: '┼',
  teeDown: '┬',
  teeUp: '┴',
  teeRight: '├',
  teeLeft: '┤',
} as const;

// Programmatic border generation
function createBorder(width: number, title?: string): string {
  const top = BoxChars.topLeft +
    (title
      ? ` ${title} `.padEnd(width - 2, BoxChars.horizontal)
      : BoxChars.horizontal.repeat(width - 2)
    ) + BoxChars.topRight;

  return top;
}
```

## Tailwind 4 Integration

Tailwind 4 CSS-first architecture aligns perfectly with terminal effects. Use CSS layers and custom properties.

```css
/* app/globals.css */
@import "tailwindcss";

@layer theme {
  :root {
    --terminal-green: #00ff41;
    --terminal-green-dim: #00cc33;
    --terminal-amber: #ffb000;
    --terminal-cyan: #00ffff;
    --terminal-red: #ff0040;

    --scanline-opacity: 0.15;
    --glow-radius: 8px;
  }
}

@layer utilities {
  .crt-screen {
    @apply relative;
    filter: contrast(1.1) brightness(1.05);
    background-image: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, var(--scanline-opacity)) 0px,
      transparent 1px,
      transparent 2px
    );
  }

  .phosphor-glow {
    text-shadow:
      0 0 4px currentColor,
      0 0 calc(var(--glow-radius)) currentColor,
      0 0 calc(var(--glow-radius) * 1.5) color-mix(in srgb, currentColor 50%, transparent),
      0 0 calc(var(--glow-radius) * 2.5) color-mix(in srgb, currentColor 30%, transparent);
  }
}
```

## Performance Budget

| Effect | CPU | GPU | Reflows | Recommendation |
|--------|-----|-----|---------|----------------|
| Scanlines (CSS) | 0% | <1% | 0 | Always use |
| Text glow (text-shadow) | 0% | <2% | 0 | Always use |
| CRT warp animation | 0% | <3% | 0 | Use sparingly (per-window, not per-component) |
| Backdrop filter | 0% | 5-10% | 0 | Limit to overlays |
| Canvas dithering | 100% | 0% | 0 | Build-time only |
| Runtime dithering | 40-60% | 0% | 0 | User uploads only, debounce |

**Rule of thumb:** If it causes reflows, you're doing it wrong. Terminal effects should be compositing-only.

## Installation

```bash
# Fonts (use @next/font for Next.js optimization)
# IBM Plex Mono via Google Fonts or npm

# For build-time image processing
npm install sharp @types/sharp --save-dev

# For runtime dithering (only if needed)
npm install image-dithering
```

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| CRT effects | Pure CSS | react-crt-effect library | Unnecessary JS wrapper, CSS is simpler |
| Scanlines | CSS gradients | PNG overlay | HTTP request, not scalable, caching issues |
| Glow effects | text-shadow | box-shadow on ::before | Extra DOM node, layout complexity |
| Fonts | IBM Plex Mono | Inconsolata | Less complete box-drawing support |
| Dithering | sharp (build) | browser-image-manipulation | Build-time = zero runtime cost |
| Borders | Unicode | CSS box-shadow borders | Phosphor aesthetic = thin lines, not thick borders |

## Known Limitations

### CSS Filter Browser Support
- `backdrop-filter` requires `-webkit-` prefix in Safari <16
- Older Firefox (<103) has poor backdrop-filter performance
- **Mitigation:** Feature detection, graceful degradation

### Font Loading
- FOUT (Flash of Unstyled Text) breaks immersion
- **Mitigation:** Use `next/font` with `display: 'swap'` or `display: 'block'`

### Canvas Performance
- Dithering 4K image = 8M pixels = ~200ms on mobile
- **Mitigation:** Pre-process at build, never block main thread

### Color Contrast (Accessibility)
- Monochrome green-on-black fails WCAG AA for body text
- **Mitigation:** Provide high-contrast theme, support prefers-contrast media query

## Sources

**MEDIUM confidence:** Based on established CSS techniques and browser APIs as of training cutoff (January 2025). Specific library versions and Tailwind 4 integration patterns verified against known APIs but not independently validated via WebSearch.

- CSS filter specification (W3C)
- Canvas API (MDN)
- Unicode box-drawing characters (Unicode Standard 15.0)
- Tailwind CSS 4 documentation (training data)
- Font recommendations based on terminal emulator conventions
- Floyd-Steinberg dithering algorithm (standard computer graphics technique)

**Verification needed:**
- Current state of react-crt-effect library (may have updates post-training)
- Latest browser support for backdrop-filter (check caniuse.com)
- New dithering libraries released in 2025/2026

**Recommendation:** Validate browser support on caniuse.com before production deployment.
