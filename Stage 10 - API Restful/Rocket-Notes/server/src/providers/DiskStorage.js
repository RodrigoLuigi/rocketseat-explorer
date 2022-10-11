const fs = require("fs");
const path = require("path");
const uploadConifg = require("../configs/upload");

class DiskStorage {
  async saveFile(file){
    await fs.promises.rename(
      path.resolve(uploadConifg.TMP_FOLDER, file),
      path.resolve(uploadConifg.UPLOADS_FOLDER, file)
    );

    return file;
  }

  async deleteFile(file){
    const filePath = path.resolve(uploadConifg.UPLOADS_FOLDER, file);
    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = DiskStorage;