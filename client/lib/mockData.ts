export const mockFrequenciaAluno = [
  { data: "02/06/2025", oficina: "Desenvolvimento Web", presenca: "Presente", observacao: "" },
  { data: "28/05/2025", oficina: "Inglês Aplicado", presenca: "Presente", observacao: "" },
  { data: "21/05/2025", oficina: "Desenvolvimento Web", presenca: "Falta", observacao: "Justificada" },
];

export const mockHorariosAluno = [
  { dia: "Segunda", horario: "08:00 - 09:30", oficina: "Desenvolvimento Web", sala: "Lab 01" },
  { dia: "Quarta", horario: "10:00 - 11:30", oficina: "Inglês Aplicado", sala: "Sala 04" },
];

export const mockComunicados = [
  { data: "15 Mai", titulo: "Renovação de Matrícula nas Oficinas", tipo: "Importante" },
  { data: "12 Mai", titulo: "Oficina de Robótica - Novas Vagas", tipo: "Novidade" },
  { data: "10 Mai", titulo: "Passeio Cultural - Inscrições Abertas", tipo: "Evento" },
];

export const mockTurmasProfessor = [
  { id: 1, nome: "Informática Kids", oficina: "Tecnologia", horario: "Ter/Qui - 08:00", alunos: 15 },
  { id: 2, nome: "Pintura em Tela", oficina: "Artes", horario: "Seg/Qua - 14:00", alunos: 12 },
];

export const mockChamadaAlunos = [
  { id: 1, nome: "Ana Costa", matricula: "2024001", nascimento: "15/03/2010", status: "presente" },
  { id: 2, nome: "Bruno Lima", matricula: "2024002", nascimento: "22/07/2009", status: "presente" },
  { id: 3, nome: "Carla Souza", matricula: "2024003", nascimento: "10/11/2010", status: "falta" },
];

export const mockPareceres = [
  { aluno: "Ana Costa", data: "01/06/2025", resumo: "Bom desenvolvimento nas atividades em grupo." },
  { aluno: "Bruno Lima", data: "28/05/2025", resumo: "Participação ativa; reforçar leitura." },
];

export const mockAlunosSecretaria = [
  { id: 1, nome: "Mateus Lima", responsavel: "Maria Lima", turma: "Informática Kids", status: "Ativo" },
  { id: 2, nome: "Bianca Rocha", responsavel: "Paulo Rocha", turma: "Pintura em Tela", status: "Ativo" },
];

export const mockTurmasSecretaria = [
  { nome: "Informática Kids", oficina: "Tecnologia", vagas: 20, ocupadas: 18 },
  { nome: "Violão Nível 1", oficina: "Música", vagas: 15, ocupadas: 15 },
];

export const mockListaEspera = [
  { posicao: 1, nome: "Fernanda Silva", oficinaDesejada: "Robótica", dataInscricao: "01/06/2025" },
  { posicao: 2, nome: "Gustavo Mendes", oficinaDesejada: "Violão Nível 1", dataInscricao: "03/06/2025" },
];

export const mockContasPagar = [
  { descricao: "Energia", vencimento: "15/06/2025", valor: "R$ 2.400,00", status: "Pendente" },
  { descricao: "Material de escritório", vencimento: "20/06/2025", valor: "R$ 850,00", status: "Pendente" },
];

export const mockContasReceber = [
  { descricao: "Doação - Padrinho A", previsao: "10/06/2025", valor: "R$ 1.500,00", status: "Recebido" },
  { descricao: "Convênio Municipal", previsao: "30/06/2025", valor: "R$ 8.000,00", status: "Pendente" },
];

export const mockPacientesPsicologo = [
  { id: 1, nome: "Paciente A", idade: 10, condicao: "Acompanhamento preventivo" },
  { id: 2, nome: "Paciente B", idade: 12, condicao: "Nenhuma informada" },
];

export const mockGradeHoraria = [
  { time: "08:00", monday: { label: "Info Kids" }, tuesday: {}, wednesday: { label: "Inglês" }, thursday: { label: "Info Kids" }, friday: {} },
  { time: "10:00", monday: {}, tuesday: { label: "Robótica" }, wednesday: {}, thursday: {}, friday: { label: "Esportes" } },
];
