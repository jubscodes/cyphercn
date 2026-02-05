"use client";

import type * as React from "react";

import type * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Label as ShadcnLabel } from "@/components/ui/label";

import "./styles/cyberpunk.css";

export const inputVariants = cva("", {
  variants: {
    font: {
      normal: "",
      cyphercn: "cyphercn",
    },
  },
  defaultVariants: {
    font: "cyphercn",
  },
});

interface BitLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function Label({ className, font, ...props }: BitLabelProps) {
  return (
    <ShadcnLabel
      className={cn(className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal")}
      {...props}
    />
  );
}

export { Label };
