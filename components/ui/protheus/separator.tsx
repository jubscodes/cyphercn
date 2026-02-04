import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/retro.css";

export interface CyphercnSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "line" | "double" | "dashed" | "ascii" | "dots";
  label?: string;
  glow?: boolean;
}

function Separator({
  orientation = "horizontal",
  variant = "line",
  label,
  glow = false,
  className,
  ...props
}: CyphercnSeparatorProps) {
  const isHorizontal = orientation === "horizontal";

  // ASCII patterns for horizontal separators
  const patterns = {
    line: "─",
    double: "═",
    dashed: "╌",
    ascii: "-",
    dots: "·",
  };

  if (!isHorizontal) {
    const verticalPatterns = {
      line: "│",
      double: "║",
      dashed: "╎",
      ascii: "|",
      dots: ":",
    };

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
          {patterns[variant].repeat(50)}
        </span>
        <span className="shrink-0 uppercase tracking-wider">{label}</span>
        <span className="flex-1 overflow-hidden whitespace-nowrap">
          {patterns[variant].repeat(50)}
        </span>
      </div>
    );
  }

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
      {patterns[variant].repeat(100)}
    </div>
  );
}

// Simple 1px line separator (thin)
function Line({
  orientation = "horizontal",
  glow = false,
  className,
  ...props
}: Omit<CyphercnSeparatorProps, "variant" | "label">) {
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
