"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { cn } from "@/lib/utils";

import "./styles/cyberpunk.css";

const variantPrefixes = {
  success: "[OK]",
  info: "[INFO]",
  warning: "[WARN]",
  error: "[ERROR]",
  loading: "[....]",
};

function Toaster({
  glow = false,
  toastOptions,
  ...props
}: ToasterProps & { glow?: boolean }) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <span className="cyphercn text-xs">{variantPrefixes.success}</span>,
        info: <span className="cyphercn text-xs">{variantPrefixes.info}</span>,
        warning: <span className="cyphercn text-xs">{variantPrefixes.warning}</span>,
        error: <span className="cyphercn text-xs">{variantPrefixes.error}</span>,
        loading: <span className="cyphercn text-xs animate-pulse">{variantPrefixes.loading}</span>,
      }}
      toastOptions={{
        ...toastOptions,
        className: cn(
          glow && "phosphor-border-glow",
          toastOptions?.className
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--foreground)",
          "--border-radius": "0px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster };
