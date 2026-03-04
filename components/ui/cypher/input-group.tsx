"use client";

import type * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  InputGroup as ShadcnInputGroup,
  InputGroupAddon as ShadcnInputGroupAddon,
  InputGroupButton as ShadcnInputGroupButton,
  InputGroupInput as ShadcnInputGroupInput,
  InputGroupText as ShadcnInputGroupText,
  InputGroupTextarea as ShadcnInputGroupTextarea,
} from "@/components/ui/input-group";

import "./styles/cyberpunk.css";

const inputGroupVariants = cva(
  "rounded-none border border-foreground shadow-none",
  {
    variants: {
      glow: {
        true: "has-[[data-slot=input-group-control]:focus-visible]:phosphor-border-glow",
        false: "",
      },
    },
    defaultVariants: {
      glow: false,
    },
  }
);

function InputGroup({
  className,
  glow = false,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupVariants>) {
  return (
    <ShadcnInputGroup
      className={cn(
        inputGroupVariants({ glow }),
        "has-[[data-slot=input-group-control]:focus-visible]:ring-0",
        className
      )}
      {...props}
    />
  );
}

function InputGroupAddon({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnInputGroupAddon>) {
  return (
    <ShadcnInputGroupAddon
      className={cn("text-foreground/60 cyphercn", className)}
      {...props}
    />
  );
}

function InputGroupButton({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnInputGroupButton>) {
  return (
    <ShadcnInputGroupButton
      className={cn("rounded-none", className)}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <ShadcnInputGroupInput
      className={cn("cyphercn-normal border-0 bg-transparent", className)}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <ShadcnInputGroupTextarea
      className={cn("cyphercn-normal border-0 bg-transparent", className)}
      {...props}
    />
  );
}

function InputGroupText({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <ShadcnInputGroupText
      className={cn("cyphercn-normal", className)}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
