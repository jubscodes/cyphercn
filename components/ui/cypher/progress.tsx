"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

// =============================================================================
// Progress Component - ASCII character variants
// =============================================================================

export interface CypherProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  width?: number;
  showPercentage?: boolean;
  glow?: boolean;
  variant?: "default" | "ascii" | "blocks" | "dots" | "bar";
  label?: string;
  progressBg?: string; // Custom fill color class (e.g., "bg-red-500")
}

const progressChars = {
  default: { filled: "█", empty: "░" },
  ascii: { filled: "#", empty: "-" },
  blocks: { filled: "■", empty: "□" },
  dots: { filled: "●", empty: "○" },
};

function Progress({
  value = 0,
  max = 100,
  width = 20,
  showPercentage = true,
  glow = false,
  variant = "default",
  label,
  progressBg,
  className,
  ...props
}: CypherProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const filled = Math.round((percentage / 100) * width);
  const empty = width - filled;

  // Bar variant uses thin CSS bar instead of ASCII
  if (variant === "bar") {
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
            className={cn("h-full transition-all duration-300", progressBg || "bg-foreground")}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }

  const { filled: filledChar, empty: emptyChar } = progressChars[variant] || progressChars.default;

  return (
    <div
      className={cn(
        "cyphercn flex items-center gap-2 text-sm min-w-0",
        glow && "phosphor-glow",
        className
      )}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      {label && <span className="text-foreground/70 shrink-0">{label}</span>}
      <span className="text-foreground/70 shrink-0">[</span>
      <span className="text-foreground min-w-0 overflow-hidden">
        {filledChar.repeat(filled)}
        <span className="text-foreground/30">{emptyChar.repeat(empty)}</span>
      </span>
      <span className="text-foreground/70 shrink-0">]</span>
      {showPercentage && (
        <span className="text-foreground/70 min-w-[4ch] shrink-0 text-right tabular-nums">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}

// =============================================================================
// ProgressBar Component - Thin bar variant with label
// =============================================================================

export interface CypherProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  glow?: boolean;
  label?: string;
  progressBg?: string;
}

function ProgressBar({
  value = 0,
  max = 100,
  glow = false,
  label,
  progressBg,
  className,
  ...props
}: CypherProgressBarProps) {
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
          className={cn("h-full transition-all duration-300", progressBg || "bg-foreground")}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// =============================================================================
// Spinner Component - ASCII loading spinner
// =============================================================================

export interface CypherSpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  glow?: boolean;
}

function Spinner({ glow = false, className, ...props }: CypherSpinnerProps) {
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

// =============================================================================
// LoadingDots Component - Animated dots
// =============================================================================

function LoadingDots({ glow = false, className, ...props }: CypherSpinnerProps) {
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
