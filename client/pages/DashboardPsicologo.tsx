import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CardInfo } from "@/components/dashboard/CardInfo";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { TabelaResponsiva } from "@/components/dashboard/TabelaResponsiva";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, FileText, History, Stethoscope, Users } from "lucide-react";
import { mockAnotacoesPsicologo, mockAtendimentosHoje, mockPacientesPsicologo } from "@/lib/mockData";

export default function DashboardPsicologo() {
  return (
    <DashboardLayout role="psicologo" title="Psicólogo">
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Acompanhamento Clínico</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Acesso restrito e dados essenciais.</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <Button size="sm" asChild>
              <Link to="/dashboard/psicologo/anotacoes"><FileText className="h-4 w-4 mr-2" /> Nova anotação</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/dashboard/psicologo/pacientes"><Users className="h-4 w-4 mr-2" /> Ver pacientes</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <CardInfo title="Atendimentos Hoje" value={mockAtendimentosHoje.length} icon={Stethoscope} description="Agenda do dia" />
          <CardInfo title="Pacientes Ativos" value={mockPacientesPsicologo.length} icon={Users} description="Em acompanhamento" />
          <CardInfo title="Prontuários" value="120" icon={ClipboardCheck} description="Total" />
          <CardInfo title="Alertas" value="1" icon={History} description="Prioridade alta" iconColor="text-destructive" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard title="Agenda do Dia" description="Atendimentos e status" className="lg:col-span-2">
            <TabelaResponsiva
              columns={[
                { header: "Horário", accessor: "horario" },
                { header: "Paciente", accessor: "paciente" },
                { header: "Tipo", accessor: "tipo" },
                {
                  header: "Status",
                  accessor: "status",
                  cell: (r) => (
                    <Badge variant={r.status === "Pendente" ? "destructive" : r.status === "Confirmado" ? "secondary" : "outline"}>
                      {r.status}
                    </Badge>
                  ),
                },
              ]}
              data={mockAtendimentosHoje}
            />
          </DashboardCard>

          <DashboardCard title="Últimas Anotações" description="Resumo terapêutico" headerAction={<Button size="sm" variant="outline" asChild><Link to="/dashboard/psicologo/anotacoes">Abrir</Link></Button>}>
            <div className="space-y-3">
              {mockAnotacoesPsicologo.map((n, idx) => (
                <div key={idx} className="p-3 rounded-lg border bg-white">
                  <p className="text-sm font-semibold">{n.paciente}</p>
                  <p className="text-xs text-muted-foreground">{n.data}</p>
                  <p className="text-xs mt-2">{n.resumo}</p>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <DashboardCard title="Pacientes" description="Dados essenciais e condições especiais" headerAction={<Button size="sm" variant="outline" asChild><Link to="/dashboard/psicologo/pacientes">Abrir</Link></Button>}>
          <TabelaResponsiva
            columns={[
              { header: "Nome", accessor: "nome" },
              { header: "Idade", accessor: "idade" },
              { header: "Condições", accessor: "condicao" },
            ]}
            data={mockPacientesPsicologo}
          />
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}

