'use client'
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "./AppBar";
import { NavItem } from "../../types/appBar.type";
import ThemeToggle from "@/components/ui/ToggleButton";

export  function MainBar({ children ,navItems}: { children: React.ReactNode ,navItems:NavItem[]}) {
  return (
    <SidebarProvider>
      <AppSidebar navItems={navItems} />
      <main className="w-full h-full">
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-950">
               <SidebarTrigger />
               <ThemeToggle />
        </div>
   
        <div>
               {children}
        </div>
   
      </main>
    </SidebarProvider>
  );
}
