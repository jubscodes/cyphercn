import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/retro.css";

export interface CyphercnCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  glow?: boolean;
  scanlines?: boolean;
}

function Card({
  className,
  title,
  glow = false,
  scanlines = false,
  children,
  ...props
}: CyphercnCardProps) {
  return (
    <div
      className={cn(
        "cyphercn relative border border-foreground bg-background p-4",
        glow && "phosphor-border-glow",
        scanlines && "crt-scanlines-subtle overflow-hidden",
        className
      )}
      {...props}
    >
      {title && (
        <div className="dos-panel-title bg-background text-foreground/70 text-xs">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "cyphercn flex flex-col gap-1.5 pb-3 mb-3 border-b border-foreground/30",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "cyphercn text-sm font-semibold tracking-wider uppercase phosphor-glow",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "cyphercn-normal text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("cyphercn-normal text-sm", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "cyphercn flex items-center gap-2 pt-3 mt-3 border-t border-foreground/30",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
