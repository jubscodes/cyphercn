import { type CypherProgressProps, Progress } from "@/components/ui/cypher/progress";

interface ManaBarProps extends React.ComponentProps<"div"> {
  className?: string;
  props?: CypherProgressProps;
  variant?: CypherProgressProps["variant"];
  value?: number;
}

export default function ManaBar({
  className,
  variant = "bar",
  value,
  ...props
}: ManaBarProps) {
  return (
    <Progress
      {...props}
      value={value}
      variant={variant}
      className={className}
      progressBg="bg-blue-500"
    />
  );
}
