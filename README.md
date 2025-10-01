# 🚀 Tech Challenge - Front-end do Blog

Este repositório contém o código-fonte do projeto de front-end para a plataforma de blogging, desenvolvido como parte do Tech Challenge da Pós-Graduação em Full Stack Development da FIAP. A interface foi construída como uma **Single-Page Application (SPA)** moderna e responsiva, utilizando React e Next.js para consumir a API RESTful do back-end.

## 🌐 Acesso ao Projeto em Produção

* **Front-end (Aplicação):** **[https://techchallenge-frontend-main.onrender.com/](https://techchallenge-frontend-main.onrender.com/)**
* **Back-end (API Consumida):** **[https://techchallengeblog.onrender.com/api](https://techchallengeblog.onrender.com/api)**

> ### ⚠️ Atenção: Como "Acordar" a Aplicação
>
> Ambas as aplicações estão no plano gratuito do Render e hibernam ("dormem") após 15 minutos de inatividade. Para uma melhor experiência no primeiro acesso, siga estes passos:
>
> 1.  **Primeiro, "acorde" o back-end:** Acesse a URL da API, por exemplo, a documentação do Swagger: **[https://techchallengeblog.onrender.com/api](https://techchallengeblog.onrender.com/api)**. Aguarde cerca de 30-60 segundos até a página carregar completamente.
> 2.  **Agora, acesse o front-end:** Abra a URL da aplicação: **[https://techchallenge-frontend-main.onrender.com/](https://techchallenge-frontend-main.onrender.com/)**. Como o back-end já está ativo, a aplicação carregará os posts corretamente.

## 🛠️ Tecnologias Utilizadas

* **React & Next.js:** Framework para a construção da interface de usuário.
* **TypeScript:** Garante a tipagem estática do código, tornando-o mais robusto.
* **Styled Components:** Solução de CSS-in-JS para a criação de componentes estilizados e com tema.
* **Storybook:** Ferramenta para desenvolvimento e documentação isolada do UI Kit de componentes.
* **Docker:** Containerização da aplicação para garantir consistência entre ambientes.
* **GitHub Actions:** Automação de CI/CD para build e publicação da imagem Docker.
* **Axios:** Cliente HTTP para realizar a comunicação com a API do back-end.
* **Radix UI:** Biblioteca de componentes "headless" para a criação de primitivos de UI acessíveis.

## 🧱 Arquitetura da Aplicação

A aplicação foi estruturada seguindo as melhores práticas do ecossistema React/Next.js, com foco em componentização, gerenciamento de estado e escalabilidade.

1.  **Estrutura de Roteamento:** Utilizamos o **App Router** do Next.js, onde a estrutura de pastas dentro de `src/app` define automaticamente as rotas da aplicação (ex: `app/posts/[id]/page.tsx` cria a rota dinâmica para visualizar um post).

2.  **Componentização:** A interface foi dividida em pequenos componentes reutilizáveis (localizados em `src/components`), como `Button`, `Input`, `Modal` e `PostCard`. Essa abordagem facilita a manutenção e permite o desenvolvimento isolado de cada parte da UI, documentada com o **Storybook**.

3.  **Gerenciamento de Estado:** Para o estado de autenticação do usuário, foi implementado o **Context API** do React (`AuthContext`). Isso permite que o estado (se o usuário está logado ou não) seja compartilhado globalmente por toda a aplicação sem a necessidade de "prop drilling".

4.  **Comunicação com a API:** Toda a lógica de comunicação com o back-end está centralizada em `src/services/api.ts`. Utilizamos o **Axios** para fazer as requisições HTTP, mantendo a lógica de negócio desacoplada dos componentes de UI.

5.  **Estilização:** Optamos por **Styled Components** para uma abordagem de CSS-in-JS, que permite escrever CSS diretamente nos arquivos de componente. Isso garante que os estilos sejam escopados e viajem junto com seus respectivos componentes.

## ⚙️ Como Rodar a Aplicação Principal (com Docker)

Esta é a forma recomendada para rodar a aplicação final, pois simula o ambiente de produção.

**Pré-requisitos:**
* Docker Desktop instalado e em execução.
* O back-end do projeto precisa estar rodando (localmente ou em produção).

1.  **Clone o Repositório:**
    ```bash
    git clone git@github.com:jpcolombari/techchallenge-frontend.git
    cd techchallenge-frontend
    ```
2.  **Crie o Arquivo de Ambiente:**
    Crie um arquivo chamado `.env.local` na raiz do projeto e adicione a seguinte linha para apontar para o back-end local:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```
3.  **Construa a Imagem Docker:**
    ```bash
    docker build -t techchallenge-frontend:local .
    ```
4.  **Inicie o Container:**
    ```bash
    docker run -d -p 3001:3001 --name frontend-local techchallenge-frontend:local
    ```
5.  **Acesso:** A aplicação estará disponível em **`http://localhost:3001`**.

**Comandos úteis do Docker:**
* Para parar o container: `docker stop frontend-local`
* Para iniciar novamente: `docker start frontend-local`
* Para remover o container: `docker rm -f frontend-local`

## 📖 Como Trabalhar com o Storybook (Desenvolvimento de Componentes)

O Storybook é uma ferramenta de desenvolvimento para visualizar e testar os componentes da UI de forma isolada. Ele deve ser rodado **fora do Docker**, diretamente na sua máquina.

**Pré-requisitos:** Node.js v20+ e `npm` instalados.

1.  **Instale as Dependências (se ainda não o fez):**
    Na raiz do projeto, execute:
    ```bash
    npm install
    ```
2.  **Inicie o Storybook:**
    ```bash
    npm run storybook
    ```
3.  **Acesso:** O Storybook estará disponível em **`http://localhost:6006`**.

## 🎯 Desafios e Aprendizados

* **Gerenciamento de Estado de Autenticação:** Implementar o `AuthContext` foi um desafio interessante para garantir que a interface reagisse corretamente às ações de login e logout sem a necessidade de recarregar a página, proporcionando uma verdadeira experiência de SPA.
* **Docker e Variáveis de Ambiente:** Configurar o `Dockerfile` e o workflow de CI/CD para injetar corretamente a variável de ambiente `NEXT_PUBLIC_API_URL` foi um aprendizado crucial. A distinção entre variáveis de build-time (para o front-end) e run-time (para o back-end) ficou muito clara nesse processo.
* **Roteamento e Páginas Dedicadas:** A decisão de migrar a funcionalidade de "Editar Post" de um modal para uma página dedicada (`/admin/edit/[id]`) melhorou significativamente a organização do código e a experiência do usuário, reforçando a importância da arquitetura de rotas.
* **Deploy Contínuo:** Configurar o pipeline no GitHub Actions para construir a imagem Docker e publicá-la no GitHub Container Registry, e depois configurar o Render para fazer o deploy a partir dessa imagem, fechou o ciclo de automação e nos deu uma experiência real de um fluxo de trabalho de DevOps.