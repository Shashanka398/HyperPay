import dynamic from "next/dynamic";

const LucideIcon = dynamic(() => import("lucide-react").then(mod => mod.Home))


export interface NavItem {
    title: string;
    url: string;
    icon?: typeof LucideIcon;
}