"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { auth, signOut } from "@/auth";
import { NotebookPen } from "lucide-react";
import { sidebar_newdoc_click } from "@/lib/utils";
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
    icon: Settings,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const docsportion = [];

export function AppSidebar() {
  // const { data: session } = useSession();
  // if (session === null) return <h1>load</h1>;

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-gray">
        <SidebarContent className="flex flex-row items-center justify-between">
          <Avatar className="w-6 h-6">
            <AvatarImage src={""} />
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
