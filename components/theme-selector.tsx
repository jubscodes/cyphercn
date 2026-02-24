"use client";

import { Button } from "@/components/ui/cypher/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/cypher/dialog";
import { getThemeCode } from "@/lib/themes";

import { useThemeConfig } from "./active-theme";
import CodeSnippet from "./code-snippet";
import { SelectThemeDropdown, themeOptions } from "./select-theme-dropdown";
import { ScrollArea } from "./ui/cypher/scroll-area";

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const current = themeOptions.find((t) => t.name === activeTheme);
  const displayName = current
    ? current.name.charAt(0).toUpperCase() + current.name.slice(1)
    : activeTheme;

  return (
    <div className="flex flex-col gap-4 border-y border-dashed p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full min-w-0 sm:w-64">
          <SelectThemeDropdown
            activeTheme={activeTheme}
            setActiveTheme={setActiveTheme}
          />
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            {current && (
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 shrink-0 rounded-sm border border-foreground/50"
                style={{ backgroundColor: current.swatch }}
              />
            )}
            <span>Previewing: {displayName}</span>
          </span>
        </p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full shrink-0 sm:w-auto" variant="outline">
            Copy CSS
          </Button>
        </DialogTrigger>
        <DialogContent>
          <ScrollArea className="max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Theme CSS</DialogTitle>
              <DialogDescription>
                Copy and paste the following code into your CSS file. Use the
                copy button on the code block to copy to clipboard.
              </DialogDescription>
            </DialogHeader>

            <CodeSnippet>{getThemeCode(activeTheme)}</CodeSnippet>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <p className="text-muted-foreground text-xs">
        Choose a phosphor color to see it applied to the components below.
      </p>
    </div>
  );
}
