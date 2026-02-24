"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/cypher/select";
import { Theme } from "@/lib/themes";

export const themeOptions = [
  { name: Theme.Default, swatch: "oklch(0.85 0.25 142)" },
  { name: Theme.Amber, swatch: "oklch(0.85 0.18 85)" },
  { name: Theme.Cyan, swatch: "oklch(0.85 0.15 195)" },
  { name: Theme.Red, swatch: "oklch(0.7 0.22 25)" },
  { name: Theme.White, swatch: "oklch(0.95 0 0)" },
  { name: Theme.Orange, swatch: "oklch(0.8 0.2 55)" },
] as const;

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
        <SelectValue font="cyphercn" placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {themeOptions.map((theme) => (
          <SelectItem key={theme.name} value={theme.name}>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-3 w-3 rounded-sm border border-foreground"
                style={{ backgroundColor: theme.swatch }}
              />
              <span className="capitalize">{theme.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
