import * as React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/cypher/avatar";
import { Badge } from "@/components/ui/cypher/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cypher/card";
import { Separator } from "@/components/ui/cypher/separator";
import "@/components/ui/cypher/styles/cyberpunk.css";

export interface LeaderboardPlayer {
  id: string;
  name: string;
  score: number;
  rank?: number;
  isCurrentPlayer?: boolean;
  avatar?: string;
  avatarFallback?: string;
}

export interface LeaderboardProps extends React.ComponentProps<"div"> {
  players: LeaderboardPlayer[];
  maxPlayers?: number;
  showRank?: boolean;
  showAvatar?: boolean;
  className?: string;
  title?: string;
  currentPlayerId?: string;
}

// Terminal-style player items with thin borders instead of gradients
const playerItemVariants = cva(
  "flex items-center justify-between p-3 transition-all duration-200",
  {
    variants: {
      rank: {
        default: "bg-muted/30 border border-foreground/30 hover:border-foreground/50",
        first:
          "border border-foreground hover:bg-foreground/10 phosphor-border-glow",
        second:
          "border border-foreground/70 hover:bg-foreground/10",
        third:
          "border border-foreground/50 hover:bg-foreground/10",
        current: "border-2 border-foreground bg-foreground/10 hover:bg-foreground/20",
      },
    },
    defaultVariants: {
      rank: "default",
    },
  }
);

// Terminal-style rank badges with borders instead of gradients
const rankBadgeVariants = cva(
  "flex items-center justify-center size-8 text-sm font-bold cyphercn",
  {
    variants: {
      rank: {
        default: "border border-foreground/30 text-muted-foreground",
        first:
          "border-2 border-foreground text-foreground phosphor-glow",
        second:
          "border border-foreground/70 text-foreground/80",
        third:
          "border border-foreground/50 text-foreground/60",
        current: "border-2 border-foreground bg-foreground text-background",
      },
    },
    defaultVariants: {
      rank: "default",
    },
  }
);

function getRankVariant(
  rank: number,
  isCurrentPlayer: boolean
): "default" | "first" | "second" | "third" | "current" {
  if (isCurrentPlayer) return "current";
  if (rank === 1) return "first";
  if (rank === 2) return "second";
  if (rank === 3) return "third";
  return "default";
}

function formatScore(score: number): string {
  return score.toLocaleString();
}

// Terminal-style rank indicators (no emojis)
function getRankIcon(rank: number): string {
  switch (rank) {
    case 1:
      return "#1";
    case 2:
      return "#2";
    case 3:
      return "#3";
    default:
      return `#${rank}`;
  }
}

export function Leaderboard({
  players,
  maxPlayers = 10,
  showRank = true,
  showAvatar = true,
  className,
  title = "LEADERBOARD",
  currentPlayerId,
  ...props
}: LeaderboardProps) {
  // Sort players by score (descending) and assign ranks
  const sortedPlayers = React.useMemo(() => {
    return players
      .sort((a, b) => b.score - a.score)
      .slice(0, maxPlayers)
      .map((player, index) => ({
        ...player,
        rank: index + 1,
        isCurrentPlayer: currentPlayerId
          ? player.id === currentPlayerId
          : player.isCurrentPlayer,
      }));
  }, [players, maxPlayers, currentPlayerId]);

  return (
    <Card
      data-slot="leaderboard"
      className={className}
     
      {...props}
    >
      {title && (
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
      )}

      <CardContent className="space-y-5">
        <div className="space-y-2">
          {sortedPlayers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p className="cyphercn text-sm">No players yet</p>
            </div>
          ) : (
            sortedPlayers.map((player) => {
              const rankVariant = getRankVariant(
                player.rank!,
                player.isCurrentPlayer!
              );

              return (
                <div
                  key={player.id}
                  className={cn(
                    playerItemVariants({ rank: rankVariant }),
                    "cyphercn"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {showAvatar && (
                      <Avatar variant="framed" className="size-10">
                        {player.avatar && (
                          <AvatarImage src={player.avatar} alt={player.name} />
                        )}
                        <AvatarFallback className="cyphercn text-xs">
                          {player.avatarFallback ||
                            player.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    {showRank && !showAvatar && (
                      <div
                        className={cn(rankBadgeVariants({ rank: rankVariant }))}
                      >
                        <span className="text-xs">
                          {getRankIcon(player.rank!)}
                        </span>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            "font-medium truncate cyphercn text-xs md:text-sm",
                            player.isCurrentPlayer && "text-primary font-bold"
                          )}
                        >
                          {player.name}
                        </span>
                        {player.isCurrentPlayer && (
                          <Badge className="text-[9px]">YOU</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "font-bold cyphercn text-xs md:text-sm",
                        rankVariant === "first" && "phosphor-glow",
                        player.isCurrentPlayer && "phosphor-glow"
                      )}
                    >
                      {formatScore(player.score)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <Separator />

        {sortedPlayers.length > 0 && (
          <div className="mt-4 pt-4">
            <p
              className={cn("text-xs text-muted-foreground text-center cyphercn-normal")}
            >
              Showing top {Math.min(sortedPlayers.length, maxPlayers)} players
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Leaderboard;
