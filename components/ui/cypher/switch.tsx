"use client";

import type * as React from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-5 w-9 shrink-0 items-center border border-foreground dark:border-ring shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-primary data-[state=checked]:bg-primary-foreground dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground pointer-events-none block size-4 border-foreground dark:border-ring ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
