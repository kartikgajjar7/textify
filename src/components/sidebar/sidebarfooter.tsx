"use client";
import React from "react";
import { redirect, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../ui/sidebar";
import { signoutserveraction } from "../../../actions/auth";
import { ChevronUp } from "lucide-react";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SidebarFootercomp = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") return "";
  if (!session) return null; // Don't render footer if no session
  const firstName = session?.user?.name?.split(" ")[0] || "";
  if (session === null) return <h1>load</h1>;
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="flex flex-row justify-between items-center">
                <h1>{session?.user?.name}</h1>
                <ChevronUp />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
              <p className="text-xs ml-2  ">{session?.user?.email}</p>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={async () => {
                  await signOut();
                  window.location.reload();
                }}
              >
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
