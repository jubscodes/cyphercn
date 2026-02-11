"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { LogEntry } from "@/components/ui/cypher/alert";
import "@/components/ui/cypher/styles/cyberpunk.css";

// =============================================================================
// TerminalLog Block - Scrollable log viewer with terminal aesthetics
// =============================================================================

export type LogLevel = "info" | "warn" | "error" | "debug";

export interface LogItem {
  id: string;
  message: string;
  level?: LogLevel;
  timestamp?: string;
}

// CSS border styles that simulate box-drawing characters
const terminalBorderStyles = {
  single: "border border-foreground", // Single line ┌──┐
  double: "border-[3px] border-double border-foreground", // Double line ╔══╗
  ascii: "border-2 border-foreground", // ASCII +--+ (thicker solid)
};

export interface TerminalLogProps extends React.HTMLAttributes<HTMLDivElement> {
  border?: "single" | "double" | "ascii";
  title?: string;
  logs: LogItem[];
  maxHeight?: string;
  autoScroll?: boolean;
  showTimestamp?: boolean;
  filterLevel?: LogLevel | "all";
  glow?: boolean;
  emptyMessage?: string;
}

export function TerminalLog({
  title = "SYSTEM LOG",
  logs,
  maxHeight = "300px",
  autoScroll = true,
  showTimestamp = true,
  filterLevel = "all",
  border = "single",
  glow = false,
  emptyMessage = "No log entries",
  className,
  ...props
}: TerminalLogProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const borderStyle = terminalBorderStyles[border || "single"];

  // Filter logs by level
  const filteredLogs = React.useMemo(() => {
    if (filterLevel === "all") return logs;
    return logs.filter((log) => log.level === filterLevel);
  }, [logs, filterLevel]);

  // Auto-scroll to bottom when new logs arrive
  React.useEffect(() => {
    if (autoScroll && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [filteredLogs, autoScroll]);

  return (
    <div
      className={cn(
        "cyphercn relative w-full",
        borderStyle,
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {/* Title */}
      {title && (
        <div className="absolute -top-[0.6em] left-3 bg-background px-1 text-xs uppercase tracking-wider text-foreground">
          {title}
        </div>
      )}

      {/* Scrollable content area */}
      <div
        ref={scrollRef}
        className="overflow-y-auto bg-background/50 px-2 py-1"
        style={{ maxHeight }}
      >
        {filteredLogs.length === 0 ? (
          <div className="py-2 text-xs text-muted-foreground cyphercn-normal">
            {emptyMessage}
          </div>
        ) : (
          <div className="space-y-0.5">
            {filteredLogs.map((log) => (
              <LogEntry
                key={log.id}
                level={log.level || "info"}
                timestamp={showTimestamp ? log.timestamp : undefined}
              >
                {log.message}
              </LogEntry>
            ))}
          </div>
        )}
      </div>

      {/* Footer with log count */}
      <div className="absolute -bottom-[0.6em] right-3 bg-background px-1 text-xs text-foreground/50">
        {filteredLogs.length} entries
      </div>
    </div>
  );
}

// =============================================================================
// SystemStatus Block - Multiple status indicators in a terminal panel
// =============================================================================

export interface StatusItem {
  id: string;
  label: string;
  status: "online" | "offline" | "warning" | "processing";
}

export interface SystemStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  border?: "single" | "double" | "ascii";
  title?: string;
  items: StatusItem[];
  glow?: boolean;
}

const statusIndicators = {
  online: { symbol: "●", class: "text-foreground" },
  offline: { symbol: "○", class: "text-foreground/30" },
  warning: { symbol: "◐", class: "text-yellow-500 animate-pulse" },
  processing: { symbol: "◌", class: "text-foreground animate-spin" },
};

export function SystemStatus({
  title = "SYSTEM STATUS",
  items,
  border = "single",
  glow = false,
  className,
  ...props
}: SystemStatusProps) {
  const borderStyle = terminalBorderStyles[border || "single"];

  return (
    <div
      className={cn(
        "cyphercn relative w-full",
        borderStyle,
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {/* Title */}
      {title && (
        <div className="absolute -top-[0.6em] left-3 bg-background px-1 text-xs uppercase tracking-wider text-foreground">
          {title}
        </div>
      )}

      {/* Status items */}
      <div className="px-2 py-1">
        {items.map((item) => {
          const indicator = statusIndicators[item.status];
          return (
            <div
              key={item.id}
              className="cyphercn flex items-center gap-2 py-0.5 text-xs"
            >
              <span className={indicator.class}>{indicator.symbol}</span>
              <span className="uppercase">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TerminalLog;
