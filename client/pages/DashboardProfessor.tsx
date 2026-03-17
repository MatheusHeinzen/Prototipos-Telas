import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CardInfo } from "@/components/dashboard/CardInfo";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { TabelaResponsiva } from "@/components/dashboard/TabelaResponsiva";
import {
  Users,
  ClipboardCheck,
  Calendar,
  Clock,
  BookOpen,
  PlusCircle,
  MoreVertical,
  AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardProfessor() {
  const turmas = [
    { id: 1, nome: "Informática Kids", oficina: "Tecnologia", horario: "Ter/Qui - 08:00", alunos: 15, frequencia: "92%" },
    { id: 2, nome: "Pintura em Tela", oficina: "Artes", horario: "Seg/Qua - 14:00", alunos: 12, frequencia: "85%" },
    { id: 3, nome: "Futebol Social", oficina: "Esportes", horario: "Sex - 09:00", alunos: 22, frequencia: "78%" },
  ];

  const proximasAulas = [
    { horario: "08:00", turma: "Informática Kids", local: "Laboratório A", status: "Em breve" },
    { horario: "10:00", turma: "Robótica Nível 1", local: "Laboratório B", status: "Agendada" },
  ];

  return (
    <DashboardLayout role="professor" title="Dashboard do Professor">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Bem-vinda, Prof. Maria! 🍎</h2>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">Gerencie suas turmas e registros de frequência do CADI.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <CardInfo 
            title="Total de Alunos" 
            value="49" 
            icon={Users} 
            description="Em 4 turmas ativas"
          />
          <CardInfo 
            title="Presença Média" 
            value="85%" 
            icon={ClipboardCheck} 
            iconColor="text-green-600"
            description="Este mês"
            trend={{ value: 5, isUp: true }}
          />
          <CardInfo 
            title="Oficinas" 
            value="3" 
            icon={BookOpen} 
            description="Tecnologia, Artes, Esportes"
          />
          <CardInfo 
            title="Horas Aula" 
            value="18h" 
            icon={Clock} 
            description="Carga semanal"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard 
            title="Minhas Turmas" 
            description="Listagem de turmas ativas sob sua responsabilidade"
            className="lg:col-span-2"
            headerAction={
              <Button size="sm" className="gap-1" asChild>
                <Link to="/dashboard/professor/frequencia">
                  <PlusCircle className="h-4 w-4" /> Registrar Frequência
                </Link>
              </Button>
            }
          >
            <TabelaResponsiva 
              columns={[
                { header: "Turma", accessor: "nome", cell: (v) => <span className="font-bold">{v.nome}</span> },
                { header: "Oficina", accessor: "oficina" },
                { header: "Horário", accessor: "horario" },
                { header: "Alunos", accessor: "alunos" },
                { 
                  header: "Frequência", 
                  accessor: "frequencia",
                  cell: (v) => (
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-slate-100 rounded-full h-1.5 flex-1 max-w-[60px]">
                        <div 
                          className="bg-green-500 h-1.5 rounded-full" 
                          style={{ width: v.frequencia }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">{v.frequencia}</span>
                    </div>
                  )
                },
                {
                  header: "",
                  accessor: "id",
                  cell: (row) => (
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/dashboard/professor/frequencia?turma=${row.id}`} title="Fazer chamada">
                        <MoreVertical className="h-4 w-4" />
                      </Link>
                    </Button>
                  )
                }
              ]} 
              data={turmas} 
            />
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Próximas Atividades" description="Sua agenda de hoje">
              <div className="space-y-4">
                {proximasAulas.map((aula, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border bg-white shadow-sm">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{aula.turma}</p>
                      <p className="text-xs text-muted-foreground">{aula.horario} • {aula.local}</p>
                    </div>
                    <Badge variant="outline" className="text-[10px]">{aula.status}</Badge>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard
              title="Lembretes Acadêmicos"
              headerAction={
                <Button size="sm" variant="outline" className="gap-1" asChild>
                  <Link to="/dashboard/professor/pareceres">Registrar parecer</Link>
                </Button>
              }
            >
              <div className="space-y-3">
                <div className="flex gap-3 items-start p-3 rounded-lg bg-amber-50 border border-amber-100">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-amber-900">Pareceres Pendentes</p>
                    <p className="text-[10px] text-amber-700">3 alunos da Turma B precisam de avaliação.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <Calendar className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-blue-900">Reunião Pedagógica</p>
                    <p className="text-[10px] text-blue-700">Sexta-feira, às 17:00 no auditório.</p>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
