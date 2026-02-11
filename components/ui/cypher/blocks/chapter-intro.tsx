import { cn } from "@/lib/utils";

import "@/components/ui/cypher/styles/cyberpunk.css";

export interface ChapterIntroProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  backgroundSrc?: string;
  align?: "left" | "center" | "right";
  height?: "sm" | "md" | "lg";
  darken?: number;
}

export default function ChapterIntro({
  className,
  title,
  subtitle,
  backgroundSrc,
  align = "center",
  height = "md",
  darken = 0.6,
  ...props
}: ChapterIntroProps) {
  const heightClass =
    height === "lg"
      ? "min-h-[280px] md:min-h-[400px]"
      : height === "sm"
        ? "min-h-[140px] md:min-h-[200px]"
        : "min-h-[200px] md:min-h-[280px]";

  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";

  return (
    <div
      className={cn(
        "cyphercn relative w-full overflow-hidden border border-foreground",
        heightClass,
        className
      )}
      {...props}
    >
      {/* Background image */}
      {backgroundSrc && (
        <img
          src={backgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: darken }}
        aria-hidden="true"
      />

      {/* Scanline effect */}
      <div
        className="crt-scanlines-subtle absolute inset-0"
        aria-hidden="true"
      />

      {/* Terminal decorations - top */}
      <div className="absolute left-0 right-0 top-0 z-10 border-b border-foreground/50 bg-background/80 px-3 py-1">
        <span className="cyphercn text-xs text-foreground/70">
          ═══ LOADING CHAPTER ═══
        </span>
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex h-full flex-col justify-center px-6 py-10",
          alignClass
        )}
      >
        <div className="max-w-xl space-y-3">
          {/* Decorative line */}
          <div className="cyphercn text-foreground/50">
            {"─".repeat(20)}
          </div>

          {/* Title */}
          <h1 className="cyphercn phosphor-glow text-xl uppercase tracking-wider md:text-2xl lg:text-3xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="cyphercn-normal text-sm text-foreground/70 md:text-base">
              {subtitle}
            </p>
          )}

          {/* Decorative line */}
          <div className="cyphercn text-foreground/50">
            {"─".repeat(20)}
          </div>
        </div>
      </div>

      {/* Terminal decorations - bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-foreground/50 bg-background/80 px-3 py-1">
        <span className="cyphercn text-xs text-foreground/50">
          PRESS ANY KEY TO CONTINUE
        </span>
        <span className="cyphercn animate-pulse text-xs text-foreground">▌</span>
      </div>
    </div>
  );
}
