"use client";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { memo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SessionProvider } from "next-auth/react";
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <PathDependentHeader />

          {children}
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
}
function PathDependentHeader() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex mt-2 flex-row justify-start items-center">
      <SidebarTrigger className="w-14" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">{segments[0]}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{segments[1]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
