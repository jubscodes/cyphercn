import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/cypher/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/cypher/card";

const menuItems = [
  {
    label: "START GAME",
    action: () => {},
  },
  {
    label: "OPTIONS",
    action: () => {},
  },
  {
    label: "HIGH SCORES",
    action: () => {},
  },
  {
    label: "MULTIPLAYER",
    action: () => {},
  },
  { label: "QUIT", action: () => {} },
];

export default function MainMenu({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="flex flex-col items-center justify-center gap-2">
        <CardTitle>Main Menu</CardTitle>
        <CardDescription>COMMAND CENTER</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Button key={item.label} className="flex items-center gap-2">
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
