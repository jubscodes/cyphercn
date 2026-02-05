import { cn } from "@/lib/utils";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/cypher/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/cypher/avatar";

export interface DialogueProps extends React.ComponentProps<"div"> {
  avatarSrc?: string;
  avatarFallback?: string;
  title?: string;
  description?: string;
  player?: boolean;
}

export default function Dialogue({
  className,
  avatarSrc,
  avatarFallback,
  title,
  description,
  player = true,
  ...props
}: DialogueProps) {
  return (
    <div className={cn("flex gap-3", className)} {...props}>
      {player && (
        <Avatar variant="framed" className="size-16">
          <AvatarImage src={avatarSrc} alt={avatarFallback} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      )}
      <Alert className={cn(!player && "text-right")}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>

      {!player && (
        <Avatar variant="framed" className="size-16">
          <AvatarImage src={avatarSrc} alt={avatarFallback} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
