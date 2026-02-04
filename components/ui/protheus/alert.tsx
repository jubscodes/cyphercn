import * as React from "react";
import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/retro.css";

export interface CyphercnAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "warning" | "error" | "success";
  title?: string;
  glow?: boolean;
}

const variantStyles = {
  default: "",
  warning: "border-yellow-500 text-yellow-500",
  error: "border-red-500 text-red-500",
  success: "text-foreground",
};

const variantPrefixes = {
  default: "[INFO]",
  warning: "[WARN]",
  error: "[ERROR]",
  success: "[OK]",
};

function Alert({
  variant = "default",
  title,
  glow = false,
  className,
  children,
  ...props
}: CyphercnAlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "cyphercn border border-foreground p-3 text-sm",
        variantStyles[variant],
        glow && "phosphor-border-glow",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-2">
        <span className="font-bold shrink-0">{variantPrefixes[variant]}</span>
        <div className="flex-1 cyphercn-normal">
          {title && <div className="font-semibold mb-1">{title}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}

// System log style alert
export interface CyphercnLogProps extends React.HTMLAttributes<HTMLDivElement> {
  timestamp?: string;
  level?: "info" | "warn" | "error" | "debug";
  glow?: boolean;
}

function LogEntry({
  timestamp,
  level = "info",
  glow = false,
  className,
  children,
  ...props
}: CyphercnLogProps) {
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
      {timestamp && <span className="text-foreground/50 shrink-0">[{timestamp}]</span>}
      <span className="shrink-0">[{levelLabels[level]}]</span>
      <span className="flex-1">{children}</span>
    </div>
  );
}

// Status line component
export interface CyphercnStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "online" | "offline" | "warning" | "processing";
  label?: string;
  glow?: boolean;
}

function Status({
  status,
  label,
  glow = false,
  className,
  ...props
}: CyphercnStatusProps) {
  const statusIndicators = {
    online: { symbol: "●", class: "text-foreground" },
    offline: { symbol: "○", class: "text-foreground/30" },
    warning: { symbol: "◐", class: "text-yellow-500 animate-pulse" },
    processing: { symbol: "◌", class: "text-foreground animate-spin" },
  };

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

export { Alert, LogEntry, Status };
