import type * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Button as ShadcnButton } from "@/components/ui/button";

import "./styles/cyberpunk.css";

export const buttonVariants = cva("", {
  variants: {
    font: {
      normal: "cyphercn-normal",
      cyphercn: "cyphercn",
    },
    variant: {
      default: "bg-foreground text-background hover:bg-foreground/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-foreground bg-transparent hover:bg-foreground/10",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-foreground/10",
      link: "text-foreground underline-offset-4 hover:underline",
      terminal: "bg-transparent border border-foreground hover:bg-foreground/10",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-10 px-6",
      icon: "size-9",
    },
    glow: {
      true: "phosphor-border-glow",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    font: "cyphercn",
    glow: false,
  },
});

export interface CyphercnButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ children, asChild, ...props }: CyphercnButtonProps) {
  const { variant, size, className, font, glow } = props;

  // Terminal variant wraps text in brackets [text]
  const isTerminal = variant === "terminal";

  return (
    <ShadcnButton
      {...props}
      className={cn(
        "rounded-none transition-all duration-150",
        "active:translate-y-px",
        buttonVariants({ variant, size, font, glow }),
        className
      )}
      size={size}
      variant={variant === "terminal" ? "outline" : variant}
      asChild={asChild}
    >
      {isTerminal ? (
        <span className="inline-flex items-center gap-1.5">
          <span className="opacity-60">[</span>
          {children}
          <span className="opacity-60">]</span>
        </span>
      ) : (
        children
      )}
    </ShadcnButton>
  );
}

export { Button };
