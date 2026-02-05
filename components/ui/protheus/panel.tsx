import * as React from "react";
import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/cyberpunk.css";

export interface CyphercnPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "single" | "double" | "ascii";
  glow?: boolean;
  scanlines?: boolean;
}

/**
 * DOS-style panel with box-drawing characters
 *
 * Single border:
 * ┌──────────────────┐
 * │ TITLE            │
 * ├──────────────────┤
 * │ Content          │
 * └──────────────────┘
 *
 * Double border:
 * ╔══════════════════╗
 * ║ TITLE            ║
 * ╠══════════════════╣
 * ║ Content          ║
 * ╚══════════════════╝
 */

function Panel({
  title,
  variant = "single",
  glow = false,
  scanlines = false,
  className,
  children,
  ...props
}: CyphercnPanelProps) {
  const chars = {
    single: {
      tl: "┌", tr: "┐", bl: "└", br: "┘",
      h: "─", v: "│", lt: "├", rt: "┤",
    },
    double: {
      tl: "╔", tr: "╗", bl: "╚", br: "╝",
      h: "═", v: "║", lt: "╠", rt: "╣",
    },
    ascii: {
      tl: "+", tr: "+", bl: "+", br: "+",
      h: "-", v: "|", lt: "+", rt: "+",
    },
  };

  const c = chars[variant];

  return (
    <div
      className={cn(
        "cyphercn relative",
        scanlines && "crt-scanlines-subtle overflow-hidden",
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {/* Top border with optional title */}
      <div className="flex text-foreground whitespace-nowrap overflow-hidden">
        <span>{c.tl}</span>
        {title ? (
          <>
            <span>{c.h.repeat(2)}</span>
            <span className="px-1 uppercase tracking-wider text-xs">{title}</span>
            <span className="flex-1 overflow-hidden">{c.h.repeat(100)}</span>
          </>
        ) : (
          <span className="flex-1 overflow-hidden">{c.h.repeat(100)}</span>
        )}
        <span>{c.tr}</span>
      </div>

      {/* Content area */}
      <div className="flex">
        <span className="text-foreground">{c.v}</span>
        <div className="flex-1 px-2 py-1 cyphercn-normal text-sm min-h-[2em]">
          {children}
        </div>
        <span className="text-foreground">{c.v}</span>
      </div>

      {/* Bottom border */}
      <div className="flex text-foreground whitespace-nowrap overflow-hidden">
        <span>{c.bl}</span>
        <span className="flex-1 overflow-hidden">{c.h.repeat(100)}</span>
        <span>{c.br}</span>
      </div>
    </div>
  );
}

// Panel with header row (like DOS window with title bar)
export interface PanelWithHeaderProps extends CyphercnPanelProps {
  headerContent?: React.ReactNode;
}

function PanelWithHeader({
  title,
  headerContent,
  variant = "single",
  glow = false,
  scanlines = false,
  className,
  children,
  ...props
}: PanelWithHeaderProps) {
  const chars = {
    single: {
      tl: "┌", tr: "┐", bl: "└", br: "┘",
      h: "─", v: "│", lt: "├", rt: "┤",
    },
    double: {
      tl: "╔", tr: "╗", bl: "╚", br: "╝",
      h: "═", v: "║", lt: "╠", rt: "╣",
    },
    ascii: {
      tl: "+", tr: "+", bl: "+", br: "+",
      h: "-", v: "|", lt: "+", rt: "+",
    },
  };

  const c = chars[variant];

  return (
    <div
      className={cn(
        "cyphercn relative",
        scanlines && "crt-scanlines-subtle overflow-hidden",
        glow && "phosphor-glow",
        className
      )}
      {...props}
    >
      {/* Top border */}
      <div className="flex text-foreground whitespace-nowrap overflow-hidden">
        <span>{c.tl}</span>
        <span className="flex-1 overflow-hidden">{c.h.repeat(100)}</span>
        <span>{c.tr}</span>
      </div>

      {/* Title bar */}
      <div className="flex">
        <span className="text-foreground">{c.v}</span>
        <div className="flex-1 px-2 flex items-center justify-between bg-foreground/10">
          <span className="uppercase tracking-wider text-xs font-semibold">{title}</span>
          {headerContent}
        </div>
        <span className="text-foreground">{c.v}</span>
      </div>

      {/* Separator */}
      <div className="flex text-foreground whitespace-nowrap overflow-hidden">
        <span>{c.lt}</span>
        <span className="flex-1 overflow-hidden">{c.h.repeat(100)}</span>
        <span>{c.rt}</span>
      </div>

      {/* Content area */}
      <div className="flex">
        <span className="text-foreground">{c.v}</span>
        <div className="flex-1 px-2 py-2 cyphercn-normal text-sm">
          {children}
        </div>
        <span className="text-foreground">{c.v}</span>
      </div>

      {/* Bottom border */}
      <div className="flex text-foreground whitespace-nowrap overflow-hidden">
        <span>{c.bl}</span>
        <span className="flex-1 overflow-hidden">{c.h.repeat(100)}</span>
        <span>{c.br}</span>
      </div>
    </div>
  );
}

export { Panel, PanelWithHeader };
