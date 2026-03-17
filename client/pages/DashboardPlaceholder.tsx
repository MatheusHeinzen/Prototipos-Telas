import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Role } from "@/components/AppSidebar";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { CardInfo } from "@/components/dashboard/CardInfo";
import { ModuloEmDesenvolvimento } from "@/components/dashboard/ModuloEmDesenvolvimento";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  ClipboardCheck, 
  ShieldCheck,
  AlertCircle
} from "lucide-react";

interface DashboardPlaceholderProps {
  role: Role;
  title: string;
}

const roleData: Record<string, any> = {
  professor: {
    stats: [
      { title: "Minhas Turmas", value: "4", icon: Users },
      { title: "Alunos Total", value: "120", icon: BookOpen },
      { title: "Frequência Média", value: "88%", icon: ClipboardCheck },
      { title: "Pendências", value: "2", icon: AlertCircle, iconColor: "text-destructive" },
    ]
  },
  secretaria: {
    stats: [
      { title: "Novas Matrículas", value: "15", icon: Users },
      { title: "Vagas Oficinas", value: "32", icon: BookOpen },
      { title: "Solicitações", value: "8", icon: AlertCircle },
      { title: "Total Alunos", value: "450", icon: ShieldCheck },
    ]
  },
  gestao: {
    stats: [
      { title: "Impacto Social", value: "1.2k", icon: BarChart3 },
      { title: "Unidades", value: "5", icon: ShieldCheck },
      { title: "Voluntários", value: "45", icon: Users },
      { title: "Orçamento", value: "OK", icon: ClipboardCheck },
    ]
  },
  financeiro: {
    stats: [
      { title: "A Receber", value: "R$ 12k", icon: BarChart3 },
      { title: "A Pagar", value: "R$ 8.5k", icon: AlertCircle, iconColor: "text-destructive" },
      { title: "Doações", value: "R$ 2.3k", icon: Users },
      { title: "Fluxo Caixa", value: "+15%", icon: ClipboardCheck },
    ]
  },
  psicologo: {
    stats: [
      { title: "Atendimentos Hoje", value: "6", icon: Users },
      { title: "Pacientes Ativos", value: "24", icon: ShieldCheck },
      { title: "Prontuários", value: "120", icon: ClipboardCheck },
      { title: "Alertas", value: "1", icon: AlertCircle, iconColor: "text-destructive" },
    ]
  },
};

export default function DashboardPlaceholder({ role, title }: DashboardPlaceholderProps) {
  const data = roleData[role] || roleData.secretaria;

  return (
    <DashboardLayout role={role} title={title}>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Painel {title}</h2>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">Bem-vindo ao sistema de gestão institucional CADI.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {data.stats.map((stat: any, idx: number) => (
            <CardInfo 
              key={idx}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              iconColor={stat.iconColor}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard title="Atividades Recentes" description="Em desenvolvimento" className="lg:col-span-2">
            <ModuloEmDesenvolvimento label="Atividades recentes do sistema" minHeight="h-56 sm:h-64" />
          </DashboardCard>
          
          <DashboardCard title="Alertas do Sistema">
            <div className="space-y-4">
              <div className="p-3 border-l-4 border-l-destructive bg-destructive/5 rounded-r-lg">
                <p className="text-sm font-bold">Aviso Importante</p>
                <p className="text-xs text-muted-foreground">O sistema passará por manutenção hoje às 22h.</p>
              </div>
              <div className="p-3 border-l-4 border-l-blue-500 bg-blue-50 rounded-r-lg">
                <p className="text-sm font-bold">Atualização</p>
                <p className="text-xs text-muted-foreground">Novos recursos de relatórios disponíveis.</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
}
