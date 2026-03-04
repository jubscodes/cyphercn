"use client";

import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription as ShadcnFormDescription,
  FormField,
  FormItem,
  FormLabel as ShadcnFormLabel,
  useFormField,
} from "@/components/ui/form";

import "./styles/cyberpunk.css";

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnFormLabel>) {
  return (
    <ShadcnFormLabel
      className={cn("cyphercn uppercase tracking-wider", className)}
      {...props}
    />
  );
}

function FormDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <ShadcnFormDescription
      className={cn("cyphercn-normal text-foreground/50", className)}
      {...props}
    />
  );
}

function FormMessage({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("cyphercn text-destructive text-sm", className)}
      {...props}
    >
      <span className="inline-flex items-start gap-1.5">
        <span className="font-bold shrink-0">[ERROR]</span>
        <span className="cyphercn-normal">{body}</span>
      </span>
    </p>
  );
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
