import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="flex h-14 shrink-0 items-center gap-2 border-border border-t">
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <p className="text-muted-foreground text-xs md:text-sm">
          Built by{" "}
          <Link
            className="underline"
            href="https://github.com/jubscodes"
            target="_blank"
          >
            jubscodes
          </Link>
          . Forked from{" "}
          <Link
            className="underline"
            href="https://github.com/jubscodes/cyphercn-ui"
            target="_blank"
          >
            8bitcn/ui
          </Link>{" "}
          by OrcDev. Based on{" "}
          <Link
            className="underline"
            href="https://ui.shadcn.com"
            target="_blank"
          >
            shadcn/ui
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
