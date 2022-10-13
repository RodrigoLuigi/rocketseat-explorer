//criando um objeto já exportado
module.exports = {
  jwt: {
    //utilizado para gerar o token, poderia ser uma hash ou uma palavra...
    secret: "default",
    //tempo válido de expiração do token
    expiresIn: "1d",
  }
}