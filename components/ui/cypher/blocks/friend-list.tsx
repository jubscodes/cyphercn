import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cypher/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/cypher/avatar";
import { cva } from "class-variance-authority";
import { ScrollArea } from "@/components/ui/cypher/scroll-area";

const truncate = (
  str: string | null | undefined,
  length: number
): string | null => {
  if (!str || str.length <= length) return str ?? null;
  return `${str.slice(0, length - 3)}...`;
};

const statusVariants = cva("w-2 h-2 flex-shrink-0", {
  variants: {
    status: {
      // IN-GAME (Red Glow)
      ingame: `
                bg-red-500 border-red-500
                shadow-[0_0_6px] shadow-red-500/50
            `,
      // ONLINE (Neon Green Glow)
      online: `
                bg-green-500 border-green-500
                shadow-[0_0_6px] shadow-green-500/50
            `,
      // AWAY (Yellow Glow)
      away: `
                bg-yellow-500 border-yellow-500
                shadow-[0_0_6px] shadow-yellow-500/50
            `,
      // OFFLINE (No Glow/Subtle Dark Shadow)
      offline: `
                bg-muted border-muted-foreground
                shadow-[0_0_2px] shadow-muted/50
            `,
      default: `
                bg-muted border-muted-foreground
                shadow-[0_0_2px] shadow-muted/50
            `,
    },
  },
  defaultVariants: {
    status: "default",
  },
});

const playerCardVariants = cva(
  "flex items-center justify-between sm:p-3  p-2 rounded-lg transition-all duration-200 min-w-[150px] overflow-hidden",
  {
    variants: {
      status: {
        default: "bg-muted/50 hover:bg-muted",
      },
    },
  }
);

export interface FriendListPlayer {
  id: number;
  name: string;
  status: "online" | "ingame" | "away" | "offline";
  avatar?: string;
  avatarFallback?: string;
  activity?: string;
}
export interface FriendListProps extends React.ComponentPropsWithoutRef<"div"> {
  players: FriendListPlayer[];
  className?: string;
  showstatus?: boolean;
  showactivity?: boolean;
}
export default function FriendList({
  className,
  showstatus = true,
  showactivity = true,
  players,
  ...props
}: FriendListProps){
  return (
    <div
      className={cn("flex flex-col gap-6 w-full h-full", className)}
      {...props}
    >
      <Card data-slot="friend-list">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl  text-center gap-2">
            Friends (
            {
              players.filter(
                (player) =>
                  player.status === "online" || player.status === "ingame"
              ).length
            }
            /{players.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 px-1  min-w-[150px]">
          <ScrollArea className="h-[400px]">
            <div className="space-y-2 mx-8">
              {players.map((player) => (
                <div
                  key={player.id}
                  className={cn(
                    playerCardVariants({ status: "default" }),
                    "rounded-none border border-foreground dark:border-ring"
                  )}
                >
                    <div className="flex items-center gap-3">
                      <Avatar
                        variant="framed"
                        className="size-6 md:size-10"
                      >
                        <AvatarImage src={player.avatar} alt={player.name} />
                        <AvatarFallback className="cyphercn text-[5px] md:text-sm">
                          {player.avatarFallback ||
                            player.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4">
                          <span className="font-medium truncate cyphercn text-xs hidden sm:inline">
                            {truncate(player.name, 20)}
                          </span>
                          <span className="font-medium truncate cyphercn sm:hidden text-xs md:text-sm">
                            {truncate(player.name, 12)}
                          </span>
                        </div>
                        {/* Status and Activity Line */}
                        <div className="flex items-center text-xs">
                          {/* Status Indicator Dot */}
                         <div
                            className={cn(
                              "w-2 h-2 mr-1 mt-[2px]",
                              statusVariants({ status: player.status })
                            )}
                            aria-label={`Status: ${player.status}`}
                          ></div>

                          {/* Status Text (e.g., ONLINE) */}
                          {showstatus && (
                            <span
                              className={cn(
                                `uppercase cyphercn mr-1 mt-1 text-[9px] `
                              )}
                            >
                              {player.status?.toUpperCase()}
                            </span>
                          )}

                          {/* Activity Text (Optional) */}
                          {player.activity && showactivity && (
                            <>
                              <span
                                className={`text-muted-foreground italic mt-1 text-[9px] md:hidden `}
                              >
                                {truncate(player.activity, 20)}
                              </span>
                              <span
                                className={`text-muted-foreground italic mt-1 text-[9px] hidden md:inline `}
                              >
                                {truncate(player.activity, 30)}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
