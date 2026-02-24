"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Separator } from "./separator";

export interface CypherSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Section with double-line separator and title. Used for grouping
 * content on themes and showcase pages with consistent terminal styling.
 */
export function Section({ title, children, className }: CypherSectionProps) {
  return (
    <section
      className={cn(
        "w-full min-w-0 space-y-4 overflow-hidden sm:space-y-6",
        className
      )}
    >
      <div className="flex w-full min-w-0 items-center gap-2 overflow-hidden sm:gap-3">
        <div className="min-w-0 flex-1 overflow-hidden">
          <Separator variant="double" />
        </div>
        <h2 className="cyphercn min-w-0 shrink overflow-hidden truncate text-foreground/70 text-xs uppercase tracking-widest sm:text-sm">
          {title}
        </h2>
        <div className="min-w-0 flex-1 overflow-hidden">
          <Separator variant="double" />
        </div>
      </div>
      {children}
    </section>
  );
}
