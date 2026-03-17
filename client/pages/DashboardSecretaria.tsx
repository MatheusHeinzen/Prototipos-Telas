import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CardInfo } from "@/components/dashboard/CardInfo";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { TabelaResponsiva } from "@/components/dashboard/TabelaResponsiva";
import { ModuloEmDesenvolvimento } from "@/components/dashboard/ModuloEmDesenvolvimento";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardList,
  UserPlus,
  ArrowUpRight,
  Search,
  Clock,
  History
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardSecretaria() {
  const solicitacoesRecentes = [
    { id: 1, aluno: "Mateus Lima", tipo: "Transferência", data: "Hoje", status: "Pendente" },
    { id: 2, aluno: "Bianca Rocha", tipo: "Atestado Médico", data: "Hoje", status: "Em análise" },
    { id: 3, aluno: "Carla Souza", tipo: "Novo Cadastro", data: "Ontem", status: "Concluído" },
  ];

  const oficinasStatus = [
    { nome: "Violão Nível 1", turmas: 2, alunos: 18, vagas: 2, ocupacao: "90%" },
    { nome: "Taekwondo Social", turmas: 3, alunos: 45, vagas: 5, ocupacao: "88%" },
    { nome: "Ballet Clássico", turmas: 2, alunos: 24, vagas: 0, ocupacao: "100%" },
    { nome: "Culinária Kids", turmas: 1, alunos: 12, vagas: 0, ocupacao: "100%" },
  ];

  return (
    <DashboardLayout role="secretaria" title="Secretaria Acadêmica">
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Controle Acadêmico 🏛️</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Gestão de matrículas, oficinas e documentação do CADI.</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/dashboard/secretaria/alunos"><Search className="h-4 w-4" /> Buscar Aluno</Link>
            </Button>
            <Button className="gap-2" asChild>
              <Link to="/dashboard/secretaria/alunos"><UserPlus className="h-4 w-4" /> Novo Aluno</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <CardInfo 
            title="Total de Alunos" 
            value="452" 
            icon={Users} 
            description="Ativos no sistema"
            trend={{ value: 12, isUp: true }}
          />
          <CardInfo 
            title="Lista de Espera" 
            value="38" 
            icon={History} 
            iconColor="text-amber-600"
            description="Aguardando vaga"
          />
          <CardInfo 
            title="Oficinas Ativas" 
            value="14" 
            icon={BookOpen} 
            description="Em 32 turmas totais"
          />
          <CardInfo 
            title="Pendências Doc." 
            value="24" 
            icon={ClipboardList} 
            iconColor="text-destructive"
            description="Arquivos faltando"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard 
            title="Status das Oficinas" 
            description="Monitoramento de ocupação por oficina"
            className="lg:col-span-2"
            headerAction={
              <Button size="sm" variant="outline" className="gap-1" asChild>
                <Link to="/dashboard/secretaria/turmas">Nova turma</Link>
              </Button>
            }
          >
            <TabelaResponsiva 
              columns={[
                { header: "Oficina", accessor: "nome", cell: (v) => <span className="font-bold">{v.nome}</span> },
                { header: "Turmas", accessor: "turmas" },
                { header: "Alunos", accessor: "alunos" },
                { header: "Vagas", accessor: "vagas", cell: (v) => <span className={v.vagas === 0 ? "text-destructive font-bold" : ""}>{v.vagas}</span> },
                { 
                  header: "Ocupação", 
                  accessor: "ocupacao",
                  cell: (v) => (
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-slate-100 rounded-full h-1.5 flex-1 max-w-[60px]">
                        <div 
                          className={v.ocupacao === "100%" ? "bg-destructive h-1.5 rounded-full" : "bg-primary h-1.5 rounded-full"}
                          style={{ width: v.ocupacao }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">{v.ocupacao}</span>
                    </div>
                  )
                }
              ]} 
              data={oficinasStatus} 
            />
          </DashboardCard>

          <DashboardCard title="Solicitações Pendentes" description="Ações imediatas necessárias">
            <div className="space-y-4">
              {solicitacoesRecentes.map((req) => (
                <div key={req.id} className="p-4 rounded-xl border bg-white shadow-sm hover:border-primary/50 transition-colors group">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-sm group-hover:text-primary transition-colors">{req.aluno}</p>
                      <p className="text-xs text-muted-foreground">{req.tipo}</p>
                    </div>
                    <Badge variant={req.status === "Concluído" ? "secondary" : "outline"} className="text-[10px]">
                      {req.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {req.data}
                    </span>
                    <Button variant="ghost" size="sm" className="h-7 text-[10px] gap-1">
                      Analisar <ArrowUpRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs">Ver Todas Solicitações</Button>
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <DashboardCard title="Matrículas por Mês" description="Em desenvolvimento">
            <ModuloEmDesenvolvimento label="Gráfico de crescimento de matrículas" minHeight="h-44 sm:h-48" />
          </DashboardCard>
          
          <DashboardCard title="Documentos Importantes" description="Relatórios e listas">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 rounded-lg border bg-slate-50 hover:bg-white hover:shadow-md transition-all cursor-pointer text-center space-y-2">
                <ClipboardList className="h-8 w-8 text-primary mx-auto" />
                <p className="text-xs font-bold">Relatório Mensal</p>
              </div>
              <div className="p-4 rounded-lg border bg-slate-50 hover:bg-white hover:shadow-md transition-all cursor-pointer text-center space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <p className="text-xs font-bold">Lista por Turma</p>
              </div>
              <div className="p-4 rounded-lg border bg-slate-50 hover:bg-white hover:shadow-md transition-all cursor-pointer text-center space-y-2">
                <GraduationCap className="h-8 w-8 text-primary mx-auto" />
                <p className="text-xs font-bold">Certificados</p>
              </div>
              <div className="p-4 rounded-lg border bg-slate-50 hover:bg-white hover:shadow-md transition-all cursor-pointer text-center space-y-2">
                <History className="h-8 w-8 text-primary mx-auto" />
                <p className="text-xs font-bold">Histórico Geral</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
}
