# SGS-CADI – Especificação de Requisitos

Documento de requisitos do Sistema de Gestão SGS-CADI.

---

## 1. Sobre o SGS-CADI

> O SGS-CADI é um sistema integrado para gerenciamento completo de instituição educacional. Contempla aspectos acadêmicos, administrativos e financeiros com controle de acesso multinível (Aluno/Responsável → Professor → Secretaria → Administrativo → Financeiro). Através de cadastro unificado, controle de frequência digital, pareceres pedagógicos, gestão documental e fluxo financeiro, soluciona a fragmentação de informações e o controle manual de chamadas e documentos, oferecendo visão única por perfil e suporte à tomada de decisão institucional.

---

## 2. Modelo do Ciclo de Vida

**Abordagem: Iterativo e incremental (5 sprints, 12 semanas).**

**Justificativa:** O modelo foi escolhido por permitir entregas parciais e utilizáveis a cada sprint, com priorização por valor (fundação → acadêmico → pedagógico → administrativo → financeiro e finalização). Cada sprint entrega um incremento testável (ex.: módulo acadêmico, chamada digital, financeiro), incorporando feedback e reduzindo risco de desalinhamento com o negócio. A hierarquia de perfis e as permissões são tratadas desde a fundação (Sprint 1), e os módulos posteriores estendem o sistema sem refazer a base.

---

## 3. Glossário


| Termo               | Definição                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Chamada digital     | Registro de presença/falta dos alunos em tempo real pelo professor.                                                       |
| Parecer descritivo  | Anotação pedagógica individual por aluno, de responsabilidade do professor.                                               |
| Mural institucional | Canal de divulgação de atualizações (troca de professor, sala, calendário).                                               |
| Lista de espera     | Fila de pré-cadastro para matrícula; controle de vagas.                                                                   |
| Oficina             | Atividade organizada por turma, no escopo da secretaria.                                                                  |
| Troca de idioma     | Seleção do idioma de exibição da interface (ex.: português, espanhol) pelo aluno ou responsável no módulo correspondente. |


---

## 4. Estórias de Usuário e Critérios de Aceite

### 4.1 Perfil: Aluno / Responsável

#### US001 – Login e acesso aos próprios dados

- Como aluno ou responsável, quero acessar o sistema com login seguro e ver apenas meus dados e dos alunos sob minha responsabilidade; para ter um acesso único e controlado.
- **Cenário 1: Login bem-sucedido**  
  - Dado que possuo credenciais válidas  
  - Quando faço login no sistema  
  - Então sou redirecionado para a área restrita aos meus dados
- **Cenário 2: Acesso negado a dados de outros**  
  - Dado que estou logado como responsável  
  - Quando tento acessar dados de outro aluno  
  - Então o sistema nega o acesso e exibe mensagem adequada

#### US002 – Consulta de frequência e grade horária

- Como aluno ou responsável, quero consultar frequência escolar e grade horária das turmas matriculadas; para acompanhar a presença e a organização da semana.
- **Cenário 1: Visualização de frequência**  
  - Dado que estou na área do aluno/responsável  
  - Quando acesso a opção de frequência  
  - Então visualizo o histórico de presenças e faltas do aluno
- **Cenário 2: Visualização de grade horária**  
  - Dado que o aluno está vinculado a uma ou mais turmas  
  - Quando acesso a grade horária  
  - Então visualizo os horários e disciplinas/oficinas das turmas

#### US003 – Atualização de dados de contato

- Como aluno ou responsável, quero atualizar e-mail e telefone; para que a instituição sempre tenha meus contatos corretos.
- **Cenário 1: Atualização de contato**  
  - Dado que estou na área de dados cadastrais  
  - Quando altero e-mail ou telefone e confirmo  
  - Então os dados são salvos e passam a valer para comunicações

#### US004 – Acesso ao mural institucional

- Como aluno ou responsável, quero ver o mural de atualizações (alterações de professor, sala, calendário); para me manter informado.
- **Cenário 1: Visualização do mural**  
  - Dado que existem publicações no mural  
  - Quando acesso o mural institucional  
  - Então visualizo as atualizações relevantes em ordem adequada

#### US005 – Gerenciamento de atestados e justificativas

- Como aluno ou responsável, quero enviar atestados médicos e justificativas de falta; para regularizar ausências quando aplicável.
- **Cenário 1: Envio de documento**  
  - Dado que tenho um atestado ou justificativa  
  - Quando envio o documento na área do aluno  
  - Então o documento fica disponível para a instituição na área documental do aluno

#### US026 – Troca de idioma

- Como aluno ou responsável, quero escolher o idioma de exibição da interface (ex.: português, inglês); para usar o sistema no idioma que me for mais adequado.
- **Cenário 1: Alteração do idioma**  
  - Dado que estou na área do aluno/responsável  
  - Quando seleciono outro idioma nas opções de interface  
  - Então os textos da interface passam a ser exibidos no idioma escolhido
- **Cenário 2: Persistência da preferência**  
  - Dado que alterei o idioma da interface  
  - Quando faço novo login ou navego entre telas  
  - Então a preferência de idioma é mantida durante a sessão (e, se aplicável, em acessos futuros)

---

### 4.2 Perfil: Professor

#### US006 – Acesso às turmas e alunos

- Como professor, quero ver as turmas a que estou atribuído e a listagem de alunos com dados reduzidos (nome, data de nascimento, matrícula); para realizar minha rotina pedagógica.
- **Cenário 1: Listagem de turmas**  
  - Dado que estou logado como professor  
  - Quando acesso “Minhas turmas”  
  - Então visualizo apenas as turmas em que sou professor
- **Cenário 2: Listagem de alunos**  
  - Dado que selecionei uma turma  
  - Quando visualizo os alunos da turma  
  - Então vejo nome, data de nascimento e matrícula (sem dados sensíveis adicionais)

#### US007 – Controle de frequência (chamada digital)

- Como professor, quero registrar presença e falta em tempo real por aluno; para ter a chamada digital e dispensar planilhas em papel.
- **Cenário 1: Registro de presença**  
  - Dado que estou na tela de chamada da turma  
  - Quando marco o aluno como presente na data/hora da aula  
  - Então o registro é salvo e refletido na consulta de frequência
- **Cenário 2: Registro de falta**  
  - Dado que estou na chamada  
  - Quando marco o aluno como ausente  
  - Então a falta fica registrada e visível para aluno/responsável e administração

#### US008 – Registro de pareceres descritivos

- Como professor, quero elaborar pareceres descritivos (anotações) por aluno; para documentar o acompanhamento pedagógico.
- **Cenário 1: Criação de parecer**  
  - Dado que estou na ficha do aluno dentro da turma  
  - Quando redijo e salvo um parecer descritivo  
  - Então o parecer fica associado ao aluno e à data/turma
- **Cenário 2: Edição de parecer**  
  - Dado que já existe um parecer meu para o aluno  
  - Quando edito e salvo  
  - Então a versão atualizada substitui a anterior (ou fica versionada, conforme regra de negócio)

#### US009 – Visualização da grade horária (itinerário)

- Como professor, quero ver a grade horária (itinerário) das minhas turmas; para me organizar no dia a dia.
- **Cenário 1: Grade da turma**  
  - Dado que estou na visão da turma  
  - Quando acesso a grade horária  
  - Então visualizo horários e disciplinas/oficinas daquela turma

---

### 4.3 Perfil: Secretaria Acadêmica

#### US010 – CRUD de alunos e responsáveis

- Como secretário acadêmico, quero cadastrar, editar e manter alunos e responsáveis e vincular alunos a turmas; para garantir dados corretos e matrículas atualizadas.
- **Cenário 1: Cadastro de aluno**  
  - Dado que estou no cadastro de alunos  
  - Quando preencho dados completos do aluno e dos responsáveis e salvo  
  - Então o aluno é criado e pode ser vinculado a turmas
- **Cenário 2: Vinculação a turma**  
  - Dado que o aluno está cadastrado  
  - Quando associo o aluno a uma turma  
  - Então o vínculo é registrado e o aluno passa a constar na lista da turma

#### US011 – CRUD de professores e atribuição a turmas

- Como secretário acadêmico, quero cadastrar professores e atribuí-los a turmas; para organizar a grade e o controle de chamada.
- **Cenário 1: Cadastro de professor**  
  - Dado que estou no cadastro de professores  
  - Quando preencho dados profissionais e salvo  
  - Então o professor pode ser atribuído a turmas
- **Cenário 2: Atribuição a turma**  
  - Dado que o professor está cadastrado  
  - Quando atribuo o professor a uma turma  
  - Então ele passa a ter acesso à turma e à chamada digital

#### US012 – CRUD de turmas e oficinas

- Como secretário acadêmico, quero criar e manter turmas e organizar oficinas por turma; para refletir a estrutura pedagógica.
- **Cenário 1: Criação de turma**  
  - Dado que estou no cadastro de turmas  
  - Quando crio uma nova turma com nome, período e dados necessários  
  - Então a turma fica disponível para vínculo de alunos e professores
- **Cenário 2: Organização de oficinas**  
  - Dado que existem turmas cadastradas  
  - Quando organizo oficinas por turma  
  - Então as oficinas ficam associadas às turmas para relatórios e cronograma

#### US013 – Cadastro de colaboradores

- Como secretário acadêmico, quero registrar colaboradores (limpeza, voluntários, psicólogos, demais) com categoria de atuação; para ter um cadastro unificado.
- **Cenário 1: Cadastro com categoria**  
  - Dado que estou no cadastro de colaboradores  
  - Quando preencho dados e seleciono a categoria (ex.: voluntário, psicólogo)  
  - Então o colaborador é salvo e pode ser usado em relatórios e permissões

#### US014 – Cadastro de padrinhos

- Como secretário acadêmico, quero cadastrar padrinhos; para que o setor financeiro possa registrar doações e vínculos.
- **Cenário 1: Cadastro de padrinho**  
  - Dado que estou no cadastro de padrinhos  
  - Quando preencho dados do padrinho e salvo  
  - Então o padrinho fica disponível para o módulo financeiro

#### US015 – Lista de espera e pré-cadastro

- Como secretário acadêmico, quero configurar e utilizar a lista de espera com pré-cadastro; para controlar vagas e futuras matrículas.
- **Cenário 1: Pré-cadastro na lista de espera**  
  - Dado que a lista de espera está configurada  
  - Quando realizo o pré-cadastro de um candidato  
  - Então ele entra na fila na posição definida pelas regras

#### US016 – Gestão documental e repositório institucional

- Como secretário acadêmico, quero ter repositório centralizado de documentos institucionais e gestão documental na área do aluno (upload/download); para padronizar e facilitar consultas.
- **Cenário 1: Upload na área do aluno**  
  - Dado que estou na ficha do aluno  
  - Quando faço upload de um documento (ex.: atestado)  
  - Então o documento fica disponível na área documental do aluno
- **Cenário 2: Repositório institucional**  
  - Dado que tenho permissão administrativa  
  - Quando acesso o repositório de documentos institucionais  
  - Então posso fazer upload, organização e controle de documentos gerais

#### US017 – Emissão de documentos e notificações

- Como secretário acadêmico, quero que o sistema emita automaticamente certificados, declarações de matrícula e frequência e envie notificações configuradas; para reduzir trabalho manual.
- **Cenário 1: Emissão de declaração**  
  - Dado que o aluno está matriculado e com frequência registrada  
  - Quando solicito declaração de matrícula ou de frequência  
  - Então o sistema gera o documento conforme modelo configurado
- **Cenário 2: Notificação automática**  
  - Dado que há regras de notificação configuradas  
  - Quando ocorre o evento (ex.: nova falta, alteração de turma)  
  - Então o sistema dispara a notificação aos destinatários configurados

#### US018 – Relatórios analíticos (frequência, oficinas, voluntários)

- Como secretário acadêmico, quero gerar relatórios de frequência global, cronograma de oficinas e participação de voluntários; para acompanhar indicadores.
- **Cenário 1: Relatório de frequência**  
  - Dado que há registros de chamada  
  - Quando gero o relatório de frequência global (período/turma)  
  - Então visualizo totais e percentuais de presença/falta
- **Cenário 2: Relatório de oficinas / voluntários**  
  - Dado que há oficinas e colaboradores cadastrados  
  - Quando gero o relatório de oficinas ou de participação de voluntários  
  - Então visualizo os dados consolidados no período

#### US019 – Matrícula, desistência e remanejamento

- Como secretário acadêmico, quero realizar matrícula, desistência e remanejamento de alunos entre turmas; para gerir o ciclo de vida acadêmico.
- **Cenário 1: Matrícula**  
  - Dado que o aluno está pré-cadastrado ou na lista de espera  
  - Quando concluo o processo de matrícula e vinculo à turma  
  - Então o aluno passa a constar como matriculado
- **Cenário 2: Remanejamento**  
  - Dado que o aluno está em uma turma  
  - Quando realizo o remanejamento para outra turma  
  - Então o vínculo antigo é encerrado e o novo é registrado

---

### 4.4 Perfil: Gestão Administrativa

#### US020 – Gestão de usuários secretários e visão ampliada

- Como gestor administrativo, quero gerenciar usuários com perfil de secretaria e ter visão ampliada (incluindo acompanhamento dos dados financeiros em somente leitura); para supervisão e auditoria.
- **Cenário 1: Criação de usuário secretário**  
  - Dado que tenho permissão de gestão administrativa  
  - Quando crio ou edito um usuário com perfil secretaria  
  - Então o usuário passa a ter acesso conforme o perfil
- **Cenário 2: Visualização financeira**  
  - Dado que estou logado como gestor administrativo  
  - Quando acesso a área financeira em modo somente leitura  
  - Então visualizo indicadores e dados sem poder alterar lançamentos

---

### 4.5 Perfil: Setor Financeiro

#### US021 – Fluxo de caixa (contas a pagar e a receber)

- Como usuário do setor financeiro, quero registrar e acompanhar contas a pagar e a receber e o fluxo de caixa; para controle financeiro da instituição.
- **Cenário 1: Registro de conta a pagar**  
  - Dado que estou na área financeira  
  - Quando registro uma despesa (conta a pagar)  
  - Então ela entra no fluxo de caixa e nos relatórios
- **Cenário 2: Registro de conta a receber / doação**  
  - Dado que estou na área financeira  
  - Quando registro receita ou doação de padrinho  
  - Então o valor é lançado e refletido no fluxo de caixa

#### US022 – Gestão de documentos fiscais e notas fiscais

- Como usuário do setor financeiro, quero emitir e controlar notas fiscais e cupons fiscais; para conformidade e prestação de contas.
- **Cenário 1: Controle de nota fiscal**  
  - Dado que há uma operação que exige documento fiscal  
  - Quando registro ou emito a nota fiscal  
  - Então o documento fica vinculado ao lançamento e ao histórico

#### US023 – Relatórios financeiros consolidados

- Como usuário do setor financeiro, quero visualizar relatórios consolidados (histórico de notas fiscais, demonstrativo de despesas); para análise e prestação de contas.
- **Cenário 1: Demonstrativo de despesas**  
  - Dado que há lançamentos no período  
  - Quando gero o demonstrativo de despesas  
  - Então visualizo totais e detalhamento por categoria/período

---

### 4.6 Perfil: Psicólogo

#### US024 – Acesso a dados clínicos essenciais e anotações privadas

- Como psicólogo, quero acessar apenas dados essenciais do paciente (identificação, condições especiais) e registrar anotações terapêuticas privadas; para acompanhamento clínico com confidencialidade.
- **Cenário 1: Visualização de paciente**  
  - Dado que estou logado como psicólogo  
  - Quando acesso a lista de pacientes atribuídos  
  - Então visualizo apenas nome, idade e informações sobre condições especiais
- **Cenário 2: Anotação privada**  
  - Dado que estou na ficha do paciente  
  - Quando registro uma anotação terapêutica  
  - Então a anotação fica restrita ao perfil psicólogo e não é exibida a outros perfis

---

### 4.7 Comum (múltiplos perfis)

#### US025 – Dashboard unificado com métricas

- Como usuário logado, quero um dashboard com métricas e indicadores relevantes ao meu perfil; para ter visão rápida da situação.
- **Cenário 1: Dashboard do professor**  
  - Dado que sou professor  
  - Quando acesso o dashboard  
  - Então visualizo turmas, resumo de frequência e ações rápidas (chamada, pareceres)
- **Cenário 2: Dashboard administrativo**  
  - Dado que tenho perfil administrativo  
  - Quando acesso o dashboard  
  - Então visualizo métricas de alunos, turmas, frequência e indicadores configurados

---

## 5. Engenharia de Requisitos

### 5.1 Mapeamento: Estória de Usuário ↔ Requisitos Funcionais


| ID US | Estória                                         | Requisitos (RF) |
| ----- | ----------------------------------------------- | --------------- |
| US001 | Login e acesso aos próprios dados               | RF001, RF002    |
| US002 | Consulta de frequência e grade horária          | RF003, RF004    |
| US003 | Atualização de dados de contato                 | RF005           |
| US004 | Acesso ao mural institucional                   | RF006           |
| US005 | Gerenciamento de atestados e justificativas     | RF007           |
| US006 | Acesso às turmas e alunos                       | RF008, RF009    |
| US007 | Controle de frequência (chamada digital)        | RF010           |
| US008 | Registro de pareceres descritivos               | RF011           |
| US009 | Visualização da grade horária (itinerário)      | RF004           |
| US010 | CRUD de alunos e responsáveis                   | RF012, RF013    |
| US011 | CRUD de professores e atribuição a turmas       | RF014, RF015    |
| US012 | CRUD de turmas e oficinas                       | RF016, RF017    |
| US013 | Cadastro de colaboradores                       | RF018           |
| US014 | Cadastro de padrinhos                           | RF019           |
| US015 | Lista de espera e pré-cadastro                  | RF020           |
| US016 | Gestão documental e repositório institucional   | RF021, RF022    |
| US017 | Emissão de documentos e notificações            | RF023, RF024    |
| US018 | Relatórios analíticos                           | RF025           |
| US019 | Matrícula, desistência e remanejamento          | RF026           |
| US020 | Gestão de usuários secretários e visão ampliada | RF027, RF028    |
| US021 | Fluxo de caixa                                  | RF029           |
| US022 | Gestão de documentos fiscais                    | RF030           |
| US023 | Relatórios financeiros consolidados             | RF031           |
| US024 | Dados clínicos e anotações privadas (psicólogo) | RF032, RF033    |
| US025 | Dashboard unificado                             | RF034           |
| US026 | Troca de idioma                                 | RF035           |


### 5.2 Lista de Requisitos Funcionais


| ID RF | Requisito Funcional                                 | Descrição                                                                                                                                     |
| ----- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RF001 | Autenticar usuário (login)                          | Permitir login com credenciais válidas e manutenção de sessão autenticada.                                                                    |
| RF002 | Controlar acesso por perfil                         | Garantir que cada perfil acesse apenas os recursos e dados autorizados ao seu papel.                                                          |
| RF003 | Consultar frequência do aluno                       | Exibir histórico de presença/falta ao aluno e responsável.                                                                                    |
| RF004 | Exibir grade horária                                | Exibir itinerário das turmas para professor e aluno/responsável.                                                                              |
| RF005 | Atualizar dados de contato                          | Permitir ao aluno/responsável atualizar e-mail e telefone.                                                                                    |
| RF006 | Exibir mural institucional                          | Permitir publicação (admin) e listagem de atualizações (professor, sala, calendário) aos demais perfis.                                       |
| RF007 | Gerenciar atestados/justificativas                  | Upload e associação de documentos à área do aluno.                                                                                            |
| RF008 | Listar turmas do professor                          | Listar apenas turmas em que o usuário é professor.                                                                                            |
| RF009 | Listar alunos da turma (dados reduzidos)            | Nome, data de nascimento, matrícula para o professor.                                                                                         |
| RF010 | Registrar presença/falta (chamada digital)          | Registro em tempo real pelo professor; persistência e consulta.                                                                               |
| RF011 | Registrar parecer descritivo por aluno              | CRUD de anotações pedagógicas por aluno, visível ao professor.                                                                                |
| RF012 | Cadastrar e editar alunos e responsáveis            | CRUD completo; vínculo responsável–aluno.                                                                                                     |
| RF013 | Vincular aluno a turma                              | Associar aluno a uma ou mais turmas (matrícula/remanejamento).                                                                                |
| RF014 | Cadastrar e editar professores                      | CRUD completo com dados profissionais.                                                                                                        |
| RF015 | Atribuir professor a turma                          | Vincular professor à turma para chamada e grade.                                                                                              |
| RF016 | Cadastrar e editar turmas                           | CRUD de turmas (nome, período, dados necessários).                                                                                            |
| RF017 | Organizar oficinas por turma                        | Associar oficinas a turmas para relatórios e cronograma.                                                                                      |
| RF018 | Cadastrar colaboradores por categoria               | CRUD com seleção de categoria (limpeza, voluntário, psicólogo, etc.).                                                                         |
| RF019 | Cadastrar padrinhos                                 | CRUD de padrinhos para vínculo com doações.                                                                                                   |
| RF020 | Gerenciar lista de espera e pré-cadastro            | Inclusão, ordem e configuração da fila de espera.                                                                                             |
| RF021 | Upload/download de documentos do aluno              | Área documental do aluno (atestados, justificativas, etc.).                                                                                   |
| RF022 | Repositório de documentos institucionais            | Armazenamento e organização de documentos gerais da instituição.                                                                              |
| RF023 | Emitir certificados e declarações                   | Geração automática conforme modelos (matrícula, frequência).                                                                                  |
| RF024 | Disparar notificações automáticas                   | Envio conforme regras (eventos, alterações).                                                                                                  |
| RF025 | Gerar relatórios analíticos                         | Frequência global, oficinas, participação de voluntários (totais e %).                                                                        |
| RF026 | Matrícula, desistência e remanejamento              | Processos de ciclo de vida acadêmico (vínculo/desvínculo de turma).                                                                           |
| RF027 | Gerenciar usuários (secretaria)                     | CRUD de usuários com perfil secretaria (gestor administrativo).                                                                               |
| RF028 | Visualizar dados financeiros (somente leitura)      | Gestor administrativo visualiza financeiro sem editar.                                                                                        |
| RF029 | Registrar contas a pagar e a receber                | Lançamentos de fluxo de caixa e doações.                                                                                                      |
| RF030 | Controlar documentos fiscais e notas fiscais        | Emissão e vínculo de NFs e cupons aos lançamentos.                                                                                            |
| RF031 | Gerar relatórios financeiros                        | Histórico de NFs, demonstrativo de despesas, consolidados.                                                                                    |
| RF032 | Exibir dados clínicos essenciais (psicólogo)        | Identificação e condições especiais; restrito ao perfil psicólogo.                                                                            |
| RF033 | Registrar anotações terapêuticas privadas           | Anotações visíveis apenas para o perfil psicólogo.                                                                                            |
| RF034 | Exibir dashboard por perfil                         | Métricas e indicadores conforme perfil (professor, admin, etc.).                                                                              |
| RF035 | Permitir troca de idioma (módulo aluno/responsável) | Oferecer seleção de idioma da interface no módulo do aluno/responsável; persistir preferência na sessão (e opcionalmente em acessos futuros). |


### 5.3 Lista de Requisitos Não Funcionais


| ID RNF | Requisito Não Funcional                | Característica                                                                                                                     |
| ------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| RNF001 | Hospedagem no Azure                    | O sistema deve ser implantado e operado no Microsoft Azure.                                                                        |
| RNF002 | Backend em Java                        | O backend do sistema deve ser desenvolvido na linguagem Java.                                                                      |
| RNF003 | Frontend em React                      | O frontend do sistema deve ser desenvolvido com React.                                                                             |
| RNF004 | Criptografia de senha                  | Senhas devem ser armazenadas com criptografia (ex.: hash adequado).                                                                |
| RNF005 | Controle de dados sensíveis            | Dados sensíveis (ex.: anotações do psicólogo) devem ter acesso restrito e proteção adequada.                                       |
| RNF006 | Tempo de resposta de tela/endpoint     | As telas e os endpoints devem responder dentro do tempo definido (ex.: limite em segundos).                                        |
| RNF007 | Backup automático                      | Rotina de backup automático configurada e documentada.                                                                             |
| RNF008 | Responsividade mobile e desktop        | Todas as telas devem ser utilizáveis em dispositivos móveis e em desktop.                                                          |
| RNF009 | Banco de dados SQL no Azure            | Persistência de dados em banco de dados SQL hospedado no Azure.                                                                    |
| RNF010 | API documentada em Swagger             | A API deve estar documentada em Swagger (ou OpenAPI).                                                                              |
| RNF011 | Controle de sessão via JWT             | Controle de sessão e autenticação devem utilizar JWT.                                                                              |
| RNF012 | Acesso ao módulo admin em rede privada | O acesso ao módulo administrativo deve ser permitido somente a partir de computadores no estabelecimento, através de rede privada. |


---

## 6. Rastreabilidade com o Cronograma

As 49 tasks do cronograma de 12 semanas (Sprints 1–5) realizam os requisitos acima. Resumo:

- **Sprint 1:** RF001, RF002, infraestrutura e modelo de dados.
- **Sprint 2:** RF012–RF017, RF008–RF009, RF004 (módulo acadêmico).
- **Sprint 3:** RF010, RF011, RF006, RF034 (parcial), RF002/RNF003 (permissões), RF003, RF004 (visão aluno), RF035 (troca de idioma – módulo aluno).
- **Sprint 4:** RF018, RF021, RF022, RF020, RF034 (admin), RF025, RNF007 (backup), documentação de perfil admin.
- **Sprint 5:** RF029, RF030, RF031, RF019, RF032, RF033, RF025 (analíticos), RF023, RF024, RF034 (unificado), RNF008 (responsividade), testes e homologação.

