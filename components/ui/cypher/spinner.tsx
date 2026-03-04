import type * as React from "react";

import { cn } from "@/lib/utils";

interface CommonSpinnerProps {
  className?: string;
  variant?: "classic" | "diamond";
  ref?: React.Ref<SVGSVGElement>;
}

type SpinnerProps = CommonSpinnerProps &
  (
    | (React.ComponentProps<"svg"> & { variant?: "classic" })
    | (React.ComponentProps<"svg"> & { variant: "diamond" })
  );

function Spinner({ className, variant = "classic", ref, ...props }: SpinnerProps) {
  return (
    <>
      {variant === "classic" && (
        <svg
          ref={ref}
          width="50"
          height="50"
          viewBox="0 0 256 256"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="0.25"
          className={cn("animate-spin size-5", className)}
          role="status"
          aria-label="Loading"
          {...(props as React.ComponentProps<"svg">)}
        >
          <rect x="200" y="80" width="14" height="14" rx="1" />
          <rect x="200" y="96" width="14" height="14" rx="1" />
          <rect x="184" y="96" width="14" height="14" rx="1" />
          <rect x="184" y="80" width="14" height="14" rx="1" />
          <rect x="200" y="64" width="14" height="14" rx="1" />
          <rect x="168" y="96" width="14" height="14" rx="1" />
          <rect x="168" y="64" width="14" height="14" rx="1" />
          <rect x="152" y="48" width="14" height="14" rx="1" />
          <rect x="136" y="48" width="14" height="14" rx="1" />
          <rect x="120" y="48" width="14" height="14" rx="1" />
          <rect x="56" y="64" width="14" height="14" rx="1" />
          <rect x="72" y="64" width="14" height="14" rx="1" />
          <rect x="88" y="48" width="14" height="14" rx="1" />
          <rect x="104" y="48" width="14" height="14" rx="1" />
          <rect x="56" y="80" width="14" height="14" rx="1" />
          <rect x="40" y="80" width="14" height="14" rx="1" />
          <rect x="40" y="96" width="14" height="14" rx="1" />
          <rect x="40" y="112" width="14" height="14" rx="1" />
          <rect x="72" y="144" width="14" height="14" rx="1" />
          <rect x="40" y="160" width="14" height="14" rx="1" />
          <rect x="104" y="192" width="14" height="14" rx="1" />
          <rect x="88" y="192" width="14" height="14" rx="1" />
          <rect x="40" y="176" width="14" height="14" rx="1" />
          <rect x="56" y="160" width="14" height="14" rx="1" />
          <rect x="56" y="144" width="14" height="14" rx="1" />
          <rect x="40" y="144" width="14" height="14" rx="1" />
          <rect x="120" y="192" width="14" height="14" rx="1" />
          <rect x="136" y="192" width="14" height="14" rx="1" />
          <rect x="152" y="192" width="14" height="14" rx="1" />
          <rect x="168" y="192" width="14" height="14" rx="1" />
          <rect x="72" y="48" width="14" height="14" rx="1" />
          <rect x="72" y="176" width="14" height="14" rx="1" />
          <rect x="168" y="176" width="14" height="14" rx="1" />
          <rect x="184" y="176" width="14" height="14" rx="1" />
          <rect x="184" y="160" width="14" height="14" rx="1" />
          <rect x="200" y="160" width="14" height="14" rx="1" />
          <rect x="200" y="144" width="14" height="14" rx="1" />
          <rect x="200" y="128" width="14" height="14" rx="1" />
        </svg>
      )}

      {variant === "diamond" && (
        <svg
          ref={ref}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn("size-4", className)}
          role="status"
          aria-label="Loading"
          {...(props as React.ComponentProps<"svg">)}
        >
          {/* Top */}
          <rect className="glyph-1" x="8" y="0" width="4" height="4" />
          {/* Top Right */}
          <rect className="glyph-2" x="12" y="4" width="4" height="4" />
          {/* Right */}
          <rect className="glyph-3" x="16" y="8" width="4" height="4" />
          {/* Bottom Right */}
          <rect className="glyph-4" x="12" y="12" width="4" height="4" />
          {/* Bottom */}
          <rect className="glyph-5" x="8" y="16" width="4" height="4" />
          {/* Bottom Left */}
          <rect className="glyph-6" x="4" y="12" width="4" height="4" />
          {/* Left */}
          <rect className="glyph-7" x="0" y="8" width="4" height="4" />
          {/* Top Left */}
          <rect className="glyph-8" x="4" y="4" width="4" height="4" />
        </svg>
      )}
    </>
  );
}

export { Spinner };
