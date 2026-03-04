"use client";

import type * as React from "react";

import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cva } from "class-variance-authority";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

export const menubarVariants = cva("", {
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

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function Menubar({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> & {
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Root>>;
}) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cn(
        "flex h-10 items-center space-x-1 rounded-none border border-foreground dark:border-ring bg-background p-1",
        menubarVariants({ font: "cyphercn" }),
        className
      )}
      {...props}
    />
  );
}

function MenubarTrigger({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> & {
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Trigger>>;
}) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-none px-3 py-1.5 text-sm font-medium outline-none focus:border-b focus:border-foreground focus:dark:border-ring focus:border-dashed focus:text-accent-foreground data-[state=open]:border-b data-[state=open]:border-foreground data-[state=open]:dark:border-ring data-[state=open]:text-accent-foreground data-[state=open]:border-dashed border-b border-transparent",
        className
      )}
      {...props}
    />
  );
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean;
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.SubTrigger>>;
}) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none h-9 focus:border focus:border-foreground focus:dark:border-ring focus:border-dashed focus:text-accent-foreground data-[state=open]:border data-[state=open]:border-foreground data-[state=open]:dark:border-ring data-[state=open]:text-accent-foreground data-[state=open]:border-dashed",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <svg
        width="50"
        height="50"
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="0.25"
        aria-label="chevron-right"
        className="size-7 ml-auto"
      >
        <rect x="128" y="136" width="14" height="14" rx="1" />
        <rect x="112" y="152" width="14" height="14" rx="1" />
        <rect x="96" y="72" width="14" height="14" rx="1" />
        <rect x="96" y="168" width="14" height="14" rx="1" />
        <rect x="144" y="120" width="14" height="14" rx="1" />
        <rect x="128" y="104" width="14" height="14" rx="1" />
        <rect x="112" y="88" width="14" height="14" rx="1" />
      </svg>
    </MenubarPrimitive.SubTrigger>
  );
}

function MenubarSubContent({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> & {
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.SubContent>>;
}) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-none border border-foreground dark:border-ring bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
        className
      )}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 4,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> & {
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Content>>;
}) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-none border border-foreground dark:border-ring bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
          menubarVariants({ font: "cyphercn" }),
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
}

function MenubarItem({
  className,
  inset,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Item>>;
}) {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:border focus:border-foreground focus:dark:border-ring h-9 focus:border-dashed focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & {
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>>;
}) {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none h-9 focus:border focus:border-foreground focus:dark:border-ring focus:border-dashed focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <svg
            width="50"
            height="50"
            viewBox="0 0 256 256"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="0.25"
            aria-label="check"
            className="size-7"
          >
            <rect x="80" y="128" width="14" height="14" rx="1" transform="rotate(90 80 128)" />
            <rect x="96" y="144" width="14" height="14" rx="1" transform="rotate(90 96 144)" />
            <rect x="112" y="160" width="14" height="14" rx="1" transform="rotate(90 112 160)" />
            <rect x="128" y="144" width="14" height="14" rx="1" transform="rotate(90 128 144)" />
            <rect x="144" y="128" width="14" height="14" rx="1" transform="rotate(90 144 128)" />
            <rect x="160" y="112" width="14" height="14" rx="1" transform="rotate(90 160 112)" />
            <rect x="176" y="96" width="14" height="14" rx="1" transform="rotate(90 176 96)" />
            <rect x="192" y="80" width="14" height="14" rx="1" transform="rotate(90 192 80)" />
          </svg>
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

function MenubarRadioItem({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & {
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.RadioItem>>;
}) {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-none py-1.5 h-9 pl-8 pr-2 text-sm outline-none focus:border focus:border-foreground focus:dark:border-ring focus:border-dashed focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

function MenubarLabel({
  className,
  inset,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Label>>;
}) {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
}

function MenubarSeparator({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> & {
  ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Separator>>;
}) {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  );
}

function MenubarShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
