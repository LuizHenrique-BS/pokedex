# 🚀 PokéDex BFF

<br/>
<br/>

<p align="center">
  <img src="https://img.shields.io/badge/.NET%208-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET 8" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/PWA-005A9C?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
</p>

<br/>
<br/>

Bem-vindo ao repositório da **PokéDex**, uma aplicação fullstack moderna que consome a [PokeAPI](https://pokeapi.co/) para exibir informações detalhadas sobre os Pokémon. Este projeto foi desenvolvido com foco em aprofundar e solidificar conceitos de padrões de arquitetura de mercado.

---

## 📱 PWA (Progressive Web App)

A aplicação foi transformada em um **PWA completo**, permitindo uma experiência nativa em dispositivos móveis e desktops.

- **Instalável:** Pode ser adicionada à tela inicial (Home Screen) do seu smartphone ou instalada como aplicativo no desktop.
- **Offline First:** Graças ao **Service Worker** e ao **Workbox**, a aplicação funciona sem conexão à internet para dados já consultados.
- **Caching Inteligente:**
  - **Dados da API:** Utiliza a estratégia `StaleWhileRevalidate` (entrega o cache instantaneamente e atualiza em segundo plano).
  - **Imagens e Sprites:** Utiliza a estratégia `CacheFirst` para economizar banda e garantir performance máxima.
- **Compatibilidade:** Totalmente compatível com iOS (apple-touch-icon) e Android.

---

## 🌐 Link da Aplicação
A aplicação está disponível para acesso web através do link: **[https://pokedex-mu-inky-65.vercel.app/](https://pokedex-mu-inky-65.vercel.app/)**

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
- **React 19** com **TypeScript**.
- **Tailwind CSS 4** para estilização utilitária e responsiva.
- **Vite 8** para um build extremamente rápido.

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
Este projeto é de código aberto (open source).

---

Desenvolvido com ❤️ por [Luiz Barros](https://github.com/LuizHenrique-BS)
