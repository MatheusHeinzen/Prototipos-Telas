# Protótipo com telas e requisitos – SGS-CADI

Documento de apoio ao protótipo navegável: lista de telas (rotas), mapeamento com requisitos funcionais (RF) e não funcionais (RNF), e distribuição por estudante (mínimo 5 RF e 3 RNF por pessoa).

Referência completa de RF/RNF: `especificacoes.md`.

---

## 1. Lista de telas e rotas

| Rota | Tela / Módulo |
|------|----------------|
| `/` | Página inicial (landing) |
| `/login/aluno` | Login aluno/responsável |
| `/login/colaborador` | Login colaborador (perfil por e-mail) |
| `/dashboard/aluno` | Dashboard do aluno |
| `/dashboard/aluno/frequencia` | Minha frequência |
| `/dashboard/aluno/horarios` | Meus horários |
| `/dashboard/aluno/dados` | Meus dados (contato) |
| `/dashboard/aluno/comunicados` | Comunicados / mural |
| `/dashboard/aluno/atestado` | Enviar atestado/justificativa |
| `/dashboard/professor` | Dashboard do professor |
| `/dashboard/professor/turmas` | Minhas turmas |
| `/dashboard/professor/frequencia` | Chamada digital |
| `/dashboard/professor/pareceres` | Pareceres descritivos |
| `/dashboard/professor/horarios` | Grade horária |
| `/dashboard/professor/dados` | Meus dados |
| `/dashboard/secretaria` | Dashboard secretaria |
| `/dashboard/secretaria/alunos` | Cadastro de alunos |
| `/dashboard/secretaria/turmas` | Gerenciar turmas |
| `/dashboard/secretaria/professores` | Cadastro de professores |
| `/dashboard/secretaria/oficinas` | Oficinas |
| `/dashboard/secretaria/espera` | Lista de espera |
| `/dashboard/secretaria/documentos` | Documentos |
| `/dashboard/gestao` | Dashboard gestão |
| `/dashboard/gestao/relatorios` | Relatórios institucionais |
| `/dashboard/gestao/frequencia` | Monitoramento frequência |
| `/dashboard/gestao/cronograma` | Cronograma oficinas |
| `/dashboard/gestao/voluntarios` | Voluntários |
| `/dashboard/gestao/financeiro` | Dados financeiros (somente leitura) |
| `/dashboard/financeiro` | Dashboard financeiro |
| `/dashboard/financeiro/notas` | Notas fiscais |
| `/dashboard/financeiro/pagar` | Contas a pagar |
| `/dashboard/financeiro/receber` | Contas a receber |
| `/dashboard/financeiro/doacoes` | Doações |
| `/dashboard/financeiro/relatorios` | Relatórios financeiros |
| `/dashboard/financeiro/dados` | Meus dados |
| `/dashboard/psicologo` | Dashboard psicólogo |
| `/dashboard/psicologo/pacientes` | Pacientes |
| `/dashboard/psicologo/anotacoes` | Anotações terapêuticas |
| `/dashboard/psicologo/historico` | Histórico clínico |
| `/dashboard/psicologo/dados` | Meus dados |

**Estado de erro:** em qualquer tela de módulo (ex.: `/dashboard/aluno/frequencia`), adicionar `?erro=1` na URL exibe o alerta padronizado de erro (componente `EstadoErro`).

---

## 2. Mapeamento Tela → Requisitos Funcionais (RF)

| Tela (rota) | RFs atendidos (protótipo) |
|-------------|---------------------------|
| Login aluno / colaborador | RF001, RF002 |
| Dashboard aluno | RF003, RF004, RF006, RF034 |
| Minha frequência | RF003 |
| Meus horários | RF004 |
| Meus dados (aluno) | RF005 |
| Comunicados | RF006 |
| Enviar atestado | RF007 |
| Dashboard professor | RF008, RF009, RF034 |
| Minhas turmas | RF008 |
| Chamada digital | RF010 |
| Pareceres descritivos | RF011 |
| Grade horária (professor) | RF004 |
| Dashboard secretaria | RF012–RF017, RF020, RF025, RF034 |
| Cadastro de alunos | RF012, RF013 |
| Gerenciar turmas | RF016, RF017 |
| Cadastro de professores | RF014, RF015 |
| Lista de espera | RF020 |
| Documentos | RF021, RF022 |
| Dashboard gestão | RF027, RF028, RF034 |
| Dados financeiros (gestão) | RF028 |
| Dashboard financeiro | RF029, RF034 |
| Contas a pagar / receber | RF029 |
| Notas fiscais | RF030 |
| Relatórios financeiros | RF031 |
| Dashboard psicólogo | RF032, RF033, RF034 |
| Pacientes | RF032 |
| Anotações terapêuticas | RF033 |

---

## 3. Distribuição por estudante (5 RF + 3 RNF)

Atribuição sugerida para quatro estudantes; cada um foca um conjunto de RFs e RNFs demonstráveis no protótipo.

| Estudante | Módulo foco | Requisitos funcionais (5) | Requisitos não funcionais (3) |
|-----------|-------------|----------------------------|------------------------------|
| **A** | Aluno/Responsável | RF001, RF003, RF004, RF005, RF006 (ou RF007) | RNF003 (React), RNF006 (tempo de resposta / feedback de erro), RNF008 (responsividade) |
| **B** | Professor | RF008, RF009, RF010, RF011, RF004 | RNF003, RNF006, RNF008 |
| **C** | Secretaria Acadêmica | RF012, RF013, RF014, RF015, RF016 (ou RF017, RF020) | RNF003, RNF006, RNF008 |
| **D** | Financeiro / Admin / Psicólogo | RF029, RF031, RF030, RF032, RF033 (ou RF034) | RNF003, RNF005 (dados sensíveis), RNF008 |

Justificativa dos RNFs no protótipo:
- **RNF003:** front-end em React.
- **RNF006:** telas com estado de erro padronizado e feedback visual.
- **RNF008:** layout responsivo (sidebar, tabelas, cards).
- **RNF005:** módulo psicólogo com anotações restritas ao perfil (demonstrável na navegação por perfil).

---

## 4. Resumo dos entregáveis do protótipo

- Navegação completa entre telas principais por perfil (sidebar e rotas em `client/App.tsx`).
- Dados mock centralizados em `client/lib/mockData.ts` (sem chamadas de API).
- Estado de erro padronizado: componente `EstadoErro`; uso de `?erro=1` nas telas de módulo para demonstração.
- Documento único: lista de telas, mapeamento tela → RF e distribuição 5 RF + 3 RNF por estudante (este arquivo).
