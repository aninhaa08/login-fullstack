# 🔐 Login Fullstack (CRUD)

Este é um projeto fullstack desenvolvido com foco prático na manipulação e gestão de uma base de dados de utilizadores. A aplicação foi construída para consolidar conhecimentos, integrando o frontend com uma API no backend e implementando operações essenciais (GET, POST, PUT e DELETE). 

O desenvolvimento foi guiado por pesquisas e materiais de estudo, com destaque especial para os conteúdos do canal **DevClub**, que serviram como uma excelente base para a construção desta aplicação.

## ✨ Funcionalidades
*   **Registo de Utilizadores (POST):** Formulário no frontend para inserção de novos utilizadores na base de dados.
*   **Listagem de Utilizadores (GET):** Retorno e exibição dos dados registados na interface.
*   **Exclusão de Utilizadores (DELETE):** Remoção de registos diretamente pelo frontend.
*   **Feedbacks Visuais:** Uso de alertas (toasts) para indicar sucesso ou erro nas operações.

## 🚀 Tecnologias Utilizadas

**Frontend:**
*   **React + Vite:** Para renderização rápida e ambiente de desenvolvimento otimizado.
*   **Sass:** Estilização componentizada da interface.
*   **React Hook Form:** Gestão de estado e validação dos formulários.
*   **Axios:** Consumo da API REST.
*   **React Hot Toast & Phosphor Icons:** Feedbacks visuais e ícones para melhorar a experiência de uso (UX).

**Backend:**
*   **Node.js + Express:** Criação das rotas da API.
*   **Prisma ORM:** Modelação da base de dados e tipagem automática das queries.
*   **CORS:** Libertação de comunicação entre as portas do front e do back.

## 📂 Estrutura do Projeto

```bash
/
  /back_end                 # API Node + Express
    /prisma                 # Schemas e migrations da base de dados
    server.js               # Ponto de entrada da API
    package.json            # Dependências do backend
  /front_end/frontEnd_login # Aplicação React (Vite)
    /src                    # Código-fonte (assets, components, services)
      App.jsx               # Componente principal
      App.scss              # Estilos do componente principal
      main.jsx              # Ponto de entrada do React
    vite.config.js          # Configuração do Vite
    eslint.config.js        # Configuração do linter
    package.json            # Dependências do frontend
