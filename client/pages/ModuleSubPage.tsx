import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { TabelaResponsiva } from "@/components/dashboard/TabelaResponsiva";
import { EstadoErro } from "@/components/dashboard/EstadoErro";
import { Role } from "@/components/AppSidebar";
import {
  mockFrequenciaAluno,
  mockHorariosAluno,
  mockComunicados,
  mockTurmasProfessor,
  mockChamadaAlunos,
  mockPareceres,
  mockAlunosSecretaria,
  mockTurmasSecretaria,
  mockListaEspera,
  mockContasPagar,
  mockContasReceber,
  mockDoacoes,
  mockNotasFiscais,
  mockVoluntarios,
  mockCronogramaOficinas,
  mockFluxoCaixaMensal,
  mockPacientesPsicologo,
  mockAtendimentosHoje,
  mockAnotacoesPsicologo,
  mockGradeHoraria,
} from "@/lib/mockData";
import { GradeHoraria } from "@/components/dashboard/GradeHoraria";
import { FormNovoAluno } from "@/components/dashboard/FormNovoAluno";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

function FormNovaAnotacao() {
  const [paciente, setPaciente] = useState("");
  const [resumo, setResumo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paciente.trim() || !resumo.trim()) {
      toast.error("Preencha paciente e resumo.");
      return;
    }
    toast.success("Anotação registrada (protótipo).");
    setPaciente("");
    setResumo("");
  };

  return (
    <DashboardCard title="Nova anotação terapêutica" description="Conteúdo restrito ao perfil psicólogo">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="paciente">Paciente</Label>
          <Input id="paciente" value={paciente} onChange={(e) => setPaciente(e.target.value)} placeholder="Ex.: Paciente A" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="resumo">Resumo</Label>
          <Input id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} placeholder="Resumo da sessão" />
        </div>
        <Button type="submit">Salvar anotação</Button>
      </form>
    </DashboardCard>
  );
}

function FormNovaDoacao() {
  const [padrinho, setPadrinho] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!padrinho.trim() || !valor.trim()) {
      toast.error("Preencha padrinho e valor.");
      return;
    }
    toast.success("Doação registrada (protótipo).");
    setPadrinho("");
    setValor("");
  };

  return (
    <DashboardCard title="Registrar doação" description="Lançamento rápido (protótipo)">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="padrinho">Padrinho</Label>
          <Input id="padrinho" value={padrinho} onChange={(e) => setPadrinho(e.target.value)} placeholder="Ex.: Padrinho A" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="valor">Valor</Label>
          <Input id="valor" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Ex.: R$ 150,00" />
        </div>
        <Button type="submit">Salvar doação</Button>
      </form>
    </DashboardCard>
  );
}

function FormDadosContato() {
  const [email, setEmail] = useState("joao@exemplo.com");
  const [telefone, setTelefone] = useState("(11) 98765-4321");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Dados de contato atualizados (protótipo).");
  };

  return (
    <DashboardCard title="Meus Dados" description="Atualize e-mail e telefone">
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(00) 00000-0000"
          />
        </div>
        <Button type="submit">Salvar</Button>
      </form>
    </DashboardCard>
  );
}

function FormEnvioAtestado() {
  const [obs, setObs] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Documento enviado com sucesso (protótipo).");
    setObs("");
  };

  return (
    <DashboardCard title="Enviar Atestado ou Justificativa" description="Upload de documento para regularizar faltas">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="border-2 border-dashed rounded-lg p-6 text-center text-muted-foreground">
          <p className="mb-3 text-sm">Arraste o arquivo aqui ou clique para selecionar.</p>
          <Input type="file" accept=".pdf,image/*" className="cursor-pointer max-w-xs mx-auto" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="obs">Observação (opcional)</Label>
          <Input
            id="obs"
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            placeholder="Ex.: Atestado médico dia 10/06"
          />
        </div>
        <Button type="submit">Enviar documento</Button>
      </form>
    </DashboardCard>
  );
}

interface ModuleSubPageProps {
  role: Role;
  slug: string;
  title: string;
}

export default function ModuleSubPage({ role, slug, title }: ModuleSubPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const showErro = searchParams.get("erro") === "1";

  const handleTentarNovamente = () => setSearchParams({});

  if (showErro) {
    return (
      <DashboardLayout role={role} title={title}>
        <div className="space-y-6">
          <EstadoErro
            titulo="Erro ao carregar dados"
            mensagem="Não foi possível carregar as informações. Tente novamente mais tarde."
            onTentarNovamente={handleTentarNovamente}
          />
        </div>
      </DashboardLayout>
    );
  }

  const content = renderContent(role, slug, title);
  return (
    <DashboardLayout role={role} title={title}>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-primary">{title}</h2>
          <p className="text-muted-foreground mt-1">Protótipo de tela – dados demonstrativos.</p>
        </div>
        {content}
      </div>
    </DashboardLayout>
  );
}

function renderContent(role: Role, slug: string, title: string): React.ReactNode {
  if (role === "aluno") {
    if (slug === "frequencia")
      return (
        <DashboardCard title="Minha Frequência" description="Histórico de presenças e faltas">
          <TabelaResponsiva
            columns={[
              { header: "Data", accessor: "data" },
              { header: "Oficina", accessor: "oficina" },
              { header: "Presença", accessor: "presenca" },
              { header: "Observação", accessor: "observacao" },
            ]}
            data={mockFrequenciaAluno}
          />
        </DashboardCard>
      );
    if (slug === "horarios")
      return (
        <DashboardCard title="Grade Horária" description="Seus horários por dia">
          <TabelaResponsiva
            columns={[
              { header: "Dia", accessor: "dia" },
              { header: "Horário", accessor: "horario" },
              { header: "Oficina", accessor: "oficina" },
              { header: "Sala", accessor: "sala" },
            ]}
            data={mockHorariosAluno}
          />
        </DashboardCard>
      );
    if (slug === "comunicados")
      return (
        <DashboardCard title="Comunicados" description="Mural institucional">
          <div className="space-y-4">
            {mockComunicados.map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg border">
                <div className="text-center shrink-0 w-12">
                  <span className="block text-xs font-bold uppercase text-muted-foreground">{c.data.split(" ")[1]}</span>
                  <span className="block text-lg font-bold">{c.data.split(" ")[0]}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{c.titulo}</p>
                  <Badge variant="secondary" className="mt-1">{c.tipo}</Badge>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      );
    if (slug === "atestado")
      return <FormEnvioAtestado />;
    if (slug === "dados")
      return <FormDadosContato />;
  }

  if (role === "professor") {
    if (slug === "turmas")
      return (
        <DashboardCard title="Minhas Turmas" description="Turmas sob sua responsabilidade">
          <TabelaResponsiva
            columns={[
              { header: "Turma", accessor: "nome", cell: (r) => <span className="font-bold">{r.nome}</span> },
              { header: "Oficina", accessor: "oficina" },
              { header: "Horário", accessor: "horario" },
              { header: "Alunos", accessor: "alunos" },
            ]}
            data={mockTurmasProfessor}
          />
        </DashboardCard>
      );
    if (slug === "frequencia")
      return (
        <DashboardCard title="Chamada Digital" description="Registrar presença/falta por aluno">
          <TabelaResponsiva
            columns={[
              { header: "Aluno", accessor: "nome" },
              { header: "Matrícula", accessor: "matricula" },
              { header: "Nasc.", accessor: "nascimento" },
              {
                header: "Status",
                accessor: "status",
                cell: (r) => (
                  <Badge variant={r.status === "presente" ? "default" : "destructive"}>{r.status === "presente" ? "Presente" : "Falta"}</Badge>
                ),
              },
            ]}
            data={mockChamadaAlunos}
          />
          <Button className="mt-4">Salvar chamada</Button>
        </DashboardCard>
      );
    if (slug === "pareceres")
      return (
        <DashboardCard title="Pareceres Descritivos" description="Anotações pedagógicas por aluno">
          <TabelaResponsiva
            columns={[
              { header: "Aluno", accessor: "aluno" },
              { header: "Data", accessor: "data" },
              { header: "Resumo", accessor: "resumo" },
            ]}
            data={mockPareceres}
          />
        </DashboardCard>
      );
    if (slug === "horarios")
      return (
        <DashboardCard title="Grade Horária" description="Itinerário das turmas">
          <GradeHoraria schedule={mockGradeHoraria} />
        </DashboardCard>
      );
    if (slug === "dados")
      return (
        <DashboardCard title="Meus Dados" description="Dados profissionais">
          <p className="text-sm text-muted-foreground">Formulário de perfil (protótipo).</p>
        </DashboardCard>
      );
  }

  if (role === "secretaria") {
    if (slug === "alunos")
      return (
        <div className="space-y-6">
          <FormNovoAluno />
          <DashboardCard title="Alunos cadastrados" description="Listagem de alunos e responsáveis">
            <TabelaResponsiva
              columns={[
                { header: "Nome", accessor: "nome" },
                { header: "Responsável", accessor: "responsavel" },
                { header: "Turma", accessor: "turma" },
                { header: "Status", accessor: "status" },
              ]}
              data={mockAlunosSecretaria}
            />
          </DashboardCard>
        </div>
      );
    if (slug === "turmas")
      return (
        <DashboardCard title="Turmas" description="Turmas e oficinas">
          <TabelaResponsiva
            columns={[
              { header: "Turma", accessor: "nome" },
              { header: "Oficina", accessor: "oficina" },
              { header: "Vagas", accessor: "vagas" },
              { header: "Ocupadas", accessor: "ocupadas" },
            ]}
            data={mockTurmasSecretaria}
          />
        </DashboardCard>
      );
    if (slug === "espera")
      return (
        <DashboardCard title="Lista de Espera" description="Pré-cadastro e fila de vagas">
          <TabelaResponsiva
            columns={[
              { header: "Posição", accessor: "posicao" },
              { header: "Nome", accessor: "nome" },
              { header: "Oficina desejada", accessor: "oficinaDesejada" },
              { header: "Data inscrição", accessor: "dataInscricao" },
            ]}
            data={mockListaEspera}
          />
        </DashboardCard>
      );
    if (["professores", "oficinas", "documentos"].includes(slug))
      return (
        <DashboardCard title={title} description="Conteúdo em desenvolvimento.">
          <div className="py-12 text-center text-muted-foreground border-2 border-dashed rounded-lg">Módulo em desenvolvimento</div>
        </DashboardCard>
      );
  }

  if (role === "gestao") {
    if (slug === "cronograma")
      return (
        <DashboardCard title="Cronograma de Oficinas" description="Itinerário e salas (mock)">
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
      );

    if (slug === "voluntarios")
      return (
        <DashboardCard title="Voluntários" description="Cadastro e participação (mock)">
          <TabelaResponsiva
            columns={[
              { header: "Nome", accessor: "nome" },
              { header: "Área", accessor: "area" },
              { header: "Dias", accessor: "dias" },
              { header: "Status", accessor: "status" },
            ]}
            data={mockVoluntarios}
          />
        </DashboardCard>
      );

    if (slug === "financeiro")
      return (
        <DashboardCard title="Financeiro (somente leitura)" description="Fluxo de caixa resumido (mock)">
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
      );

    if (slug === "relatorios")
      return (
        <DashboardCard title="Relatórios Institucionais" description="Lista de relatórios disponíveis (mock)">
          <div className="space-y-3">
            {[
              { nome: "Relatório Mensal (Frequência)", data: "01/06/2025" },
              { nome: "Relatório de Oficinas", data: "01/06/2025" },
              { nome: "Relatório de Voluntários", data: "01/06/2025" },
            ].map((r, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2 p-3 rounded-lg border bg-white">
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate">{r.nome}</p>
                  <p className="text-xs text-muted-foreground">{r.data}</p>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">Baixar</Button>
              </div>
            ))}
          </div>
        </DashboardCard>
      );

    if (slug === "frequencia")
      return (
        <DashboardCard title="Monitoramento de Frequência" description="Exceções e riscos (mock)">
          <TabelaResponsiva
            columns={[
              { header: "Turma", accessor: "turma" },
              { header: "Frequência", accessor: "freq" },
              { header: "Risco", accessor: "risco" },
            ]}
            data={[
              { turma: "Turma A - Manhã", freq: "72%", risco: "Alto" },
              { turma: "Turma B - Tarde", freq: "78%", risco: "Médio" },
              { turma: "Turma C - Noite", freq: "90%", risco: "Baixo" },
            ]}
          />
        </DashboardCard>
      );

    return (
      <DashboardCard title={title} description="Visão administrativa (protótipo).">
        <div className="py-12 text-center text-muted-foreground border-2 border-dashed rounded-lg">Conteúdo não definido</div>
      </DashboardCard>
    );
  }

  if (role === "financeiro") {
    if (slug === "pagar")
      return (
        <DashboardCard title="Contas a Pagar" description="Lançamentos de despesas">
          <TabelaResponsiva
            columns={[
              { header: "Descrição", accessor: "descricao" },
              { header: "Vencimento", accessor: "vencimento" },
              { header: "Valor", accessor: "valor" },
              { header: "Status", accessor: "status" },
            ]}
            data={mockContasPagar}
          />
        </DashboardCard>
      );
    if (slug === "receber")
      return (
        <DashboardCard title="Contas a Receber" description="Receitas e doações">
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
      );
    if (slug === "notas")
      return (
        <DashboardCard title="Notas Fiscais" description="Emissão e controle (mock)">
          <TabelaResponsiva
            columns={[
              { header: "Número", accessor: "numero" },
              { header: "Data", accessor: "data" },
              { header: "Descrição", accessor: "descricao" },
              { header: "Valor", accessor: "valor" },
              { header: "Status", accessor: "status" },
            ]}
            data={mockNotasFiscais}
          />
          <Button className="mt-4">Emitir nova nota</Button>
        </DashboardCard>
      );

    if (slug === "doacoes")
      return (
        <div className="space-y-6">
          <FormNovaDoacao />
          <DashboardCard title="Doações" description="Histórico de doações (mock)">
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
      );

    if (slug === "relatorios")
      return (
        <DashboardCard title="Relatórios Financeiros" description="Consolidados e demonstrativos (mock)">
          <div className="space-y-3">
            {[
              { nome: "Demonstrativo de Despesas", periodo: "Mai/2025" },
              { nome: "Histórico de Notas Fiscais", periodo: "Mai/2025" },
              { nome: "Resumo de Doações", periodo: "Mai/2025" },
            ].map((r, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2 p-3 rounded-lg border bg-white">
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate">{r.nome}</p>
                  <p className="text-xs text-muted-foreground">{r.periodo}</p>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">Gerar</Button>
              </div>
            ))}
          </div>
        </DashboardCard>
      );

    if (slug === "dados")
      return (
        <DashboardCard title="Meus Dados" description="Perfil do colaborador (mock)">
          <p className="text-sm text-muted-foreground">Formulário de perfil (protótipo).</p>
        </DashboardCard>
      );
  }

  if (role === "psicologo") {
    if (slug === "pacientes")
      return (
        <DashboardCard title="Pacientes" description="Dados essenciais para acompanhamento">
          <TabelaResponsiva
            columns={[
              { header: "Nome", accessor: "nome" },
              { header: "Idade", accessor: "idade" },
              { header: "Condições", accessor: "condicao" },
            ]}
            data={mockPacientesPsicologo}
          />
        </DashboardCard>
      );
    if (slug === "anotacoes")
      return (
        <div className="space-y-6">
          <FormNovaAnotacao />
          <DashboardCard title="Anotações Terapêuticas" description="Histórico recente (mock)">
            <TabelaResponsiva
              columns={[
                { header: "Paciente", accessor: "paciente" },
                { header: "Data", accessor: "data" },
                { header: "Resumo", accessor: "resumo" },
              ]}
              data={mockAnotacoesPsicologo}
            />
          </DashboardCard>
        </div>
      );

    if (slug === "historico")
      return (
        <DashboardCard title="Histórico Clínico" description="Agenda e registros do dia (mock)">
          <TabelaResponsiva
            columns={[
              { header: "Horário", accessor: "horario" },
              { header: "Paciente", accessor: "paciente" },
              { header: "Tipo", accessor: "tipo" },
              { header: "Status", accessor: "status" },
            ]}
            data={mockAtendimentosHoje}
          />
        </DashboardCard>
      );

    if (slug === "dados")
      return (
        <DashboardCard title="Meus Dados" description="Perfil profissional (mock)">
          <p className="text-sm text-muted-foreground">Formulário de perfil (protótipo).</p>
        </DashboardCard>
      );
  }

  return (
    <DashboardCard title={title} description="Protótipo.">
      <div className="py-12 text-center text-muted-foreground border-2 border-dashed rounded-lg">Conteúdo não definido</div>
    </DashboardCard>
  );
}
