const dotenv = require('dotenv');
const path = require('path');

const currentMode = process.env.MODE;

let envFilePath;
switch (currentMode) {
  case 'production':
    envFilePath = path.join(__dirname, '..', '..', '.env.production');
    break;
  case 'domain':
    envFilePath = path.join(__dirname, '..', '..', '.env.domain');
    break;
  default:
    envFilePath = path.join(__dirname, '..', '..', '.env.development');
}

dotenv.config({ path: envFilePath });

console.log('Текущий режим:', process.env.MODE);
