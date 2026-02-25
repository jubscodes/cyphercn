import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ActiveThemeProvider } from "@/components/active-theme";
import { ScreenSize } from "@/components/screen-size";
import SearchDialog from "@/components/search";
import SiteFooter from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { sharedMetaData } from "@/lib/metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  ...sharedMetaData,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${ibmPlexMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <NuqsAdapter>
          <RootProvider
            search={{
              SearchDialog,
            }}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              disableTransitionOnChange
              enableSystem
            >
              <SidebarProvider className="flex flex-col">
                <ActiveThemeProvider>
                  <SiteHeader />
                  <div className="mx-auto w-full max-w-[1400px] flex-1">
                    {children}
                  </div>
                  <SiteFooter />
                  <Toaster />
                  <Analytics />
                  <SpeedInsights />
                  {process.env.APP_ENV === "development" && <ScreenSize />}
                </ActiveThemeProvider>
              </SidebarProvider>
            </ThemeProvider>
          </RootProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
