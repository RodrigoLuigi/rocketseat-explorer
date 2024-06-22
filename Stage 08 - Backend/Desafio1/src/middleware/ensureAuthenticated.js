//Método de verificação do jsonwebtoken
const { verify } = require("jsonwebtoken");
//Arquivo de tratamento de exceções 
const AppError = require("../utils/AppError");
//configs do JWT token
const authConfig = require("../configs/auth");

//todo middleware tem o parâmetro next para prosseguir com o fluxo da requisição
function ensureAuthentication(request, response, next) {
  //acessando o cabeçalho da requisição e através do cabeçalho o token de autorização
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError("JWT Token não informado.", 401);
  }

  //exemplo: const ["Bare", "xxxxxx"] = authHeader.split(" ") então logo sem seguida omitimos o bare (informação desnecessária) e mantemos o token.
  //quebramos o texto do token em um array através do método split()
  const [, token] = authHeader.split(" ");


  try {
    //tenta verificar se é um token válido através do método verify do jsonwebtoken
    //através do verify conseguimos acessar o conteúdo através da propriedade sub e atribuimos um apelido "user_id" por questões semânticas.
    const {sub: user_id} = verify(token, authConfig.jwt.secret);

    //dentro da requisição criamos uma propriedade "user" e dentro dela passamos o "id" como number(user_id)
    request.user = {
      id: Number(user_id),
    };

    //se der tudo certo ele chama a próxima função do fluxo
    return next();
  } catch {
    throw new AppError("JWT Token inválido.", 401);
  }
} 

module.exports = ensureAuthentication;

