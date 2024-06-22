// função do próprio node para lidar com arquivos
const fs = require("fs");
// função do próprio node para lidar com diretórios
const path = require("path");
// configurações de upload
const uploadConfig = require("../configs/upload");

class DiskStorage {
  async saveFile(file) {
    // função para mudar o arquivo recebido como parâmetro de pasta, da pasta TMP para UPLOADS
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );
    return file;
  }

  async deleteFile(file) {
    // pega o endereço do arquivo na pasta "uploads"
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

    try {
      //pega o estado do arquivo
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    //deleta o arquivo
    await fs.promises.unlink(filePath);

  }
}

module.exports = DiskStorage;
