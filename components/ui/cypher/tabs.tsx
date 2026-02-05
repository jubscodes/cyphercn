import type * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Tabs as ShadcnTabs,
  TabsContent as ShadcnTabsContent,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from "@/components/ui/tabs";

import "./styles/cyberpunk.css";

export const tabsVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary",
      cyphercn: "cyphercn",
    },
    font: {
      normal: "",
      cyphercn: "cyphercn",
    },
  },
  defaultVariants: {
    font: "cyphercn",
  },
});

export interface BitTabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {
  asChild?: boolean;
}

function Tabs({ className, ...props }: BitTabsProps) {
  const { font } = props;

  return (
    <ShadcnTabs
      {...props}
      className={cn("relative", font === "cyphercn" ? "cyphercn" : "cyphercn-normal", className)}
    />
  );
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnTabsList>) {
  return (
    <ShadcnTabsList
      {...props}
      className={cn("bg-card rounded-none border border-foreground dark:border-ring", className)}
    >
      {children}
    </ShadcnTabsList>
  );
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnTabsTrigger>) {
  return (
    <ShadcnTabsTrigger
      className={cn(
        "border-none data-[state=active]:bg-accent data-[state=active]:text-foreground text-muted-foreground rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnTabsTrigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnTabsContent>) {
  return <ShadcnTabsContent className={cn("", className)} {...props} />;
}

export { Tabs, TabsList, TabsContent, TabsTrigger };
