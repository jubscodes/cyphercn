"use client";

import type * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

export interface CypherSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ref?: React.Ref<React.ComponentRef<typeof SliderPrimitive.Root>>;
}

function Slider({ className, ref, ...props }: CypherSliderProps) {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center cyphercn",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-none bg-secondary border border-foreground dark:border-ring">
        <SliderPrimitive.Range className="absolute h-full bg-foreground dark:bg-ring" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-4 rounded-none border border-foreground dark:border-ring bg-foreground dark:bg-ring ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
}

export { Slider };
