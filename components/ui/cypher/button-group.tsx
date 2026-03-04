import { cva, type VariantProps } from "class-variance-authority";
import {
  buttonGroupVariants,
  ButtonGroup as ShadcnButtonGroup,
  ButtonGroupSeparator as ShadcnButtonGroupSeparator,
  ButtonGroupText as ShadcnButtonGroupText,
} from "@/components/ui/button-group";
import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

const cypherButtonGroupVariants = cva("rounded-none [&>*]:rounded-none", {
  variants: {
    glow: {
      true: "phosphor-border-glow",
      false: "",
    },
  },
  defaultVariants: {
    glow: false,
  },
});

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
      className={cn(cypherButtonGroupVariants({ glow }), className)}
      orientation={orientation}
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
        "cyphercn rounded-none border-foreground bg-transparent",
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
