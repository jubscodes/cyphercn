import * as React from "react";
import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/cyberpunk.css";

export interface CyphercnInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prompt?: string;
  glow?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, CyphercnInputProps>(
  ({ className, type, prompt = ">", glow = false, ...props }, ref) => {
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
        <span className="terminal-cursor text-foreground/70" />
      </div>
    );
  }
);
Input.displayName = "Input";

export interface CyphercnTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  glow?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, CyphercnTextareaProps>(
  ({ className, glow = false, ...props }, ref) => {
    return (
      <div className={cn("cyphercn relative", glow && "phosphor-glow")}>
        <span className="absolute top-0 left-0 text-foreground/70 select-none">{"> "}</span>
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
);
Textarea.displayName = "Textarea";

// Bordered input variant
const InputBordered = React.forwardRef<HTMLInputElement, CyphercnInputProps>(
  ({ className, type, glow = false, ...props }, ref) => {
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
);
InputBordered.displayName = "InputBordered";

export { Input, Textarea, InputBordered };
