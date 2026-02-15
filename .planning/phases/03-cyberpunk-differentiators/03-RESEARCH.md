# Phase 3: Cyberpunk Differentiators - Research

**Researched:** 2026-02-11
**Domain:** React component development for cyberpunk/terminal aesthetic UI components
**Confidence:** HIGH

## Summary

This phase builds unique terminal/HUD components that differentiate CypherCN from standard UI libraries. Research reveals that **most requirements are already implemented** in the existing codebase. Of the 9 requirements (CYBER-01 through CYBER-09), approximately 6-7 are either fully built or partially built with minor enhancements needed.

**Existing Components:**
- Terminal Console (CYBER-01) - EXISTS in `blocks/terminal-log.tsx` as `TerminalLog`
- Log Entry (CYBER-03) - EXISTS in `alert.tsx` as `LogEntry`
- Status Indicator (CYBER-04) - EXISTS in `alert.tsx` as `Status`
- Panel (CYBER-09) - EXISTS in `card.tsx` with terminal variants
- ASCII Spinner (CYBER-08) - EXISTS in `progress.tsx` as `Spinner` and `LoadingDots`

**Components Needing Build:**
- Command Input with history navigation (CYBER-02) - Input exists, needs history feature
- Dithered Image (CYBER-05) - New component required
- System Monitor gauge (CYBER-06) - New component required
- Network Monitor gauge (CYBER-07) - New component required

The standard approach is to build React components using existing cyberpunk.css utilities, maintain accessibility with `prefers-reduced-motion`, and implement image processing with OffscreenCanvas to avoid blocking the main thread.

**Primary recommendation:** Audit existing components first, enhance command input with history navigation, build dithered image with web worker, and create gauge components using SVG with terminal styling.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 19.2.3 | Component framework | Already in use, current stable version |
| TypeScript | 5.9.3 | Type safety | Project standard |
| Tailwind CSS | 4.1.18 | Styling foundation | Project standard |
| class-variance-authority | 0.7.1 | Component variants | Already used for variant management |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| OffscreenCanvas | Browser API | Non-blocking image processing | For dithered image component (CYBER-05) |
| prefers-reduced-motion | CSS Media Query | Accessibility for animations | All animated components (CYBER-08, spinners) |
| Radix UI Primitives | 1.x | Accessible component base | If building complex interactive components |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Custom SVG gauges | recharts (already in package.json) | Recharts is heavier but more feature-rich; custom SVG is lighter and fully styleable |
| OffscreenCanvas | Synchronous canvas processing | OffscreenCanvas prevents main thread blocking but has cross-browser quirks |
| Web Workers for dithering | Client-side library | Web workers offload processing but add complexity; libraries are simpler but block main thread |

**Installation:**
```bash
# No new dependencies required - all components can be built with existing stack
# Optional: If using existing dithering library
npm install canvas-dither  # Optional, only if not building custom dithering
```

## Architecture Patterns

### Recommended Project Structure
```
components/ui/cypher/
├── input.tsx              # Enhance with command history
├── dithered-image.tsx     # NEW: Image dithering component
├── system-monitor.tsx     # NEW: CPU/memory gauge
├── network-monitor.tsx    # NEW: Network gauge
├── blocks/
│   └── terminal-log.tsx   # EXISTING: Already has TerminalLog
├── alert.tsx              # EXISTING: Already has LogEntry, Status
├── card.tsx               # EXISTING: Already has Panel variants
└── progress.tsx           # EXISTING: Already has Spinner, LoadingDots
```

### Pattern 1: Command History with Keyboard Navigation
**What:** Input component that maintains command history array and navigates with arrow keys
**When to use:** Interactive terminal/command prompt interfaces
**Example:**
```typescript
// Based on research from https://usehooks.com/useeventlistener
function CommandInput() {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentValue, setCurrentValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentValue(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentValue(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentValue('');
      }
    }
  }, [history, historyIndex]);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener('keydown', handleKeyDown);
      return () => input.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  return (
    <input ref={inputRef} value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
  );
}
```

### Pattern 2: Dithered Image with Web Worker
**What:** Canvas-based image dithering that processes in background thread
**When to use:** Converting images to retro dithered aesthetic without blocking UI
**Example:**
```typescript
// Based on research from https://developer.chrome.com/blog/offscreen-canvas
function DitheredImage({ src, algorithm = 'bayer' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Transfer canvas to worker if OffscreenCanvas supported
    if (canvas.transferControlToOffscreen) {
      const offscreen = canvas.transferControlToOffscreen();
      const worker = new Worker('/workers/dither-worker.js');
      worker.postMessage({ canvas: offscreen, src, algorithm }, [offscreen]);
    } else {
      // Fallback: process on main thread
      processImageOnMainThread(canvas, src, algorithm);
    }
  }, [src, algorithm]);

  return <canvas ref={canvasRef} className="cyphercn" />;
}
```

### Pattern 3: SVG Gauge with Terminal Styling
**What:** Circular or arc gauge using SVG with ASCII-style tick marks
**When to use:** System/network monitoring displays
**Example:**
```typescript
// Based on research from https://www.fullstack.com/labs/resources/blog/creating-an-svg-gauge-component-from-scratch
function TerminalGauge({ value, max, label }: { value: number; max: number; label: string }) {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="cyphercn flex flex-col items-center gap-2">
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor"
                strokeWidth="2" opacity="0.3" />
        {/* Progress arc */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor"
                strokeWidth="2" strokeDasharray={circumference}
                strokeDashoffset={offset} className="phosphor-glow"
                transform="rotate(-90 50 50)" />
        {/* Center value */}
        <text x="50" y="55" textAnchor="middle" className="text-xs fill-current">
          {Math.round(percentage)}%
        </text>
      </svg>
      <span className="text-xs uppercase">{label}</span>
    </div>
  );
}
```

### Pattern 4: Accessibility with Reduced Motion
**What:** Respect `prefers-reduced-motion` for all animations
**When to use:** ALL animated components
**Example:**
```typescript
// CSS approach (preferred)
.spinner-animation {
  animation: spin 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-animation {
    animation: none;
    /* Show static indicator instead */
    opacity: 0.7;
  }
}

// Or React hook approach
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
```

### Anti-Patterns to Avoid
- **Blocking main thread with image processing:** Always use OffscreenCanvas or Web Workers for dithering operations
- **Ignoring existing components:** Many requirements are already built - don't rebuild from scratch
- **Hardcoding colors:** Use existing `--phosphor-glow` CSS variables and Tailwind utilities
- **Forgetting reduced motion:** ALL animations must respect `prefers-reduced-motion: reduce`
- **Deep component prop drilling:** Use React Context or composition for command history state

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image dithering algorithms | Custom pixel manipulation | Bayer matrix from research or `canvas-dither` library | Edge cases: gamma correction, color space conversion, pattern tiling |
| Keyboard event cleanup | Manual addEventListener/removeEventListener | `useEffect` with cleanup function | Memory leaks from missing cleanup |
| Canvas performance | Synchronous canvas drawing | OffscreenCanvas API | Browser main thread blocking during image processing |
| Terminal borders | Custom ASCII drawing logic | Existing Card component terminal variants | Already supports single/double/ASCII borders |
| Log scrolling | Custom scroll implementation | Existing TerminalLog component | Already handles auto-scroll and filtering |
| Status indicators | New component | Existing Status component in alert.tsx | Already has online/offline/warning/processing states |

**Key insight:** The project already has a mature cyberpunk component foundation. New work should **extend** rather than **replace** existing components. The dithered image component is the only truly new territory.

## Common Pitfalls

### Pitfall 1: OffscreenCanvas Browser Compatibility
**What goes wrong:** Code assumes OffscreenCanvas is universally available, breaks in older browsers or Firefox edge cases
**Why it happens:** OffscreenCanvas has cross-browser inconsistencies as of 2026, especially around image decoding
**How to avoid:**
- Feature detect: `if (canvas.transferControlToOffscreen)`
- Provide fallback to main thread processing
- Test in Firefox, Chrome, and Safari
**Warning signs:** Image processing works in Chrome but fails or performs poorly in Firefox

### Pitfall 2: Command History State Loss on Unmount
**What goes wrong:** Command history resets when component re-renders or unmounts
**Why it happens:** History stored in component state without persistence
**How to avoid:**
- Store history in parent component or Context
- Consider localStorage for persistence across sessions
- Use controlled component pattern with external history prop
**Warning signs:** Users complain history disappears after navigation

### Pitfall 3: Cursor Animation Without Reduced Motion Check
**What goes wrong:** Blinking cursor causes discomfort for users with motion sensitivity
**Why it happens:** CSS animation added without `@media (prefers-reduced-motion)` guard
**How to avoid:**
```css
.cursor-blink {
  animation: blink 1s step-end infinite;
}

@media (prefers-reduced-motion: reduce) {
  .cursor-blink {
    animation: none;
    opacity: 1; /* Solid cursor instead */
  }
}
```
**Warning signs:** Accessibility audit flags animation violations

### Pitfall 4: Gauge Component Performance with Real-Time Updates
**What goes wrong:** CPU/network gauges cause re-render storms when updating every frame
**Why it happens:** Parent component passes new value prop 60 times per second
**How to avoid:**
- Throttle updates to 2-4 times per second for gauges
- Use `useMemo` to prevent SVG path recalculation
- Consider CSS transitions for smooth interpolation
**Warning signs:** Performance profiler shows gauge component rendering hundreds of times per second

### Pitfall 5: Dither Pattern Repetition Visibility
**What goes wrong:** Bayer dithering creates obvious repeating patterns on large images
**Why it happens:** Small 4x4 or 8x8 Bayer matrix tiles visibly
**How to avoid:**
- Use larger Bayer matrices (16x16 or 32x32)
- Add slight randomness to threshold values
- Consider Floyd-Steinberg for photos, ordered dithering for graphics
**Warning signs:** Users report "checkerboard" or "grid" artifacts in dithered images

## Code Examples

Verified patterns from official sources:

### Command Input with Cursor Animation
```typescript
// Source: Research from https://github.com/ines/termynal (cursor animation patterns)
function CommandInput({
  onSubmit,
  history = [],
  placeholder = "Enter command..."
}: CommandInputProps) {
  const [value, setValue] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(value);
      setValue('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setValue(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > -1) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setValue(newIndex >= 0 ? history[history.length - 1 - newIndex] : '');
      }
    }
  };

  return (
    <div className="cyphercn flex items-center gap-2">
      <span className="text-foreground/70 select-none">{'>'}</span>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={cn(
          "flex-1 bg-transparent border-0 outline-none text-foreground",
          !prefersReducedMotion && "cursor-blink"
        )}
      />
    </div>
  );
}
```

### Bayer Dithering Algorithm
```typescript
// Source: Research from https://github.com/NielsLeenheer/CanvasDither and Bayer pattern theory
const BAYER_MATRIX_4x4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5]
];

function applyBayerDither(imageData: ImageData): ImageData {
  const { data, width, height } = imageData;
  const output = new ImageData(width, height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;

      // Convert to grayscale
      const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];

      // Apply Bayer threshold
      const threshold = (BAYER_MATRIX_4x4[y % 4][x % 4] / 16) * 255;
      const value = gray > threshold ? 255 : 0;

      output.data[i] = output.data[i + 1] = output.data[i + 2] = value;
      output.data[i + 3] = data[i + 3]; // Preserve alpha
    }
  }

  return output;
}
```

### Reduced Motion Hook
```typescript
// Source: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers support addEventListener
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Synchronous canvas processing | OffscreenCanvas + Web Workers | 2020 (Chrome 69+) | Non-blocking image processing, but requires fallback for compatibility |
| Ignoring motion preferences | `prefers-reduced-motion` media query | WCAG 2.1 (2018), baseline 2020 | Required for WCAG 2.3.3 compliance |
| Manual event listener cleanup | useEffect cleanup function | React 16.8+ (2019) | Prevents memory leaks from event listeners |
| Multiple animation libraries | CSS animations + Tailwind | Tailwind v3+ (2021) | Simpler, fewer dependencies, better tree-shaking |
| External gauge libraries | Custom SVG components | 2024+ | Lighter weight, full style control for terminal aesthetic |

**Deprecated/outdated:**
- `componentWillUnmount` for cleanup: Use useEffect cleanup functions instead
- Global event listeners on `document`: Use ref-based listeners on specific elements
- Ignoring `prefers-reduced-motion`: Now required for accessibility compliance

## Open Questions

Things that couldn't be fully resolved:

1. **What should System Monitor and Network Monitor actually monitor?**
   - What we know: Requirements specify CPU/memory and bandwidth/connection displays
   - What's unclear: Real system metrics require backend/API integration, or are these mockup components with prop-based values?
   - Recommendation: Build as "display-only" components that accept `value` and `max` props. Let consuming applications provide real metrics via props.

2. **Should command history persist across sessions?**
   - What we know: Terminal apps often save command history to disk
   - What's unclear: User expectation for web-based terminal component
   - Recommendation: Make it configurable - accept optional `persistHistory` prop that enables localStorage persistence.

3. **Which dithering algorithms to support?**
   - What we know: Requirements mention Bayer, halftone, and noise patterns
   - What's unclear: Are all three required or just options?
   - Recommendation: Start with Bayer (simplest, most authentic retro look), add others as `algorithm` prop variants if needed.

4. **How to handle non-square images in dithering?**
   - What we know: Bayer matrix tiles cleanly, images can be any size
   - What's unclear: Should component resize images to prevent distortion, or let consumer handle sizing?
   - Recommendation: Accept images as-is, apply dithering to actual dimensions. Let CSS handle display sizing.

## Sources

### Primary (HIGH confidence)
- MDN Web Docs: `prefers-reduced-motion` - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- Chrome Developers: OffscreenCanvas - https://developer.chrome.com/blog/offscreen-canvas
- Existing codebase analysis: `components/ui/cypher/` components

### Secondary (MEDIUM confidence)
- Bayer Dither React Component - https://smw.ai/blog/bayer-dither-crt-mask-react
- Canvas Dither GitHub - https://github.com/NielsLeenheer/CanvasDither
- Termynal (terminal animations) - https://github.com/ines/termynal
- Building Realistic Terminal UI in React - https://www.dantech.academy/blog/terminal-git/building-realistic-terminal-ui-react
- React Event Listener Hooks - https://usehooks.com/useeventlistener
- SVG Gauge Component Guide - https://www.fullstack.com/labs/resources/blog/creating-an-svg-gauge-component-from-scratch

### Tertiary (LOW confidence)
- React Arrow Key Navigation Hook - https://github.com/dealroom/react-arrow-key-navigation-hook
- Canvas Dither npm package - https://www.npmjs.com/package/canvas-dither
- React Gauge Component - https://github.com/antoniolago/react-gauge-component

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Project dependencies already defined, no new libraries needed
- Architecture: HIGH - Existing component patterns are well-established in codebase
- Pitfalls: MEDIUM - OffscreenCanvas quirks are documented but evolving; real-world testing needed
- Existing components: HIGH - Direct codebase inspection confirms 6-7 of 9 requirements already implemented

**Research date:** 2026-02-11
**Valid until:** 2026-03-11 (30 days - stable domain, React/CSS patterns mature)
