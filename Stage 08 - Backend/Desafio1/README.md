# <h1 id="top" align="center">🎬 Rocket**Movies** 📽 API - Backend</h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#gear-features">Features</a> &#xa0; | &#xa0;
  <a href="#-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <a href="https://github.com/RodrigoLuigi" target="_blank">Author</a>
</p>

<br>

## <img id="sobre" src="https://imgur.com/VhTBbHg.png" alt="imagem de um notebook" align="center" width="30px"> _**O que desenvolvemos neste Projeto?**_

📌  Desenvolvemos toda a estrutura do projeto em módulos separados para escalabilidade e facilitar a manutenção da nossa aplicação. desenvolvolvimento com o Express para requisições HTTP e rotas para acessar os arquivos do controller e funcionalidades. É uma aplicação em que o usuário poderá cadastrar notas de filmes e séries, com tags e links vinculados a nota, poderá realizar pesquisa de notas bem como lista-las.
Desenvolvido utilizando **Node.js** e **Express.** Criação de um banco de dados utilizando **SQLite**, e manipulação do DataBase utilizando a ferramenta **Beekeper Studio** juntamente com o **Query Builder Knex.js**.

Foi implementado testes automatizados com **Jest** para garantir o bom funcionamento, e foi criado um Pipeline no github para manter um sistema de integração contínua e entrega contínua do (CI/CD) da nossa aplicação.

## :gear: Features ##

:heavy_check_mark: Cadastro de usuário\
:heavy_check_mark: Autenticação do usuário\
:heavy_check_mark: Atualiza perfil do usuário\
:heavy_check_mark: Upload Avatar do usuário\
:heavy_check_mark: Cadastro de Notas\
:heavy_check_mark: Pesquisar por Notas\
:heavy_check_mark: Listar Notas\
:heavy_check_mark: Detalhes da Nota\
:heavy_check_mark: Deletar Nota
## 👨‍💻 Tecnologias ##

As seguintes ferramentas foram usadas neste projeto:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.w3schools.com/js/default.asp)

## :books: Bibliotecas ##

_**As seguintes bibliotecas foram utilizadas neste projeto:**_

- [Express](https://expressjs.com/pt-br/)
- [SQLite](https://www.sqlite.org/docs.html)
- [Knex](https://knexjs.org/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)
- [JWT - Jason Web Token](https://jwt.io/introduction)
- [Multer](https://www.npmjs.com/package/multer)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Jest](https://jestjs.io/pt-BR/)
    
## 📝 Requisitos ##

- [Git](https://git-scm.com) 
- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)

## :checkered_flag: Iniciando ##

```bash
# Clone este projeto
$ git clone https://github.com/RodrigoLuigi/RocketMovies-Backend-API.git

# Acesse o projeto
$ cd RocketMovies-Backend-API

# Instale as dependências
$ npm install

# Inicializando Migrations
$ npm run migrate

# Inicializando projeto
$ npm start

# Inicializando projeto modo Desenvolvimento
$ npm run dev

# O Server irá inicializar em http://localhost:3333
```

## 🔗 Rotas ##

```bash
# [POST] Cadastra usuário
/users
# [PUT] Atualiza dados do usuário
/users
# [PATCH] Atualiza avatar do usuário
/users/avatar
# [GET] Lista todas as notas
/notes
# [GET] Detalhes da nota
/notes/:id
# [DEL] Deleta a nota
/notes/:id
# [POST] Criar nota
/notes
# [GET] Listar Tags
/tags
# [POST] Fazer login ou Iniciar sessão
/sessions
```

&#xa0;

_**Feito por <a href="https://github.com/RodrigoLuigi" target="_blank">Rodrigo Luigi</a>**_  👨‍🚀

<a href="#top">Back to top</a>
