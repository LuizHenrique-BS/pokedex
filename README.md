# 🚀 PokéDex Fullstack

Bem-vindo ao repositório da **PokéDex**, uma aplicação fullstack moderna que consome a [PokeAPI](https://pokeapi.co/) para exibir informações detalhadas sobre os Pokémon. Este projeto foi desenvolvido com foco em escalabilidade, manutenibilidade e padrões de arquitetura de mercado.

---

## 🏗️ Arquitetura do Projeto

O projeto é dividido em dois grandes ecossistemas:

### 🔙 Backend (C# .NET 8)
Construído utilizando os princípios da **Clean Architecture** (Arquitetura Limpa) e atuando como um **BFF (Backend for Frontend)**.
- **PokeDex.Api:** Camada de entrada (Controllers e Middleware).
- **PokeDex.Application:** Regras de negócio, DTOs e Interfaces de aplicação.
- **PokeDex.Domain:** Núcleo do projeto, contendo entidades e interfaces de domínio (independente de frameworks).
- **PokeDex.Infrastructure:** Implementações de acesso externo (Consumo da PokeAPI e Injeção de Dependência).

### 🎨 Frontend (React + Vite)
Uma interface rápida e responsiva construída com as ferramentas mais modernas do ecossistema JavaScript.
- **React 18** com **TypeScript**.
- **Tailwind CSS** para estilização utilitária e responsiva.
- **Vite** para um build extremamente rápido.

---

## 🛠️ Tecnologias Utilizadas

**Backend:**
- ASP.NET Core 8.0
- Injeção de Dependência nativa
- HttpClient para consumo de APIs externas
- Padrão DTO para transferência de dados

**Frontend:**
- React.js
- TypeScript
- Tailwind CSS
- Lucide React (Ícones)
- Axios / Fetch API

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [.NET SDK 8.0](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes (npm ou yarn)

### 1. Clonando o Repositório
```bash
git clone https://github.com/LuizHenrique-BS/pokedex.git
cd pokedex
```

### 2. Executando o Backend
```bash
cd backend/PokeDex.Api
dotnet restore
dotnet run
```
O servidor estará rodando em `https://localhost:7181` (ou na porta configurada em `launchSettings.json`).

### 3. Executando o Frontend
```bash
cd frontend
npm install
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

---

## 📄 Estrutura de Pastas

```text
PokeDex/
├── backend/                # Backend em .NET
│   ├── PokeDex.Api/        # Camada de Apresentação (API)
│   ├── PokeDex.Application/# Regras de Aplicação
│   ├── PokeDex.Domain/     # Núcleo de Domínio
│   └── PokeDex.Infrastructure/ # Integrações e Serviços
├── frontend/               # Frontend em React
│   ├── src/                # Código fonte
│   └── public/             # Ativos estáticos
└── .gitignore              # Configuração de versionamento
```

---

## 🛡️ Licença
Este projeto está sob a licença de código aberto.

---

Desenvolvido com ☕ e ❤️ por [Luiz Barros](https://github.com/LuizHenrique-BS)
