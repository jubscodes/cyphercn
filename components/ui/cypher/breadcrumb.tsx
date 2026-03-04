import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbEllipsis as ShadcnBreadcrumbEllipsis,
  BreadcrumbItem as ShadcnBreadcrumbItem,
  BreadcrumbList as ShadcnBreadcrumbList,
  BreadcrumbPage as ShadcnBreadcrumbPage,
  BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import "./styles/cyberpunk.css";

export const breadcrumbVariants = cva("", {
  variants: {
    font: {
      normal: "",
      cyphercn: "cyphercn",
    },
    variant: {
      default: "text-card-foreground",
      destructive:
        "text-destructive [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CypherBreadcrumbNavigationProps
  extends React.ComponentProps<"nav">,
    VariantProps<typeof breadcrumbVariants> {}

interface CypherBreadcrumbOrderedListProps
  extends React.ComponentProps<"ol">,
    VariantProps<typeof breadcrumbVariants> {}

interface CypherBreadcrumbSpanProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof breadcrumbVariants> {}

interface CypherBreadcrumbListItemProps
  extends React.ComponentProps<"li">,
    VariantProps<typeof breadcrumbVariants> {}

interface CypherBreadcrumbLinkProps
  extends React.ComponentProps<"a">,
    VariantProps<typeof breadcrumbVariants> {}

const ChevronRight = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.25"
      color=""
      className="size-7"
      aria-label="chevron-right"
    >
      <rect x="128" y="136" width="14" height="14" rx="1"></rect>
      <rect x="112" y="152" width="14" height="14" rx="1"></rect>
      <rect x="96" y="72" width="14" height="14" rx="1"></rect>
      <rect x="96" y="168" width="14" height="14" rx="1"></rect>
      <rect x="144" y="120" width="14" height="14" rx="1"></rect>
      <rect x="128" y="104" width="14" height="14" rx="1"></rect>
      <rect x="112" y="88" width="14" height="14" rx="1"></rect>
    </svg>
  );
};

function Breadcrumb({ children, ...props }: CypherBreadcrumbNavigationProps) {
  const { variant, className, font } = props;

  return (
    <div
      className={cn(
        "mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground",
        className
      )}
    >
      <ShadcnBreadcrumb
        {...props}
        className={cn(
          "relative rounded-none border-none bg-background",
          breadcrumbVariants({ variant }),
          font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
          className
        )}
      >
        {children}
      </ShadcnBreadcrumb>
    </div>
  );
}

function BreadcrumbList({ ...props }: CypherBreadcrumbOrderedListProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbList
      className={cn(className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal")}
      {...props}
    />
  );
}

function BreadcrumbItem({ ...props }: CypherBreadcrumbListItemProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbItem
      className={cn(className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal")}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  ...props
}: CypherBreadcrumbLinkProps & {
  asChild?: boolean;
}) {
  const { font, className } = props;

  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal")}
      {...props}
    />
  );
}

function BreadcrumbPage({ ...props }: CypherBreadcrumbSpanProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbPage
      className={cn(className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal")}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ ...props }: CypherBreadcrumbListItemProps) {
  const { font, children, className } = props;

  return (
    <ShadcnBreadcrumbSeparator
      className={cn(className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal", "[&>svg]:size-7")}
      {...props}
    >
      {children ?? <ChevronRight />}
    </ShadcnBreadcrumbSeparator>
  );
}

function BreadcrumbEllipsis({ ...props }: CypherBreadcrumbSpanProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbEllipsis
      className={cn(className, font === "cyphercn" ? "cyphercn" : "cyphercn-normal")}
      {...props}
    >
      <MoreHorizontal className={cn("size-7", "cyphercn")} />
      <span className="sr-only">More</span>
    </ShadcnBreadcrumbEllipsis>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
