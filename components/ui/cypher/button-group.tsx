import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  ButtonGroup as ShadcnButtonGroup,
  ButtonGroupSeparator as ShadcnButtonGroupSeparator,
  ButtonGroupText as ShadcnButtonGroupText,
  buttonGroupVariants,
} from "@/components/ui/button-group";

import "./styles/cyberpunk.css";

const cypherButtonGroupVariants = cva(
  "rounded-none [&>*]:rounded-none",
  {
    variants: {
      glow: {
        true: "phosphor-border-glow",
        false: "",
      },
    },
    defaultVariants: {
      glow: false,
    },
  }
);

function ButtonGroup({
  className,
  glow = false,
  orientation,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof buttonGroupVariants> &
  VariantProps<typeof cypherButtonGroupVariants>) {
  return (
    <ShadcnButtonGroup
      orientation={orientation}
      className={cn(cypherButtonGroupVariants({ glow }), className)}
      {...props}
    />
  );
}

function ButtonGroupText({
  className,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  return (
    <ShadcnButtonGroupText
      className={cn(
        "cyphercn bg-transparent rounded-none border-foreground",
        className
      )}
      {...props}
    />
  );
}

function ButtonGroupSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnButtonGroupSeparator>) {
  return (
    <ShadcnButtonGroupSeparator
      className={cn("bg-foreground", className)}
      {...props}
    />
  );
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
};
