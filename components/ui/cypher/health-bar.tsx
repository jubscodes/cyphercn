import { type CypherProgressProps, Progress } from "@/components/ui/cypher/progress";

interface HealthBarProps extends React.ComponentProps<"div"> {
  className?: string;
  variant?: CypherProgressProps["variant"];
  value?: number;
  progressBg?: string;
}

export default function HealthBar({
  className,
  variant = "default", // Terminal ASCII (█░) is the primary aesthetic
  value,
  progressBg = "bg-red-500",
  ...props
}: HealthBarProps) {
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
