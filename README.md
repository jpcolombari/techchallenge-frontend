# Tech Challenge - Front-end do Blog

Este repositório contém o código-fonte do projeto de front-end para a plataforma de blogging, desenvolvido como parte do Tech Challenge da Pós-Graduação em Full Stack Development da FIAP.

O objetivo foi construir uma interface moderna, responsiva e funcional utilizando React e Next.js para consumir a API RESTful desenvolvida na fase anterior do desafio.

## Tecnologias Utilizadas

* **React & Next.js:** Biblioteca e framework para a construção da interface de usuário, com foco em performance e experiência de desenvolvimento.
* **TypeScript:** Garante a tipagem estática do código, tornando-o mais robusto e menos propenso a erros.
* **Styled Components:** Solução de CSS-in-JS para a criação de componentes estilizados, componentizados e com tema.
* **Storybook:** Ferramenta para desenvolvimento e documentação isolada do UI Kit de componentes.
* **Axios:** Cliente HTTP para realizar a comunicação com a API do back-end.
* **Font Awesome:** Biblioteca de ícones para melhorar a usabilidade da interface.
* **Radix UI:** Biblioteca de componentes "headless" para a criação de primitivos de UI acessíveis, como o Modal.
* **ESLint & Prettier:** Ferramentas para garantir a qualidade e a padronização do código.

## Documentação e Demonstração

* **Storybook (UI Kit):** A documentação visual de todos os componentes reutilizáveis pode ser acessada localmente após a instalação do projeto.
* **Deploy em Produção:** Uma versão da aplicação está publicada na Render e pode ser acessada aqui: **[https://techchallengeblog.onrender.com/](https://techchallengeblog.onrender.com/)**

## Setup e Instalação

Para rodar este projeto, você precisará ter o **Back-end** e o **Front-end** rodando em sua máquina.

### 1. Configurando o Back-end

O back-end é um projeto separado que precisa estar em execução para que o front-end possa consumir os dados.

*   **Siga as instruções de instalação e execução** que estão no repositório do back-end: **[https://github.com/jpcolombari/TechChallengeBlog](https://github.com/jpcolombari/TechChallengeBlog)**

Após seguir os passos, o back-end deverá estar rodando em `http://localhost:3000`.

### 2. Configurando o Front-end (Este Repositório)

**a) Clone o Repositório:**
```bash
git clone git@github.com:jpcolombari/techchallenge-frontend.git
cd techchallenge-frontend
```

**b) Crie o Arquivo de Ambiente:**
Crie um arquivo chamado `.env.local` na raiz do projeto e adicione a seguinte linha:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**c) Instale as Dependências:**
```bash
npm install
```

## Como Rodar o Projeto

Com o back-end já em execução, inicie o servidor de desenvolvimento do front-end:

**1. Rodar a Aplicação Principal:**
```bash
npm run dev
```
A aplicação estará disponível em **`http://localhost:3001`**.

**2. Rodar o Storybook (Opcional):**
Para visualizar os componentes de forma isolada, em outro terminal, execute:
```bash
npm run storybook
```
O Storybook estará disponível em **`http://localhost:6006`**.

## Funcionalidades Implementadas

*   **Listagem de Posts:** A página principal exibe todos os posts cadastrados em formato de cards.
*   **Busca Dinâmica:** Um campo de busca na página principal e no painel de admin que filtra os posts em tempo real, conforme o usuário digita.
*   **Leitura de Post:** Página dedicada para a leitura do conteúdo completo de um post.
*   **Sistema de Autenticação:**
    *   Fluxo completo de **Registro** e **Login** para usuários (professores) através de modais.
    *   Gerenciamento de sessão com **Token JWT**, salvo no `localStorage`.
    *   Uso de **Context API** para gerenciar o estado de autenticação globalmente.
*   **Painel Administrativo (`/admin`):**
    *   **Rota Protegida:** Acessível apenas para usuários autenticados.
    *   **Dashboard:** Exibe uma tabela com todos os posts e permite a busca local.
    *   **Criação de Post:** Um botão "Novo Post" abre um modal com um formulário para criar novas postagens.
    *   **Exclusão de Post:** Cada post tem um botão "Excluir" que abre um modal de confirmação antes de remover o post.
    *   **Edição de Post:** Um botão "Editar" abre um modal com o formulário já preenchido com os dados do post, permitindo a atualização.
*   **Componentização com Storybook:** Todos os principais elementos de UI (`Button`, `Input`, `Modal`, `PostCard`, etc.) foram criados como componentes reutilizáveis e documentados no Storybook.
*   **Responsividade:** O layout e os componentes foram construídos com princípios de design responsivo.