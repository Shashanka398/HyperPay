import { NavItem } from "../../types/appBar.type";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";

export function AppSidebar({ navItems }: { navItems: NavItem[] }) {
  return (
    <Sidebar className="border-r border-slate-800">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-3 flex items-center gap-2 mb-4 border-slate-800">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
              H
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HyperPay
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title} className="my-1 mx-2">
                  <SidebarMenuButton
                    asChild
                    className="px-4 py-2.5 rounded-l hover:bg-slate-300  dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      {item.icon ? (
                        <div className="text-slate-400">
                          <item.icon size={18} />
                        </div>
                      ) : (
                        <></>
                      )}
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}