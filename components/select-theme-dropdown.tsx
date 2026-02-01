"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Theme } from "@/lib/themes";

const themes = [
  { name: Theme.Default, color: "oklch(0.85 0.25 142)" },
  { name: Theme.Amber, color: "oklch(0.85 0.18 85)" },
  { name: Theme.Cyan, color: "oklch(0.85 0.15 195)" },
  { name: Theme.Red, color: "oklch(0.7 0.22 25)" },
  { name: Theme.White, color: "oklch(0.95 0 0)" },
  { name: Theme.Orange, color: "oklch(0.8 0.2 55)" },
];

export function SelectThemeDropdown({
  activeTheme,
  setActiveTheme,
}: {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
}) {
  return (
    <Select
      onValueChange={(val) => setActiveTheme(val as Theme)}
      value={activeTheme}
    >
      <SelectTrigger className="w-full">
        <SelectValue font="retro" placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem key={theme.name} value={theme.name}>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-3 w-3 rounded-sm border border-foreground"
                style={{ backgroundColor: theme.color }}
              />
              <span className="capitalize">{theme.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
