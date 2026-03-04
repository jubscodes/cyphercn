import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  NativeSelect as ShadcnNativeSelect,
  NativeSelectOptGroup as ShadcnNativeSelectOptGroup,
  NativeSelectOption as ShadcnNativeSelectOption,
} from "@/components/ui/native-select";

import "./styles/cyberpunk.css";

const nativeSelectVariants = cva(
  "cyphercn-normal rounded-none border border-foreground shadow-none ring-0 focus-visible:ring-0 focus-visible:border-foreground",
  {
    variants: {
      glow: {
        true: "focus-visible:phosphor-border-glow",
        false: "",
      },
    },
    defaultVariants: {
      glow: false,
    },
  }
);

function NativeSelect({
  className,
  glow = false,
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
} & VariantProps<typeof nativeSelectVariants>) {
  return (
    <div className="contents [&_[data-slot=native-select-icon]]:text-foreground [&_[data-slot=native-select-icon]]:opacity-100">
      <ShadcnNativeSelect
        className={cn(nativeSelectVariants({ glow }), className)}
        {...props}
      />
    </div>
  );
}

function NativeSelectOption({
  ...props
}: React.ComponentProps<"option">) {
  return <ShadcnNativeSelectOption {...props} />;
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return <ShadcnNativeSelectOptGroup className={cn(className)} {...props} />;
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
