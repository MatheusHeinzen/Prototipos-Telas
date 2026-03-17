import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginAluno from "./pages/LoginAluno";
import LoginColaborador from "./pages/LoginColaborador";
import DashboardAluno from "./pages/DashboardAluno";
import DashboardProfessor from "./pages/DashboardProfessor";
import DashboardSecretaria from "./pages/DashboardSecretaria";
import DashboardGestao from "./pages/DashboardGestao";
import DashboardFinanceiro from "./pages/DashboardFinanceiro";
import DashboardPsicologo from "./pages/DashboardPsicologo";
import DashboardPlaceholder from "./pages/DashboardPlaceholder";
import ModuleSubPage from "./pages/ModuleSubPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login/aluno" element={<LoginAluno />} />
          <Route path="/login/colaborador" element={<LoginColaborador />} />

          <Route path="/dashboard/aluno" element={<DashboardAluno />} />
          <Route path="/dashboard/aluno/frequencia" element={<ModuleSubPage role="aluno" slug="frequencia" title="Minha Frequência" />} />
          <Route path="/dashboard/aluno/horarios" element={<ModuleSubPage role="aluno" slug="horarios" title="Meus Horários" />} />
          <Route path="/dashboard/aluno/dados" element={<ModuleSubPage role="aluno" slug="dados" title="Meus Dados" />} />
          <Route path="/dashboard/aluno/comunicados" element={<ModuleSubPage role="aluno" slug="comunicados" title="Comunicados" />} />
          <Route path="/dashboard/aluno/atestado" element={<ModuleSubPage role="aluno" slug="atestado" title="Enviar Atestado" />} />

          <Route path="/dashboard/professor" element={<DashboardProfessor />} />
          <Route path="/dashboard/professor/turmas" element={<ModuleSubPage role="professor" slug="turmas" title="Minhas Turmas" />} />
          <Route path="/dashboard/professor/frequencia" element={<ModuleSubPage role="professor" slug="frequencia" title="Registrar Frequência" />} />
          <Route path="/dashboard/professor/pareceres" element={<ModuleSubPage role="professor" slug="pareceres" title="Pareceres Descritivos" />} />
          <Route path="/dashboard/professor/horarios" element={<ModuleSubPage role="professor" slug="horarios" title="Horários" />} />
          <Route path="/dashboard/professor/dados" element={<ModuleSubPage role="professor" slug="dados" title="Meus Dados" />} />

          <Route path="/dashboard/secretaria" element={<DashboardSecretaria />} />
          <Route path="/dashboard/secretaria/alunos" element={<ModuleSubPage role="secretaria" slug="alunos" title="Cadastro de Alunos" />} />
          <Route path="/dashboard/secretaria/turmas" element={<ModuleSubPage role="secretaria" slug="turmas" title="Gerenciar Turmas" />} />
          <Route path="/dashboard/secretaria/professores" element={<ModuleSubPage role="secretaria" slug="professores" title="Cadastro de Professores" />} />
          <Route path="/dashboard/secretaria/oficinas" element={<ModuleSubPage role="secretaria" slug="oficinas" title="Oficinas" />} />
          <Route path="/dashboard/secretaria/espera" element={<ModuleSubPage role="secretaria" slug="espera" title="Lista de Espera" />} />
          <Route path="/dashboard/secretaria/documentos" element={<ModuleSubPage role="secretaria" slug="documentos" title="Documentos" />} />

          <Route path="/dashboard/gestao" element={<DashboardGestao />} />
          <Route path="/dashboard/gestao/relatorios" element={<ModuleSubPage role="gestao" slug="relatorios" title="Relatórios Institucionais" />} />
          <Route path="/dashboard/gestao/frequencia" element={<ModuleSubPage role="gestao" slug="frequencia" title="Monitoramento Frequência" />} />
          <Route path="/dashboard/gestao/cronograma" element={<ModuleSubPage role="gestao" slug="cronograma" title="Cronograma Oficinas" />} />
          <Route path="/dashboard/gestao/voluntarios" element={<ModuleSubPage role="gestao" slug="voluntarios" title="Voluntários" />} />
          <Route path="/dashboard/gestao/financeiro" element={<ModuleSubPage role="gestao" slug="financeiro" title="Dados Financeiros" />} />

          <Route path="/dashboard/financeiro" element={<DashboardFinanceiro />} />
          <Route path="/dashboard/financeiro/notas" element={<ModuleSubPage role="financeiro" slug="notas" title="Notas Fiscais" />} />
          <Route path="/dashboard/financeiro/pagar" element={<ModuleSubPage role="financeiro" slug="pagar" title="Contas a Pagar" />} />
          <Route path="/dashboard/financeiro/receber" element={<ModuleSubPage role="financeiro" slug="receber" title="Contas a Receber" />} />
          <Route path="/dashboard/financeiro/doacoes" element={<ModuleSubPage role="financeiro" slug="doacoes" title="Doações" />} />
          <Route path="/dashboard/financeiro/relatorios" element={<ModuleSubPage role="financeiro" slug="relatorios" title="Relatórios Financeiros" />} />
          <Route path="/dashboard/financeiro/dados" element={<ModuleSubPage role="financeiro" slug="dados" title="Meus Dados" />} />

          <Route path="/dashboard/psicologo" element={<DashboardPsicologo />} />
          <Route path="/dashboard/psicologo/pacientes" element={<ModuleSubPage role="psicologo" slug="pacientes" title="Pacientes" />} />
          <Route path="/dashboard/psicologo/anotacoes" element={<ModuleSubPage role="psicologo" slug="anotacoes" title="Anotações Terapêuticas" />} />
          <Route path="/dashboard/psicologo/historico" element={<ModuleSubPage role="psicologo" slug="historico" title="Histórico Clínico" />} />
          <Route path="/dashboard/psicologo/dados" element={<ModuleSubPage role="psicologo" slug="dados" title="Meus Dados" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
