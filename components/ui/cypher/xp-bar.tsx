import { type CypherProgressProps, Progress } from "@/components/ui/cypher/progress";
import { cn } from "@/lib/utils";

interface XpBarProps extends React.ComponentProps<"div"> {
  className?: string;
  variant?: CypherProgressProps["variant"];
  value?: number;
  levelUpMessage?: string;
  progressBg?: string;
}

export default function XpBar({
  className,
  variant = "bar",
  value,
  levelUpMessage = "LEVEL UP!",
  progressBg = "bg-yellow-500",
  ...props
}: XpBarProps) {
  const isLevelUp = value === 100;

  return (
    <div className={cn("relative", className)}>
      <Progress
        {...props}
        value={value}
        variant={variant}
        className={cn(isLevelUp && "animate-pulse")}
        progressBg={progressBg}
      />
      {isLevelUp && (
        <div
          className={cn(
            "cyphercn",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "text-[0.625rem] text-foreground",
            "pointer-events-none whitespace-nowrap z-10",
            "drop-shadow-[1px_1px_0_currentColor] [text-shadow:1px_1px_0_currentColor,-1px_-1px_0_currentColor,1px_-1px_0_currentColor,-1px_1px_0_currentColor]",
            "animate-[blink_0.5s_step-end_infinite]"
          )}
        >
          {levelUpMessage}
        </div>
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

