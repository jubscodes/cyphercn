import type * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  ToggleGroup as ShadcnToggleGroup,
  ToggleGroupItem as ShadcnToggleGroupItem,
} from "../toggle-group";
import "./styles/cyberpunk.css";

export const toggleGroupVariants = cva("", {
  variants: {
    font: { normal: "", cyphercn: "cyphercn" },
    variant: {
      default: "bg-transparent",
      outline:
        "bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 px-2 min-w-9",
      sm: "h-4 px-1.5 min-w-4",
      lg: "h-10 px-2.5 min-w-10",
    },
  },
  defaultVariants: { variant: "default", font: "cyphercn", size: "default" },
});

export type BitToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  VariantProps<typeof toggleGroupVariants>;

export type BitToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> &
  VariantProps<typeof toggleGroupVariants>;

function ToggleGroup({ ...props }: BitToggleGroupProps) {
  const { className, font, children } = props;

  return (
    <ShadcnToggleGroup
      className={cn("gap-3", className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal")}
      {...props}
    >
      {" "}
      {children}{" "}
    </ShadcnToggleGroup>
  );
}
function ToggleGroupItem({ ...props }: BitToggleGroupItemProps) {
  const { className, font, children, variant } = props;
  return (
    <ShadcnToggleGroupItem
      className={cn(
        "relative transition-transform active:translate-x-1 active:translate-y-1 rounded-none",
        variant === "outline" && "border border-foreground dark:border-ring",
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnToggleGroupItem>
  );
}

export { ToggleGroup, ToggleGroupItem };
