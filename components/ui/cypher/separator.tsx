"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

// =============================================================================
// Separator Component - ASCII character variants
// =============================================================================

export interface CypherSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "line" | "double" | "dashed" | "ascii" | "dots" | "thin";
  label?: string;
  glow?: boolean;
}

const horizontalPatterns = {
  line: "─",
  double: "═",
  dashed: "╌",
  ascii: "-",
  dots: "·",
  thin: "", // Uses CSS line instead
};

const verticalPatterns = {
  line: "│",
  double: "║",
  dashed: "╎",
  ascii: "|",
  dots: ":",
  thin: "",
};

function Separator({
  orientation = "horizontal",
  variant = "line",
  label,
  glow = false,
  className,
  ...props
}: CypherSeparatorProps) {
  const isHorizontal = orientation === "horizontal";

  // Thin variant uses CSS line
  if (variant === "thin") {
    return (
      <div
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "bg-foreground",
          isHorizontal ? "h-px w-full" : "w-px h-full",
          glow && "shadow-[0_0_2px_currentColor]",
          className
        )}
        {...props}
      />
    );
  }

  // Vertical separator
  if (!isHorizontal) {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "cyphercn inline-flex h-full text-foreground/50",
          glow && "phosphor-glow",
          className
        )}
        {...props}
      >
        {verticalPatterns[variant]}
      </div>
    );
  }

  // Horizontal separator with optional label
  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn(
          "cyphercn flex items-center gap-2 text-foreground/50 text-xs",
          glow && "phosphor-glow",
          className
        )}
        {...props}
      >
        <span className="flex-1 overflow-hidden whitespace-nowrap">
          {horizontalPatterns[variant].repeat(50)}
        </span>
        <span className="shrink-0 uppercase tracking-wider">{label}</span>
        <span className="flex-1 overflow-hidden whitespace-nowrap">
          {horizontalPatterns[variant].repeat(50)}
        </span>
      </div>
    );
  }

  // Plain horizontal separator
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        "cyphercn w-full text-foreground/50 overflow-hidden whitespace-nowrap",
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {horizontalPatterns[variant].repeat(100)}
    </div>
  );
}

// =============================================================================
// Line Component - Simple 1px line separator
// =============================================================================

export interface CypherLineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  glow?: boolean;
}

function Line({
  orientation = "horizontal",
  glow = false,
  className,
  ...props
}: CypherLineProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "bg-foreground",
        isHorizontal ? "h-px w-full" : "w-px h-full",
        glow && "shadow-[0_0_2px_currentColor]",
        className
      )}
      {...props}
    />
  );
}

export { Separator, Line };
