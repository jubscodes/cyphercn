"use client";

import type * as React from "react";

import type * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Toggle as ShadcnToggle } from "@/components/ui/toggle";

import "./styles/cyberpunk.css";

const toggleVariants = cva("", {
  variants: {
    font: {
      normal: "",
      cyphercn: "cyphercn",
    },
    variant: {
      default: "bg-transparent",
      outline:
        "bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 px-2 min-w-9",
      sm: "h-8 px-1.5 min-w-8",
      lg: "h-10 px-2.5 min-w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    font: "cyphercn",
    size: "default",
  },
});

export interface CypherToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ children, font, ...props }: CypherToggleProps) {
  const { variant, className } = props;

  return (
    <ShadcnToggle
      {...props}
      className={cn(
        "rounded-none active:translate-y-1 transition-transform relative active:translate-x-1",
        "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        variant === "outline" && "border border-foreground dark:border-ring",
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        className
      )}
    >
      {children}
    </ShadcnToggle>
  );
}

export { Toggle, toggleVariants };
