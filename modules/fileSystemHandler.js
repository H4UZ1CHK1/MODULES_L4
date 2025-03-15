const fs = require('fs');
const path = require('path');

function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFile(filePath, data) {
  fs.writeFileSync(filePath, data);
}

function createDirAndFile(dirPath, fileName, data) {
  createDir(dirPath);
  const fullPath = path.join(dirPath, fileName);
  writeFile(fullPath, data);
}

module.exports = {
  createDir,
  writeFile,
  createDirAndFile
};
