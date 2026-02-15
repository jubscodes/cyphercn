import type * as React from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

export const avatarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      cyphercn: "cyphercn",
    },
    variant: {
      default: "",
      cyphercn: "",
      framed: "",
    },
  },
  defaultVariants: {
    font: "cyphercn",
    variant: "framed",
  },
});

export interface BitAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  font?: "normal" | "cyphercn";
  variant?: "default" | "cyphercn" | "framed";
  ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Root>>;
}

function Avatar({
  className = "",
  font,
  variant = "framed",
  ref,
  ...props
}: BitAvatarProps) {
  const isFramed = variant === "framed";

  return (
    <div className={cn("relative size-max", className)}>
      {/* Double border frame (only show if framed variant) */}
      {isFramed && (
        <div
          className="absolute inset-0 pointer-events-none border-2 border-double border-foreground dark:border-ring rounded-full"
          style={{ zIndex: 10 }}
        />
      )}

      <AvatarPrimitive.Root
        ref={ref}
        data-slot="avatar"
        className={cn(
          "relative flex size-10 shrink-0 overflow-hidden text-xs",
          !isFramed && "rounded-none",
          isFramed && "rounded-full",
          font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
          variant === "cyphercn" && "image-rendering-pixelated",
          className
        )}
        {...props}
      />

      {/* Thin border styling (default and cyphercn variants) */}
      {!isFramed && (
        <>
          <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute top-1.5 -left-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute bottom-1.5 -left-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute top-1.5 -right-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute bottom-1.5 -right-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
        </>
      )}
    </div>
  );
}

export interface BitAvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  font?: "normal" | "cyphercn";
  variant?: "default" | "cyphercn" | "framed";
  ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Image>>;
}

function AvatarImage({ className, font, ref, ...props }: BitAvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot="avatar-image"
      className={cn(
        "aspect-square h-full w-full",
        font === "cyphercn" && "cyphercn",
        className
      )}
      {...props}
    />
  );
}

export interface BitAvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Fallback>>;
}

function AvatarFallback({ className, ref, ...props }: BitAvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      data-slot="avatar-fallback"
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted text-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
