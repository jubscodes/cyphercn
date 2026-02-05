import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/cyberpunk.css";

export const badgeVariants = cva(
  "cyphercn inline-flex items-center text-xs uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "border border-foreground px-2 py-0.5",
        outline: "border border-foreground/50 px-2 py-0.5 text-foreground/70",
        filled: "bg-foreground text-background px-2 py-0.5",
        bracket: "before:content-['['] after:content-[']'] px-1",
        tag: "before:content-['<'] after:content-['>'] px-0.5 text-foreground/70",
        dot: "gap-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CyphercnBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  glow?: boolean;
  status?: "active" | "inactive" | "warning";
}

function Badge({
  className,
  variant,
  glow = false,
  status,
  children,
  ...props
}: CyphercnBadgeProps) {
  const statusColors = {
    active: "text-foreground",
    inactive: "text-foreground/30",
    warning: "text-yellow-500",
  };

  return (
    <span
      className={cn(
        badgeVariants({ variant }),
        glow && "phosphor-glow",
        status && statusColors[status],
        className
      )}
      {...props}
    >
      {variant === "dot" && (
        <span
          className={cn(
            "inline-block w-1.5 h-1.5 rounded-full",
            status === "active" && "bg-foreground",
            status === "inactive" && "bg-foreground/30",
            status === "warning" && "bg-yellow-500 animate-pulse",
            !status && "bg-foreground"
          )}
        />
      )}
      {children}
    </span>
  );
}

export { Badge };
