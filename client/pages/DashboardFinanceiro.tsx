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
import { BarChart3, Heart, PiggyBank, Receipt, Wallet } from "lucide-react";
import { mockContasPagar, mockContasReceber, mockDoacoes, mockFluxoCaixaMensal, mockNotasFiscais } from "@/lib/mockData";

export default function DashboardFinanceiro() {
  const pendencias = mockContasPagar.filter((c) => c.status === "Pendente").length;

  return (
    <DashboardLayout role="financeiro" title="Financeiro">
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Painel Financeiro</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Lançamentos, notas fiscais e doações.</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <Button size="sm" asChild>
              <Link to="/dashboard/financeiro/pagar"><Wallet className="h-4 w-4 mr-2" /> Nova despesa</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/dashboard/financeiro/notas"><Receipt className="h-4 w-4 mr-2" /> Emitir nota</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <CardInfo title="Pendências" value={pendencias} icon={BarChart3} description="Contas a pagar pendentes" iconColor="text-destructive" />
          <CardInfo title="A Pagar" value="R$ 8.5k" icon={Wallet} description="Total estimado" />
          <CardInfo title="A Receber" value="R$ 12k" icon={PiggyBank} description="Entradas previstas" />
          <CardInfo title="Doações" value="R$ 2.3k" icon={Heart} description="Últimos 30 dias" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard title="Fluxo de Caixa" description="Entradas vs saídas" className="lg:col-span-2">
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

          <DashboardCard title="Notas Fiscais" description="Últimas emissões" headerAction={<Button size="sm" variant="outline" asChild><Link to="/dashboard/financeiro/notas">Ver todas</Link></Button>}>
            <div className="space-y-3">
              {mockNotasFiscais.slice(0, 2).map((nf) => (
                <div key={nf.numero} className="p-3 rounded-lg border bg-white">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-sm">{nf.numero}</p>
                    <Badge variant="secondary">{nf.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{nf.data} • {nf.valor}</p>
                  <p className="text-xs mt-1">{nf.descricao}</p>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <DashboardCard title="Contas a Pagar" description="Despesas registradas" headerAction={<Button size="sm" variant="outline" asChild><Link to="/dashboard/financeiro/pagar">Abrir</Link></Button>}>
            <TabelaResponsiva
              columns={[
                { header: "Descrição", accessor: "descricao" },
                { header: "Vencimento", accessor: "vencimento" },
                { header: "Valor", accessor: "valor" },
                {
                  header: "Status",
                  accessor: "status",
                  cell: (r) => (
                    <Badge variant={r.status === "Pendente" ? "destructive" : "secondary"}>{r.status}</Badge>
                  ),
                },
              ]}
              data={mockContasPagar}
            />
          </DashboardCard>

          <DashboardCard title="Doações" description="Últimas doações" headerAction={<Button size="sm" variant="outline" asChild><Link to="/dashboard/financeiro/doacoes">Abrir</Link></Button>}>
            <TabelaResponsiva
              columns={[
                { header: "Padrinho", accessor: "padrinho" },
                { header: "Data", accessor: "data" },
                { header: "Valor", accessor: "valor" },
                { header: "Forma", accessor: "forma" },
                { header: "Status", accessor: "status" },
              ]}
              data={mockDoacoes}
            />
          </DashboardCard>
        </div>

        <DashboardCard title="Contas a Receber" description="Receitas previstas" headerAction={<Button size="sm" variant="outline" asChild><Link to="/dashboard/financeiro/receber">Abrir</Link></Button>}>
          <TabelaResponsiva
            columns={[
              { header: "Descrição", accessor: "descricao" },
              { header: "Previsão", accessor: "previsao" },
              { header: "Valor", accessor: "valor" },
              { header: "Status", accessor: "status" },
            ]}
            data={mockContasReceber}
          />
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}

