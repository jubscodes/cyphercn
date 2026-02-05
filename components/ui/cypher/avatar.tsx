import type React from "react";
import { forwardRef } from "react";

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

const Avatar = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    font?: "normal" | "cyphercn";
    variant?: "default" | "cyphercn" | "framed";
  }
>(({ className = "", font, variant = "framed", ...props }, ref) => {
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
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

interface BitAvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  font?: "normal" | "cyphercn";
  variant?: "default" | "cyphercn" | "framed";
}

const AvatarImage = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  BitAvatarImageProps
>(({ className, font, ...props }, ref) => {
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
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-foreground",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
