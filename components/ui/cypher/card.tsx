"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

// =============================================================================
// Card Component - MS-DOS panel style with title over border
// =============================================================================

export const cardVariants = cva(
  "cyphercn relative border border-foreground bg-background p-4",
  {
    variants: {
      variant: {
        default: "",
        double: "border-2 border-double",
        glow: "phosphor-border-glow",
      },
      scanlines: {
        true: "crt-scanlines-subtle overflow-hidden",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      scanlines: false,
    },
  }
);

export interface CypherCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  glow?: boolean;
}

function Card({
  className,
  title,
  variant,
  glow = false,
  scanlines = false,
  children,
  ...props
}: CypherCardProps) {
  return (
    <div
      className={cn(
        cardVariants({ variant, scanlines }),
        glow && "phosphor-border-glow",
        className
      )}
      {...props}
    >
      {title && (
        <div className="dos-panel-title bg-background text-foreground/70 text-xs uppercase tracking-wider">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "cyphercn flex flex-col gap-1.5 pb-3 mb-3 border-b border-foreground/30",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "cyphercn text-sm font-semibold tracking-wider uppercase phosphor-glow",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("cyphercn-normal text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("cyphercn-normal text-sm", className)} {...props} />
  );
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "cyphercn flex items-center gap-2 pt-3 mt-3 border-t border-foreground/30",
        className
      )}
      {...props}
    />
  );
}

function CardAction({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("cyphercn flex items-center gap-2", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
};
