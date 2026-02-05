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
        <h1 className={"cyphercn font-bold md:text-2xl"}>
          Add colors. Make it yours.
        </h1>
        <p className="max-w-2xl text-sm md:text-base">
          Hand-picked themes that you can copy and paste into your apps.
        </p>
      </div>

      <ThemeSelector />

      <div className="p-5">
        <ComponentShowcase />
      </div>
    </>
  );
}
