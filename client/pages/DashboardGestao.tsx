import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CardInfo } from "@/components/dashboard/CardInfo";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { TabelaResponsiva } from "@/components/dashboard/TabelaResponsiva";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { BarChart3, Calendar, Search, Users, Wallet } from "lucide-react";
import { mockAlertasGestao, mockCronogramaOficinas, mockFluxoCaixaMensal } from "@/lib/mockData";

export default function DashboardGestao() {
  const saldoMes = mockFluxoCaixaMensal[mockFluxoCaixaMensal.length - 1];
  const saldoValor = saldoMes.entradas - saldoMes.saidas;

  return (
    <DashboardLayout role="gestao" title="Gestão Administrativa">
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Visão Geral</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Indicadores institucionais e acompanhamento.</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/gestao/relatorios">Ver relatórios</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/dashboard/gestao/financeiro"><Wallet className="h-4 w-4 mr-2" /> Financeiro (leitura)</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <CardInfo title="Impacto Social" value="1.2k" icon={BarChart3} description="Pessoas atendidas" />
          <CardInfo title="Unidades" value="5" icon={Users} description="Unidades ativas" />
          <CardInfo title="Alertas" value={mockAlertasGestao.length} icon={Search} description="Pendências e riscos" iconColor="text-destructive" />
          <CardInfo title="Saldo do mês" value={`R$ ${saldoValor.toLocaleString("pt-BR")}`} icon={Wallet} description="Entradas - Saídas" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard
            title="Fluxo de Caixa (últimos meses)"
            description="Entradas vs saídas"
            className="lg:col-span-2"
            headerAction={
              <Button size="sm" variant="outline" asChild>
                <Link to="/dashboard/gestao/financeiro">Detalhar</Link>
              </Button>
            }
          >
            <ChartContainer
              className="h-52 sm:h-64 w-full"
              config={{
                entradas: { label: "Entradas", color: "hsl(var(--primary))" },
                saidas: { label: "Saídas", color: "hsl(var(--destructive))" },
              }}
            >
              <BarChart data={mockFluxoCaixaMensal} margin={{ left: 8, right: 8 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="mes" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="entradas" fill="var(--color-entradas)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="saidas" fill="var(--color-saidas)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </DashboardCard>

          <DashboardCard title="Alertas de Gestão" description="Ações recomendadas">
            <div className="space-y-3">
              {mockAlertasGestao.map((a, idx) => (
                <div key={idx} className="p-3 rounded-lg border bg-white">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-sm">{a.tipo}</p>
                    <Badge variant={a.severidade === "alta" ? "destructive" : a.severidade === "media" ? "secondary" : "outline"}>
                      {a.severidade}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{a.mensagem}</p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/dashboard/gestao/frequencia">Monitorar frequência</Link>
              </Button>
            </div>
          </DashboardCard>
        </div>

        <DashboardCard
          title="Cronograma de Oficinas"
          description="Visão rápida do itinerário"
          headerAction={
            <Button size="sm" variant="outline" asChild>
              <Link to="/dashboard/gestao/cronograma"><Calendar className="h-4 w-4 mr-2" /> Abrir</Link>
            </Button>
          }
        >
          <TabelaResponsiva
            columns={[
              { header: "Oficina", accessor: "oficina" },
              { header: "Dia", accessor: "dia" },
              { header: "Horário", accessor: "horario" },
              { header: "Sala", accessor: "sala" },
              { header: "Turma", accessor: "turma" },
            ]}
            data={mockCronogramaOficinas}
          />
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}

