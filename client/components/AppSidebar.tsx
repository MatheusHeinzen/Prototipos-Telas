import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  Clock,
  User,
  Bell,
  FileText,
  Users,
  ClipboardCheck,
  BookOpen,
  GraduationCap,
  Briefcase,
  History,
  FilePlus,
  BarChart3,
  Search,
  Settings,
  LogOut,
  Wallet,
  Receipt,
  PiggyBank,
  Stethoscope,
  Heart
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export type Role = "aluno" | "professor" | "secretaria" | "gestao" | "financeiro" | "psicologo";

interface AppSidebarProps {
  role: Role;
}

const menuConfigs: Record<Role, { label: string; icon: any; path: string }[]> = {
  aluno: [
    { label: "Início", icon: LayoutDashboard, path: "/dashboard/aluno" },
    { label: "Minha Frequência", icon: ClipboardCheck, path: "/dashboard/aluno/frequencia" },
    { label: "Meus Horários", icon: Clock, path: "/dashboard/aluno/horarios" },
    { label: "Meus Dados", icon: User, path: "/dashboard/aluno/dados" },
    { label: "Comunicados", icon: Bell, path: "/dashboard/aluno/comunicados" },
    { label: "Enviar Atestado", icon: FilePlus, path: "/dashboard/aluno/atestado" },
  ],
  professor: [
    { label: "Início", icon: LayoutDashboard, path: "/dashboard/professor" },
    { label: "Minhas Turmas", icon: Users, path: "/dashboard/professor/turmas" },
    { label: "Registrar Frequência", icon: ClipboardCheck, path: "/dashboard/professor/frequencia" },
    { label: "Pareceres Descritivos", icon: FileText, path: "/dashboard/professor/pareceres" },
    { label: "Horários", icon: Clock, path: "/dashboard/professor/horarios" },
    { label: "Meus Dados", icon: User, path: "/dashboard/professor/dados" },
  ],
  secretaria: [
    { label: "Início", icon: LayoutDashboard, path: "/dashboard/secretaria" },
    { label: "Cadastro de Alunos", icon: GraduationCap, path: "/dashboard/secretaria/alunos" },
    { label: "Gerenciar Turmas", icon: Users, path: "/dashboard/secretaria/turmas" },
    { label: "Cadastro de Professores", icon: Briefcase, path: "/dashboard/secretaria/professores" },
    { label: "Oficinas", icon: BookOpen, path: "/dashboard/secretaria/oficinas" },
    { label: "Lista de Espera", icon: History, path: "/dashboard/secretaria/espera" },
    { label: "Documentos", icon: FileText, path: "/dashboard/secretaria/documentos" },
  ],
  gestao: [
    { label: "Início", icon: LayoutDashboard, path: "/dashboard/gestao" },
    { label: "Relatórios Institucionais", icon: BarChart3, path: "/dashboard/gestao/relatorios" },
    { label: "Monitoramento Frequência", icon: Search, path: "/dashboard/gestao/frequencia" },
    { label: "Cronograma Oficinas", icon: Calendar, path: "/dashboard/gestao/cronograma" },
    { label: "Voluntários", icon: Heart, path: "/dashboard/gestao/voluntarios" },
    { label: "Dados Financeiros", icon: Wallet, path: "/dashboard/gestao/financeiro" },
  ],
  financeiro: [
    { label: "Início", icon: LayoutDashboard, path: "/dashboard/financeiro" },
    { label: "Notas Fiscais", icon: Receipt, path: "/dashboard/financeiro/notas" },
    { label: "Contas a Pagar", icon: Wallet, path: "/dashboard/financeiro/pagar" },
    { label: "Contas a Receber", icon: PiggyBank, path: "/dashboard/financeiro/receber" },
    { label: "Doações", icon: Heart, path: "/dashboard/financeiro/doacoes" },
    { label: "Relatórios Financeiros", icon: BarChart3, path: "/dashboard/financeiro/relatorios" },
    { label: "Meus Dados", icon: User, path: "/dashboard/financeiro/dados" },
  ],
  psicologo: [
    { label: "Início", icon: LayoutDashboard, path: "/dashboard/psicologo" },
    { label: "Pacientes", icon: Users, path: "/dashboard/psicologo/pacientes" },
    { label: "Anotações Terapêuticas", icon: FileText, path: "/dashboard/psicologo/anotacoes" },
    { label: "Histórico Clínico", icon: History, path: "/dashboard/psicologo/historico" },
    { label: "Meus Dados", icon: User, path: "/dashboard/psicologo/dados" },
  ],
};

const roleLabels: Record<Role, string> = {
  aluno: "Aluno / Responsável",
  professor: "Professor",
  secretaria: "Secretaria Acadêmica",
  gestao: "Gestão Administrativa",
  financeiro: "Financeiro",
  psicologo: "Psicólogo",
};

const roleThemes: Record<Role, string> = {
  aluno: "bg-primary/5 border-primary/20",
  professor: "bg-green-50 border-green-200",
  secretaria: "bg-blue-50 border-blue-200",
  gestao: "bg-slate-50 border-slate-200",
  financeiro: "bg-amber-50 border-amber-200",
  psicologo: "bg-purple-50 border-purple-200",
};

const iconThemes: Record<Role, string> = {
  aluno: "text-primary",
  professor: "text-green-600",
  secretaria: "text-blue-600",
  gestao: "text-slate-600",
  financeiro: "text-amber-600",
  psicologo: "text-purple-600",
};

export function AppSidebar({ role }: AppSidebarProps) {
  const location = useLocation();
  const menuItems = menuConfigs[role];
  const theme = roleThemes[role];
  const iconTheme = iconThemes[role];

  return (
    <Sidebar collapsible="icon" className={cn("border-r transition-colors duration-300", theme)}>
      <SidebarHeader className="p-4 flex flex-row items-center gap-2">
        <div className={cn("p-1.5 rounded-lg shrink-0", role === 'aluno' ? 'bg-primary' : 'bg-muted')}>
          <GraduationCap className={cn("h-5 w-5", role === 'aluno' ? 'text-white' : iconTheme)} />
        </div>
        <div className="flex flex-col truncate group-data-[collapsible=icon]:hidden">
          <span className="font-bold text-lg text-primary leading-tight">CADI</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
            Portal Institucional
          </span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            {roleLabels[role]}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.path}
                    tooltip={item.label}
                    className={cn(
                      "transition-all duration-200",
                      location.pathname === item.path && "bg-background shadow-sm ring-1 ring-border"
                    )}
                  >
                    <Link to={item.path}>
                      <item.icon className={cn("h-4 w-4", location.pathname === item.path ? iconTheme : "text-muted-foreground")} />
                      <span className={cn(location.pathname === item.path && "font-bold")}>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Sair">
              <Link to="/" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
