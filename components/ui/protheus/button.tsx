import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

import "@/components/ui/cypher/styles/retro.css";

export const buttonVariants = cva(
  "cyphercn inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary hover:bg-primary/90 phosphor-border-glow",
        destructive:
          "bg-destructive text-white border border-destructive hover:bg-destructive/90",
        outline:
          "border border-foreground bg-transparent text-foreground hover:bg-foreground/10",
        ghost:
          "bg-transparent text-foreground hover:bg-foreground/10",
        terminal:
          "bg-transparent text-foreground border-0 hover:text-primary before:content-['['] after:content-[']'] before:mr-1 after:ml-1",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 py-1.5 text-xs",
        lg: "h-11 px-6 py-3 text-base",
        icon: "size-9 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CyphercnButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glow?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  glow = false,
  ...props
}: CyphercnButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        glow && "phosphor-glow",
        className
      )}
      {...props}
    />
  );
}

export { Button };
