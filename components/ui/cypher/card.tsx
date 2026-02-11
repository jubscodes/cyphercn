"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

// =============================================================================
// Card Component - MS-DOS panel style with CSS or terminal box-drawing borders
// =============================================================================

export const cardVariants = cva(
  "cyphercn relative bg-background",
  {
    variants: {
      variant: {
        default: "border border-foreground p-4",
        double: "border-2 border-double border-foreground p-4",
        glow: "border border-foreground p-4 phosphor-border-glow",
        terminal: "", // Uses box-drawing characters
        terminalDouble: "", // Uses double box-drawing characters
        terminalAscii: "", // Uses ASCII characters (+, -, |)
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

// CSS border styles for terminal and terminalDouble variants
const terminalBorderStyles = {
  terminal: "border border-foreground", // Single line
  terminalDouble: "border-[3px] border-double border-foreground", // Double line
};

// Terminal-style Card with CSS borders
function TerminalCard({
  title,
  glow,
  scanlines,
  className,
  children,
  charSet,
  ...props
}: CypherCardProps & { charSet: "terminal" | "terminalDouble" }) {
  const borderStyle = terminalBorderStyles[charSet];

  return (
    <div
      className={cn(
        "cyphercn relative w-full",
        borderStyle,
        scanlines && "crt-scanlines-subtle overflow-hidden",
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {title && (
        <div className="absolute -top-[0.6em] left-3 bg-background px-1 text-xs uppercase tracking-wider text-foreground">
          {title}
        </div>
      )}
      <div className="px-3 py-2 text-sm cyphercn-normal">
        {children}
      </div>
    </div>
  );
}

// ASCII Card with +--+ characters for top/bottom, CSS borders for sides
function AsciiCard({
  title,
  glow,
  scanlines,
  className,
  children,
  ...props
}: CypherCardProps) {
  return (
    <div
      className={cn(
        "cyphercn relative w-full font-mono",
        scanlines && "crt-scanlines-subtle overflow-hidden",
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {/* Top border with + corners and - line */}
      <div className="flex w-full leading-none tracking-[0] text-foreground">
        <span className="shrink-0">+</span>
        {title ? (
          <>
            <span className="shrink-0">--</span>
            <span className="shrink-0 px-1 text-xs uppercase tracking-wider">
              {title}
            </span>
            <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-right">
              {"-".repeat(100)}
            </span>
          </>
        ) : (
          <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-right">
            {"-".repeat(100)}
          </span>
        )}
        <span className="shrink-0">+</span>
      </div>

      {/* Content with CSS side borders - margins align border with + center */}
      <div className="border-x border-foreground mx-[0.4ch] px-2 py-2 text-sm cyphercn-normal">
        {children}
      </div>

      {/* Bottom border with + corners and - line */}
      <div className="flex w-full leading-none tracking-[0] text-foreground">
        <span className="shrink-0">+</span>
        <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-right">
          {"-".repeat(100)}
        </span>
        <span className="shrink-0">+</span>
      </div>
    </div>
  );
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
  // Route to ASCII card for character-based borders
  if (variant === "terminalAscii") {
    return (
      <AsciiCard
        title={title}
        glow={glow}
        scanlines={scanlines}
        className={className}
        {...props}
      >
        {children}
      </AsciiCard>
    );
  }

  // Route to terminal-style card for CSS border variants
  if (variant === "terminal" || variant === "terminalDouble") {
    return (
      <TerminalCard
        title={title}
        glow={glow}
        scanlines={scanlines}
        className={className}
        charSet={variant}
        {...props}
      >
        {children}
      </TerminalCard>
    );
  }

  // CSS border card (default, double, glow)
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
