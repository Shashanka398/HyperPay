import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppBar";
import { NavItem } from "@/types/appBar.type";

export  function MainBar({ children ,navItems}: { children: React.ReactNode ,navItems:NavItem[]}) {
  return (
    <SidebarProvider>
      <AppSidebar navItems={navItems} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
