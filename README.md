# Projeto Full-Stack: Mensageiro Simples

Uma aplicação web full-stack básica construída com o stack MERN (MongoDB, Express, React, Node.js) utilizando Next.js para o frontend. A aplicação permite que um usuário envie uma mensagem de texto, que é salva em um banco de dados MongoDB, e recebe de volta um código de confirmação gerado dinamicamente.


---

## 🚀 Funcionalidades

-   **Interface Simples:** Uma tela limpa construída com React e Next.js para enviar mensagens.
-   **API RESTful:** Backend robusto com Node.js e Express para gerenciar as requisições.
-   **Persistência de Dados:** Integração com um banco de dados NoSQL (MongoDB) para armazenar as mensagens.
-   **Feedback Dinâmico:** Geração de um código único no backend para cada mensagem enviada com sucesso.
-   **Manuseio de Estado:** Gerenciamento de estados de carregamento e erro para uma melhor experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

#### **Frontend**

-   [**Next.js**](https://nextjs.org/) - Framework React para produção.
-   [**React**](https://reactjs.org/) - Biblioteca para construir interfaces de usuário.
-   [**CSS Modules**](https://github.com/css-modules/css-modules) - Para estilização local e organizada.

#### **Backend**

-   [**Node.js**](https://nodejs.org/) - Ambiente de execução para JavaScript no servidor.
-   [**Express**](https://expressjs.com/) - Framework minimalista para a criação da API.
-   [**Mongoose**](https://mongoosejs.com/) - Modelagem de objetos para o MongoDB.
-   [**Dotenv**](https://github.com/motdotla/dotenv) - Para gerenciar variáveis de ambiente.
-   [**CORS**](https://github.com/expressjs/cors) - Para permitir requisições cross-origin.

#### **Banco de Dados**

-   [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) - Serviço de banco de dados na nuvem.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [Git](https://git-scm.com)
-   Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
-   Uma **URL de Conexão** do MongoDB (você pode obter uma gratuitamente no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    cd nome-do-repositorio
    ```

2.  **Configure o Backend:**
    ```bash
    # Navegue até a pasta do backend
    cd backend

    # Instale as dependências
    npm install

    # Crie um arquivo .env para as variáveis de ambiente
    # (você pode copiar do .env.example se houver um)
    # Adicione a sua URL de conexão do MongoDB nele:
    # MONGO_URI=sua_url_de_conexao_do_mongodb
    ```

3.  **Configure o Frontend:**
    ```bash
    # Volte para a raiz e navegue até a pasta do frontend
    cd ../frontend

    # Instale as dependências
    npm install
    ```

4.  **Rode a Aplicação:**
    Você precisará de **dois terminais** abertos.

    -   **No Terminal 1 (Backend):**
        ```bash
        # Dentro da pasta /backend
        npm start
        # ou
        node server.js
        ```
        *O servidor backend estará rodando em `http://localhost:5001`.*

    -   **No Terminal 2 (Frontend):**
        ```bash
        # Dentro da pasta /frontend
        npm run dev
        ```
        *O servidor frontend estará disponível em `http://localhost:3000`.*

5.  **Acesse a aplicação** abrindo seu navegador e visitando `http://localhost:3000`.

---

## 📁 Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

/
├── backend/                # Contém todo o código da API Node.js
│   ├── models/
│   │   └── Message.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/               # Contém todo o código da interface Next.js
├── app/
│   ├── page.module.css
│   └── page.tsx
├── package.json
└── ...


