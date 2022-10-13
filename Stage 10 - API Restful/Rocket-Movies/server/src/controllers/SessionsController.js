const knex = require("../database/knex");
const AppError = require("../utils/AppError");

//função do bcrypt utilizamos para fazer a comparação de senhas
const { compare } = require("bcryptjs");


class SessionsController {
  async create(request, response ) {
    //buscando email e senha do corpo da requisição
    const {email, password} = request.body;

    //busca usuário no banco de dados knet("users") na tabela "users" onde o email where({email}) corresponde com o email da requisição. firs() => para garantir que ele traga somente 1 usuário
    const user = await knex("users").where({email}).first();

    //validação se o usuário existe ou não em nosso banco de dados tabela 'user'
    if(!user){
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    //compara a senha da requisição com a senha cadastrada no banco de dados
    const passwordMatched = await compare(password, user.password);

    //validação da senha
    if(!passwordMatched){
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    return response.json(user);
  }
}

module.exports = SessionsController;