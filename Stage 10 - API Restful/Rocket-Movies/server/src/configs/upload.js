const path = require("path");
const multer = require("multer");
//biblioteca para gerar um Hash(criptografia)
const crypto = require("crypto")

//CONFIGURAÇÂO DE PASTA TEMPORÁRIA (RAIZ DO PROJETO PASTA "tmp")
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
// CRIA PASTA "uploads" AONDE DE FATO OS ARQUIVOS DE UPLOAD IRÃO FICAR
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

//CONFIGS DO MULTER PARA FAZER O UPLOAD
const MULTER = {
  storage: multer.diskStorage({
    //DESTINO PARA AONDE IREMOS MANDAR OS ARQUIVOS
    destination: TMP_FOLDER,
    //DEFINIMOS A FORMA COMO É PASSADO O NOME DO ARQUIVO COM A CRYPTO PARA GARANTIR QUE NÃO TENHA IMAGENS DUPLICADAS PARA O MESMO USUÁRIO
    filename(request, file, callback){
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
}