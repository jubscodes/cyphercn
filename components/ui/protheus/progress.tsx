import * as React from "react";
import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/retro.css";

export interface CyphercnProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  width?: number;
  showPercentage?: boolean;
  glow?: boolean;
  variant?: "default" | "ascii" | "blocks" | "dots";
}

function Progress({
  value = 0,
  max = 100,
  width = 20,
  showPercentage = true,
  glow = false,
  variant = "default",
  className,
  ...props
}: CyphercnProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const filled = Math.round((percentage / 100) * width);
  const empty = width - filled;

  const chars = {
    default: { filled: "█", empty: "░" },
    ascii: { filled: "#", empty: "-" },
    blocks: { filled: "■", empty: "□" },
    dots: { filled: "●", empty: "○" },
  };

  const { filled: filledChar, empty: emptyChar } = chars[variant];

  return (
    <div
      className={cn(
        "cyphercn flex items-center gap-2 text-sm",
        glow && "phosphor-glow",
        className
      )}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <span className="text-foreground/70">[</span>
      <span className="text-foreground">
        {filledChar.repeat(filled)}
        <span className="text-foreground/30">{emptyChar.repeat(empty)}</span>
      </span>
      <span className="text-foreground/70">]</span>
      {showPercentage && (
        <span className="text-foreground/70 min-w-[4ch] text-right tabular-nums">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}

// Thin bar variant (non-ASCII)
export interface CyphercnBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  glow?: boolean;
  label?: string;
}

function ProgressBar({
  value = 0,
  max = 100,
  glow = false,
  label,
  className,
  ...props
}: CyphercnBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={cn("cyphercn space-y-1", className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      {label && (
        <div className="flex justify-between text-xs">
          <span>{label}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        className={cn(
          "h-2 border border-foreground bg-transparent overflow-hidden",
          glow && "phosphor-border-glow"
        )}
      >
        <div
          className="h-full bg-foreground transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Loading spinner (ASCII)
export interface CyphercnSpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  glow?: boolean;
}

function Spinner({ glow = false, className, ...props }: CyphercnSpinnerProps) {
  const [frame, setFrame] = React.useState(0);
  const frames = ["◐", "◓", "◑", "◒"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % frames.length);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={cn("cyphercn inline-block", glow && "phosphor-glow", className)}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {frames[frame]}
    </span>
  );
}

// Alternative loading states
function LoadingDots({ glow = false, className, ...props }: CyphercnSpinnerProps) {
  const [dots, setDots] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d + 1) % 4);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={cn("cyphercn inline-block min-w-[3ch]", glow && "phosphor-glow", className)}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {".".repeat(dots)}
    </span>
  );
}

export { Progress, ProgressBar, Spinner, LoadingDots };
