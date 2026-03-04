"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

// =============================================================================
// Input Component - Command prompt style with > prefix
// =============================================================================

export interface CypherInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prompt?: string;
  glow?: boolean;
  variant?: "command" | "bordered";
  ref?: React.Ref<HTMLInputElement>;
}

function Input({
  className,
  type,
  prompt = ">",
  glow = false,
  variant = "command",
  ref,
  ...props
}: CypherInputProps) {
  // Bordered variant - thin border, no prompt
  if (variant === "bordered") {
    return (
      <input
        type={type}
        className={cn(
          "cyphercn-normal w-full h-9 px-3 py-2 text-sm",
          "bg-transparent border border-foreground text-foreground",
          "placeholder:text-muted-foreground outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus:phosphor-border-glow",
          glow && "phosphor-border-glow",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }

  // Command variant - terminal style with > prompt
  return (
    <div className={cn("cyphercn flex items-center gap-2", glow && "phosphor-glow")}>
      <span className="text-foreground/70 select-none">{prompt}</span>
      <input
        type={type}
        className={cn(
          "flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground outline-none",
          "cyphercn-normal text-sm",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
}

// =============================================================================
// InputBordered Component - Bordered variant (explicit component)
// =============================================================================

interface InputBorderedProps extends Omit<CypherInputProps, "variant"> {}

function InputBordered({
  className,
  type,
  glow = false,
  ref,
  ...props
}: InputBorderedProps) {
  return (
    <input
      type={type}
      className={cn(
        "cyphercn-normal w-full h-9 px-3 py-2 text-sm",
        "bg-transparent border border-foreground text-foreground",
        "placeholder:text-muted-foreground outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus:phosphor-border-glow",
        glow && "phosphor-border-glow",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}

// =============================================================================
// Textarea Component - Terminal style textarea
// =============================================================================

export interface CypherTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  glow?: boolean;
  prompt?: string;
  variant?: "command" | "bordered";
  ref?: React.Ref<HTMLTextAreaElement>;
}

function CypherTextarea({
  className,
  glow = false,
  prompt = ">",
  variant = "bordered",
  ref,
  ...props
}: CypherTextareaProps) {
  // Bordered variant
  if (variant === "bordered") {
    return (
      <textarea
        className={cn(
          "cyphercn-normal w-full min-h-[80px] px-3 py-2 text-sm",
          "bg-transparent border border-foreground text-foreground",
          "placeholder:text-muted-foreground outline-none resize-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus:phosphor-border-glow",
          glow && "phosphor-border-glow",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }

  // Command variant with prompt
  return (
    <div className={cn("cyphercn relative", glow && "phosphor-glow")}>
      <span className="absolute top-2 left-0 text-foreground/70 select-none">{prompt}</span>
      <textarea
        className={cn(
          "w-full min-h-[80px] bg-transparent border border-foreground p-2 pl-6 text-foreground",
          "placeholder:text-muted-foreground outline-none resize-none",
          "cyphercn-normal text-sm",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus:phosphor-border-glow",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export { Input, InputBordered, CypherTextarea as Textarea };
