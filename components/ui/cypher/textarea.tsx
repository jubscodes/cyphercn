import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";

import "./styles/cyberpunk.css";

export const inputVariants = cva("", {
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

export interface BitTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function Textarea({ ...props }: BitTextareaProps) {
  const { className, font } = props;

  return (
    <ShadcnTextarea
      {...props}
      className={cn(
        "rounded-none transition-transform ring-0 border border-foreground dark:border-ring",
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        className
      )}
    />
  );
}

export { Textarea };
