import { type CypherProgressProps, Progress } from "@/components/ui/cypher/progress";

interface HealthBarProps extends React.ComponentProps<"div"> {
  className?: string;
  props?: CypherProgressProps;
  variant?: CypherProgressProps["variant"];
  value?: number;
}

export default function HealthBar({
  className,
  variant = "default", // Terminal ASCII (█░) is the primary aesthetic
  value,
  ...props
}: HealthBarProps) {
  return (
    <Progress
      {...props}
      value={value}
      variant={variant}
      className={className}
      progressBg="bg-red-500"
    />
  );
}
