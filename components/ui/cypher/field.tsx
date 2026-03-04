"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";
import {
  Field,
  FieldContent,
  FieldDescription as ShadcnFieldDescription,
  FieldGroup,
  FieldLabel as ShadcnFieldLabel,
  FieldLegend as ShadcnFieldLegend,
  FieldSeparator as ShadcnFieldSeparator,
  FieldSet,
  FieldTitle as ShadcnFieldTitle,
} from "@/components/ui/field";
import type { Label } from "@/components/ui/label";
import type { Separator } from "@/components/ui/separator";

import "./styles/cyberpunk.css";

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <ShadcnFieldLabel
      className={cn("cyphercn uppercase tracking-wider", className)}
      {...props}
    />
  );
}

function FieldTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ShadcnFieldTitle
      className={cn("cyphercn uppercase tracking-wider", className)}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <ShadcnFieldLegend
      className={cn("cyphercn uppercase tracking-wider", className)}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <ShadcnFieldDescription
      className={cn("cyphercn-normal text-foreground/50", className)}
      {...props}
    />
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn(
        "cyphercn text-destructive text-sm font-normal",
        className
      )}
      {...props}
    >
      <span className="inline-flex items-start gap-1.5">
        <span className="font-bold shrink-0">[ERROR]</span>
        <span className="cyphercn-normal">{content}</span>
      </span>
    </div>
  );
}

function FieldSeparator({
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode;
}) {
  return (
    <ShadcnFieldSeparator
      className={cn("[&_[data-slot=separator]]:bg-foreground", className)}
      {...props}
    />
  );
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
