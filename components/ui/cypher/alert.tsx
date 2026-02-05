"use client";

import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

// =============================================================================
// Alert Component - MS-DOS terminal style with [PREFIX] indicators
// =============================================================================

export const alertVariants = cva(
  "cyphercn border border-foreground p-3 text-sm",
  {
    variants: {
      variant: {
        default: "",
        info: "",
        success: "border-foreground text-foreground",
        warning: "border-yellow-500 text-yellow-500",
        error: "border-red-500 text-red-500",
        destructive: "border-red-500 text-red-500",
      },
      glow: {
        true: "phosphor-border-glow",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      glow: false,
    },
  }
);

const variantPrefixes = {
  default: "[INFO]",
  info: "[INFO]",
  success: "[OK]",
  warning: "[WARN]",
  error: "[ERROR]",
  destructive: "[ERROR]",
};

export interface CypherAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

function Alert({
  variant = "default",
  title,
  glow = false,
  className,
  children,
  ...props
}: CypherAlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant, glow }), className)}
      {...props}
    >
      <div className="flex items-start gap-2">
        <span className="font-bold shrink-0">
          {variantPrefixes[variant || "default"]}
        </span>
        <div className="flex-1 cyphercn-normal">
          {title && <div className="font-semibold mb-1 uppercase">{title}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}

function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn("cyphercn font-semibold tracking-wider uppercase mb-1", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("cyphercn-normal text-sm", className)}
      {...props}
    />
  );
}

// =============================================================================
// LogEntry Component - Transmission log style
// =============================================================================

export interface CypherLogEntryProps extends React.HTMLAttributes<HTMLDivElement> {
  timestamp?: string;
  level?: "info" | "warn" | "error" | "debug";
  glow?: boolean;
}

const levelColors = {
  info: "text-foreground",
  warn: "text-yellow-500",
  error: "text-red-500",
  debug: "text-foreground/50",
};

const levelLabels = {
  info: "INFO",
  warn: "WARN",
  error: "ERR!",
  debug: "DBUG",
};

function LogEntry({
  timestamp,
  level = "info",
  glow = false,
  className,
  children,
  ...props
}: CypherLogEntryProps) {
  return (
    <div
      className={cn(
        "cyphercn-normal text-xs flex items-start gap-2",
        levelColors[level],
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {timestamp && (
        <span className="text-foreground/50 shrink-0">[{timestamp}]</span>
      )}
      <span className="shrink-0">[{levelLabels[level]}]</span>
      <span className="flex-1">{children}</span>
    </div>
  );
}

// =============================================================================
// Status Component - System status indicator
// =============================================================================

export interface CypherStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "online" | "offline" | "warning" | "processing";
  label?: string;
  glow?: boolean;
}

const statusIndicators = {
  online: { symbol: "●", class: "text-foreground" },
  offline: { symbol: "○", class: "text-foreground/30" },
  warning: { symbol: "◐", class: "text-yellow-500 animate-pulse" },
  processing: { symbol: "◌", class: "text-foreground animate-spin" },
};

function Status({
  status,
  label,
  glow = false,
  className,
  ...props
}: CypherStatusProps) {
  const { symbol, class: statusClass } = statusIndicators[status];

  return (
    <div
      className={cn(
        "cyphercn flex items-center gap-2 text-sm",
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      <span className={statusClass}>{symbol}</span>
      {label && <span className="uppercase">{label}</span>}
    </div>
  );
}

export { Alert, AlertTitle, AlertDescription, LogEntry, Status };
