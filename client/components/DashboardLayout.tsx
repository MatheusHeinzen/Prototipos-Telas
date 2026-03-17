import React from "react";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { AppSidebar, Role } from "./AppSidebar";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: Role;
  title: string;
}

export function DashboardLayout({ children, role, title }: DashboardLayoutProps) {
  // Mock user data
  const user = {
    name: role === "aluno" ? "João Silva" : "Prof. Maria Santos",
    email: role === "aluno" ? "joao@exemplo.com" : "maria@cadi.org.br",
    avatar: ""
  };

  return (
    <SidebarProvider>
      <AppSidebar role={role} />
      <SidebarInset>
        <header className="flex h-14 sm:h-16 shrink-0 items-center justify-between gap-2 border-b px-3 sm:px-4 sticky top-0 bg-background/95 backdrop-blur z-40">
          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            <SidebarTrigger className="-ml-1 shrink-0" />
            <Separator orientation="vertical" className="mr-1 sm:mr-2 h-4 hidden sm:block" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Portal</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="truncate max-w-[120px] sm:max-w-none">{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden md:flex relative w-40 lg:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar..." className="pl-8 h-9 bg-muted/50 border-none" />
            </div>
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <Bell className="h-4 w-4 sm:h-5 w-5" />
              <span className="absolute top-1 right-1 h-1.5 w-1.5 sm:h-2 sm:w-2 bg-destructive rounded-full border-2 border-background"></span>
            </Button>
            <div className="flex items-center gap-2 sm:gap-3 pl-2 border-l">
              <div className="hidden lg:flex flex-col items-end text-sm">
                <span className="font-semibold leading-none truncate max-w-[100px]">{user.name}</span>
                <span className="text-xs text-muted-foreground leading-tight truncate max-w-[120px]">{user.email}</span>
              </div>
              <Avatar className="h-8 w-8 ring-2 ring-primary/10 ring-offset-2 shrink-0">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground font-medium text-sm">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-50/50">
          <div className="container mx-auto p-3 sm:p-4 lg:p-6 xl:p-8 max-w-full">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
