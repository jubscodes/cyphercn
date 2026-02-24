import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import ChartBarMultiple from "@/components/ui/cypher/blocks/chart-bar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/cypher/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <SectionCards />
                  <div className="px-4 lg:px-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Visitors for the last 6 months</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ChartBarMultiple />
                      </CardContent>
                    </Card>
                  </div>
                  <DataTable data={data} />
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
