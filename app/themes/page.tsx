import type { Metadata } from "next";

import ComponentShowcase from "@/components/examples/component-showcase";
import { ThemeSelector } from "@/components/theme-selector";

export const metadata: Metadata = {
  title: "Themes",
  description:
    "Terminal themes for your command center interface. Paired with CypherCN components for the authentic MS-DOS aesthetic.",
};

export default function ThemesPage() {
  return (
    <>
      <div className="flex flex-col gap-5 p-4 py-10">
        <h1 className="cyphercn font-bold md:text-2xl">TERMINAL THEMES</h1>
        <p className="max-w-2xl text-sm md:text-base">
          Select a phosphor color scheme for your command center interface.
        </p>
      </div>

      <ThemeSelector />

      <main className="p-5">
        <ComponentShowcase />
      </main>
    </>
  );
}
