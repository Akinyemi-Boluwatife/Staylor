import Header from "./Header";
import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./AppSideBar";

function AppLayout() {
  return (
    // 1. Make the provider a FLEX container covering the full screen
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="w-full overflow-x-hidden">
        <Header />

        <main className="w-full min-w-0 flex-1 p-2.5 md:p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
