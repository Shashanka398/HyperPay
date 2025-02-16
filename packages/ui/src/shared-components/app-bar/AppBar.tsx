import dynamic from "next/dynamic"
import {NavItem} from "@/types/appBar.type"

const Home = dynamic(() => import("lucide-react").then(mod => mod.Home))
const Inbox = dynamic(() => import("lucide-react").then(mod => mod.Inbox))
const Calendar = dynamic(() => import("lucide-react").then(mod => mod.Calendar))
const Search = dynamic(() => import("lucide-react").then(mod => mod.Search))
const Settings = dynamic(() => import("lucide-react").then(mod => mod.Settings))

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"




export function AppSidebar({ navItems }: { navItems: NavItem[] }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon?<item.icon />:<></>}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
