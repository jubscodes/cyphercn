import { type VariantProps, cva } from "class-variance-authority";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Pagination as ShadcnPagination,
  PaginationContent as ShadcnPaginationContent,
  PaginationEllipsis as ShadcnPaginationEllipsis,
  PaginationItem as ShadcnPaginationItem,
  PaginationLink as ShadcnPaginationLink,
} from "@/components/ui/pagination";

import type { Button } from "../button";
import "./styles/cyberpunk.css";

export const paginationVariants = cva("", {
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

export type CypherPaginationProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & VariantProps<typeof paginationVariants>;

function Pagination({ ...props }: CypherPaginationProps<"nav">) {
  const { variant, className, font } = props;
  return (
    <ShadcnPagination
      {...props}
      className={cn(
        paginationVariants({ variant }),
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        className
      )}
    />
  );
}

const ChevronLeftIcon = () => {
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
      aria-label="chevron-left"
    >
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 128 136)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 144 152)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 160 72)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 160 168)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 112 120)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 128 104)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 144 88)"
      ></rect>
    </svg>
  );
};

const ChevronRightIcon = () => {
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
      className="raster-icon size-7"
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

function PaginationContent({ ...props }: CypherPaginationProps<"ul">) {
  const { className, font } = props;
  return (
    <ShadcnPaginationContent
      className={cn("gap-2", font === "cyphercn" ? "cyphercn" : "cyphercn-normal", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: CypherPaginationProps<"li">) {
  const { className, font } = props;
  return (
    <ShadcnPaginationItem
      className={cn(font === "cyphercn" ? "cyphercn" : "cyphercn-normal", className)}
      {...props}
    />
  );
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  CypherPaginationProps<"a">;

function PaginationLink({ ...props }: PaginationLinkProps) {
  const { font, children, isActive, className } = props;
  return (
    <ShadcnPaginationLink
      className={cn(
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        "relative group",
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent",
        "rounded-none border-dashed border border-transparent",
        "dark:hover:border-ring dark:focus:border-ring",
        "hover:border-foreground focus:border-foreground",
        "active:border-transparent",
        isActive && "border-foreground dark:border-ring border-solid",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnPaginationLink>
  );
}

function PaginationPrevious({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { font, className } = props;
  return (
    <PaginationLink
      className={cn(
        "flex flex-row w-full text-sm",
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent",
        "rounded-none border-dashed border border-transparent",
        "hover:border-foreground focus:border-foreground active:border-transparent",
        "dark:hover:border-ring dark:focus:border-ring",
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        className
      )}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { font, className } = props;

  return (
    <PaginationLink
      className={cn(
        "flex flex-row w-full text-sm",
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent",
        "rounded-none border-dashed border border-transparent",
        "hover:border-foreground focus:border-foreground active:border-transparent",
        "dark:hover:border-ring dark:focus:border-ring",
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        className
      )}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ ...props }: CypherPaginationProps<"span">) {
  const { font, className } = props;

  return (
    <ShadcnPaginationEllipsis
      className={cn(font === "cyphercn" ? "cyphercn" : "cyphercn-normal", className)}
      {...props}
    >
      <MoreHorizontal className={cn("size-7", "cyphercn")} />
      <span className="sr-only">More pages</span>
    </ShadcnPaginationEllipsis>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
