"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

// =============================================================================
// Badge Component - MS-DOS terminal style with multiple variants
// =============================================================================

export const badgeVariants = cva(
  "cyphercn inline-flex items-center text-xs uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "border border-foreground px-2 py-0.5",
        outline: "border border-foreground/50 px-2 py-0.5 text-foreground/70",
        filled: "bg-foreground text-background px-2 py-0.5",
        secondary: "border border-secondary bg-secondary/20 px-2 py-0.5",
        destructive: "border border-red-500 text-red-500 px-2 py-0.5",
        // Terminal-style variants
        bracket: "before:content-['['] after:content-[']'] px-1",
        tag: "before:content-['<'] after:content-['>'] px-0.5 text-foreground/70",
        dot: "gap-1.5",
      },
      glow: {
        true: "phosphor-glow",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      glow: false,
    },
  }
);

export interface CypherBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  status?: "active" | "inactive" | "warning" | "error";
}

const statusColors = {
  active: "text-foreground",
  inactive: "text-foreground/30",
  warning: "text-yellow-500",
  error: "text-red-500",
};

const statusDotColors = {
  active: "bg-foreground",
  inactive: "bg-foreground/30",
  warning: "bg-yellow-500 animate-pulse",
  error: "bg-red-500",
};

function Badge({
  className,
  variant,
  glow = false,
  status,
  children,
  ...props
}: CypherBadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({ variant, glow }),
        status && statusColors[status],
        className
      )}
      {...props}
    >
      {variant === "dot" && (
        <span
          className={cn(
            "inline-block w-1.5 h-1.5 rounded-full",
            status ? statusDotColors[status] : "bg-foreground"
          )}
        />
      )}
      {children}
    </span>
  );
}

export { Badge };
