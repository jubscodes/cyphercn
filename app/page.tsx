import Link from "next/link";
import ComponentShowcase from "@/components/examples/component-showcase";
import { Button } from "@/components/ui/cypher/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-4 pt-10">
      <h1 className={`${"cyphercn"} font-bold md:text-2xl`}>
        Build your terminal component library
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        A set of terminal-styled components and a code distribution platform.
        Works with your favorite frameworks. Open Source. Open Code.
      </p>
      <Link className="w-fit" href="/docs">
        <Button className="w-fit" size="sm">
          Get Started
        </Button>
      </Link>

      <ComponentShowcase />

      <div className="mt-8 border border-foreground/20 border-dashed p-6 text-center">
        <h2 className={`${"cyphercn"} mb-2 font-bold text-lg md:text-xl`}>
          Built something with CypherCN?
        </h2>
        <p className="mx-auto mb-4 max-w-md text-muted-foreground text-sm">
          Share your project with the community! Submit it here and you could
          get featured on the site.
        </p>
        <Link href="/submit-project">
          <Button className="w-fit" size="sm">
            Submit Your Project
          </Button>
        </Link>
      </div>
    </div>
  );
}
