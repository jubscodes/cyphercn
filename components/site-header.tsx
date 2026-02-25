"use client";

import { SidebarIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchDocumentation } from "@/components/search-documentation";
import { Button } from "@/components/ui/button";
import { RetroModeSwitcher } from "@/components/ui/retro-mode-switcher";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { navItems } from "@/config/nav-items";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import MobileNav from "./mobile-nav";

const GITHUB_URL = "https://github.com/jubscodes/cyphercn-ui";

export function SiteHeader() {
  const pathname = usePathname();
  const sidebar = useSidebar();
  const isMobile = useIsMobile();
  const isInSidebar = pathname.startsWith("/dashboard");
  const showMobileNav = !isInSidebar && isMobile;

  let leftSlot: ReactNode = null;
  if (isInSidebar) {
    leftSlot = (
      <>
        <Button
          className="h-8 w-8"
          onClick={sidebar.toggleSidebar}
          size="icon"
          variant="ghost"
        >
          <SidebarIcon />
        </Button>
        <Separator className="mr-2 h-4" orientation="vertical" />
      </>
    );
  } else if (showMobileNav) {
    leftSlot = (
      <div className="flex">
        <MobileNav />
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        {leftSlot}

        <Link
          className={cn(
            "cyphercn flex shrink-0 items-center font-semibold tracking-tight",
            isInSidebar ? "ml-0" : "ml-0 md:mr-4"
          )}
          href="/"
        >
          CypherCN
        </Link>

        <nav
          aria-label="Main"
          className="hidden flex-1 items-center gap-1 md:flex"
        >
          {navItems.header.map((item) => (
            <Button asChild key={item.href} size="sm" variant="ghost">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchDocumentation />
          <Button asChild size="icon" variant="ghost">
            <a
              aria-label="GitHub repository"
              href={GITHUB_URL}
              rel="noopener"
              target="_blank"
            >
              <svg
                aria-hidden
                className="size-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.218.682-.486 0-.24-.008-.874-.013-1.713-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <RetroModeSwitcher />
        </div>
      </div>
    </header>
  );
}
