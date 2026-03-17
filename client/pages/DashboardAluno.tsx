import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CardInfo } from "@/components/dashboard/CardInfo";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { TabelaResponsiva } from "@/components/dashboard/TabelaResponsiva";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  ClipboardCheck, 
  Clock, 
  Calendar, 
  AlertCircle,
  FileText,
  FilePlus,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function DashboardAluno() {
  const frequenciaPorOficina = [
    { oficina: "Desenvolvimento Web", presencas: 18, faltas: 2 },
    { oficina: "Inglês Aplicado", presencas: 12, faltas: 1 },
    { oficina: "Robótica", presencas: 9, faltas: 0 },
  ];

  const aulasHoje = [
    { horario: "08:00 - 09:30", oficina: "Desenvolvimento Web", turma: "Turma A - Manhã", professor: "Ricardo Moraes", sala: "Laboratório 01" },
    { horario: "10:00 - 11:30", oficina: "Inglês Aplicado", turma: "Turma B - Manhã", professor: "Julia Mendes", sala: "Sala 04" },
  ];

  const comunicadosRecentes = [
    { data: "15 Mai", titulo: "Renovação de Matrícula nas Oficinas", tipo: "Importante", cor: "destructive" },
    { data: "12 Mai", titulo: "Oficina de Robótica - Novas Vagas", tipo: "Novidade", cor: "default" },
    { data: "10 Mai", titulo: "Passeio Cultural - Inscrições Abertas", tipo: "Evento", cor: "secondary" },
  ];

  return (
    <DashboardLayout role="aluno" title="Início">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Olá, João Silva! 👋</h2>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">Seja bem-vindo ao seu portal do aluno.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <CardInfo 
            title="Frequência Geral" 
            value="92%" 
            icon={ClipboardCheck} 
            description="Acima da média mínima (75%)"
            trend={{ value: 2, isUp: true }}
          />
          <CardInfo 
            title="Oficinas Ativas" 
            value="3" 
            icon={Calendar} 
            iconColor="text-secondary-foreground"
            description="Matriculado este semestre"
          />
          <CardInfo 
            title="Horas Concluídas" 
            value="124h" 
            icon={Clock} 
            description="Total acumulado no ano"
          />
          <CardInfo 
            title="Comunicados" 
            value="2 novos" 
            icon={AlertCircle} 
            iconColor="text-destructive"
            description="Pendentes de leitura"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard 
            title="Horário de Hoje" 
            description="Suas aulas para esta quarta-feira"
            className="lg:col-span-2"
          >
            <TabelaResponsiva
              columns={[
                { header: "Horário", accessor: "horario", cell: (v) => <span className="font-semibold">{v.horario}</span> },
                { header: "Oficina", accessor: "oficina" },
                { header: "Turma", accessor: "turma" },
                { header: "Professor", accessor: "professor" },
                { header: "Local", accessor: "sala" },
                {
                  header: "Status",
                  accessor: "status",
                  cell: () => <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">Confirmada</Badge>
                }
              ]}
              data={aulasHoje}
            />
          </DashboardCard>

          <DashboardCard 
            title="Últimos Comunicados" 
            description="Fique por dentro das novidades"
          >
            <div className="space-y-4">
              {comunicadosRecentes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors border">
                  <div className="text-center shrink-0 w-12 pt-1">
                    <span className="block text-xs font-bold uppercase text-muted-foreground">{item.data.split(' ')[1]}</span>
                    <span className="block text-lg font-bold leading-none">{item.data.split(' ')[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{item.titulo}</p>
                    <Badge variant={item.cor as any} className="mt-1 h-5 text-[10px]">{item.tipo}</Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2" asChild>
                <Link to="/dashboard/aluno/comunicados">Ver Todos</Link>
              </Button>
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <DashboardCard
            title="Minha Frequência Detalhada"
            description="Gráfico por oficina (presenças e faltas)"
            headerAction={
              <Button size="sm" variant="outline" className="gap-1" asChild>
                <Link to="/dashboard/aluno/frequencia">Ver detalhes <ArrowRight className="h-3 w-3" /></Link>
              </Button>
            }
          >
            <ChartContainer
              className="h-44 sm:h-48 w-full"
              config={{
                presencas: { label: "Presenças", color: "hsl(var(--primary))" },
                faltas: { label: "Faltas", color: "hsl(var(--destructive))" },
              }}
            >
              <BarChart data={frequenciaPorOficina} margin={{ left: 8, right: 8 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="oficina"
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  tickMargin={8}
                  tickFormatter={(value) => (typeof value === "string" ? value.slice(0, 10) : String(value))}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="presencas" fill="var(--color-presencas)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="faltas" fill="var(--color-faltas)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </DashboardCard>
          
          <DashboardCard
            title="Arquivos e Documentos"
            description="Documentos disponíveis para download"
            headerAction={
              <Button size="sm" className="gap-1" asChild>
                <Link to="/dashboard/aluno/atestado"><FilePlus className="h-3 w-3" /> Enviar atestado</Link>
              </Button>
            }
          >
            <div className="space-y-3">
              {[
                { name: "Declaração de Matrícula", date: "02/05/2024" },
                { name: "Boletim - 1º Bimestre", date: "28/04/2024" },
                { name: "Contrato de Prestação", date: "15/01/2024" },
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2 p-3 rounded-lg border bg-white shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="h-5 w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">Baixar</Button>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
}
