"use client";
import { User, Home, Search, Settings } from "lucide-react";
import { useSession } from "next-auth/react";
import { SidebarFootercomp } from "./sidebarfooter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },

  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: Search,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const docsportion = [];

export function AppSidebar() {
  const { data: session } = useSession();
  if (session === null) return <h1>load</h1>;

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-gray">
        <SidebarContent className="flex flex-row items-center justify-between">
          <Avatar className="w-6 h-6">
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SidebarContent>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFootercomp />
    </Sidebar>
  );
}
