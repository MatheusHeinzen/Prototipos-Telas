# SGS-CADI – Portal Educacional

Protótipo de telas do Sistema de Gestão SGS-CADI (acadêmico, administrativo e financeiro).

## Pré-requisitos

- **Node.js** 22 ou superior
- **PNPM** 10.x (recomendado; o projeto usa `packageManager` fixo)

## Como rodar

```bash
# Instalar dependências
pnpm install

# Desenvolvimento (frontend + API em um único servidor)
pnpm dev
```

Acesse no navegador: **http://localhost:8080**

- SPA (React Router): rotas em `client/App.tsx`
- Em dev, o Express roda como middleware (porta 8080) com endpoints `/api/ping` e `/api/demo`

## Outros comandos

```bash
pnpm build      # Build de produção (client + server)
pnpm start      # Servidor de produção
pnpm typecheck  # Verificação TypeScript
pnpm test       # Testes (Vitest)
```

## Estrutura do protótipo

- **Telas e rotas**: `client/pages/`, rotas em `client/App.tsx`
- **Dados mock**: `client/lib/mockData.ts` (somente front-end, sem API)
- **Estado de erro**: nas telas de módulo, use `?erro=1` na URL para exibir o alerta padronizado (ex.: `/dashboard/aluno/frequencia?erro=1`)
- **Requisitos**: ver `especificacoes.md` e `PROTOTIPO_TELAS_REQUISITOS.md` na raiz do projeto
