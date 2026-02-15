import { type CypherProgressProps, Progress } from "@/components/ui/cypher/progress";

interface ManaBarProps extends React.ComponentProps<"div"> {
  className?: string;
  variant?: CypherProgressProps["variant"];
  value?: number;
  progressBg?: string;
}

export default function ManaBar({
  className,
  variant = "default", // Terminal ASCII (█░) is the primary aesthetic
  value,
  progressBg = "bg-blue-500",
  ...props
}: ManaBarProps) {
  return (
    <Progress
      {...props}
      value={value}
      variant={variant}
      className={className}
      progressBg={progressBg}
    />
  );
}
