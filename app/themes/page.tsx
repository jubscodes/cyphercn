import type { Metadata } from "next";

import ComponentShowcase from "@/components/examples/component-showcase";
import { ThemeSelector } from "@/components/theme-selector";
import { Section } from "@/components/ui/cypher/section";
import { Separator } from "@/components/ui/cypher/separator";

export const metadata: Metadata = {
  title: "Themes",
  description:
    "Terminal themes for your command center interface. Paired with CypherCN components for the authentic MS-DOS aesthetic.",
};

export default function ThemesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background px-4 py-6 text-foreground sm:px-6 sm:py-8 lg:px-8 lg:py-8">
      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-6 sm:gap-8">
        <header className="min-w-0 text-center">
          <h1 className="cyphercn phosphor-glow mb-2 text-xl sm:text-2xl">
            TERMINAL THEMES
          </h1>
          <p className="cyphercn-normal text-muted-foreground text-xs sm:text-sm">
            Phosphor color schemes • Paired with CypherCN for MS-DOS aesthetic
          </p>
        </header>

        <Section title="Select theme">
          <ThemeSelector />
        </Section>

        <main className="min-w-0">
          <ComponentShowcase />
        </main>

        <footer className="mt-6 min-w-0 text-center text-muted-foreground text-xs sm:mt-8">
          <Separator label="EOF" variant="double" />
          <p className="cyphercn mt-4 break-words px-2">
            CypherCN Themes • Terminal UI • 8bitcn/ui
          </p>
        </footer>
      </div>
    </div>
  );
}
