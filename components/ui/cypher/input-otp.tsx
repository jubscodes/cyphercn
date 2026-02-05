import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  InputOTP as ShadcnInputOTP,
  InputOTPGroup as ShadcnInputOTPGroup,
  InputOTPSeparator as ShadcnInputOTPSeparator,
  InputOTPSlot as ShadcnInputOTPSlot,
} from "@/components/ui/input-otp";

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

interface SharedProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof inputVariants> {
  className?: string;
  children?: React.ReactNode;
}

interface InputOTPProps {
  maxLength: number;
  value?: string;
  onChange?: (value: string) => unknown;
  children?: React.ReactNode;
  className?: string;
  font?: "normal" | "cyphercn";
}

export const InputOTP = ({
  className,
  font,
  maxLength,
  value,
  onChange,
  children,
  ...otherProps
}: InputOTPProps) => {
  return (
    <div className={cn("relative w-fit", className)}>
      <ShadcnInputOTP
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        {...otherProps}
        className={cn(font === "cyphercn" ? "cyphercn" : "cyphercn-normal", className)}
      >
        {children}
      </ShadcnInputOTP>
    </div>
  );
};

export const InputOTPGroup = ({ className, ...props }: SharedProps) => {
  return (
    <ShadcnInputOTPGroup {...props} className={cn("flex gap-2", className)} />
  );
};

export const InputOTPSlot = ({
  className,
  font,
  index = 0,
  ...props
}: SharedProps & { index?: number }) => {
  return (
    <ShadcnInputOTPSlot
      index={index}
      {...props}
      className={cn(
        "size-12 text-center text-xl tracking-widest ring-0 border border-foreground dark:border-ring rounded-none",
        font === "cyphercn" ? "cyphercn" : "cyphercn-normal",
        className
      )}
    />
  );
};

export const InputOTPSeparator = ({ className, ...props }: SharedProps) => {
  return <ShadcnInputOTPSeparator {...props} className={cn("", className)} />;
};
