import type * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  HoverCard as ShadcnHoverCard,
  HoverCardContent as ShadcnHoverCardContent,
  HoverCardTrigger as ShadcnHoverCardTrigger,
} from "@/components/ui/hover-card";

import "./styles/cyberpunk.css";

export const hoverCardVariants = cva("", {
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

export interface CypherHoverCardProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Content>,
    VariantProps<typeof hoverCardVariants> {}

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <ShadcnHoverCard {...props} />;
}

function HoverCardTrigger({
  className,
  asChild = true,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <ShadcnHoverCardTrigger
      className={cn(className)}
      asChild={asChild}
      {...props}
    />
  );
}

function HoverCardContent({
  children,
  className,
  font,
  ...props
}: CypherHoverCardProps) {
  return (
    <ShadcnHoverCardContent
      className={cn(
        "rounded-none border border-foreground dark:border-ring",
        hoverCardVariants({
          font,
          className,
        })
      )}
      {...props}
    >
      {children}
    </ShadcnHoverCardContent>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
