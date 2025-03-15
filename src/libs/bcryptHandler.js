const bcrypt = require('bcrypt');

async function hashAllPasswords() {
  const passwords = [
    'a9bC2d3F', 'x1yZ4vW8', 'K7LmN5pQ', 'R3sT9uV2', 'wX8Y6Z1Q',
    'P5kLmN4A', 'M7nOpR3T', 'qX2yZ8W9', 'vK5LmN1P', 'a1bC3dF7',
    'T9uV2wX8', 'L5M7N1P3', 'R2sT6uV4'
  ];
  const startTime = Date.now();

  const promises = passwords.map(async (pwd, idx) => {
    const singleStart = Date.now();
    const hash = await bcrypt.hash(pwd, 10);
    const singleEnd = Date.now();
    console.log(`Пароль #${idx + 1} зашифрован за ${singleEnd - singleStart} мс`);
    return hash;
  });

  await Promise.all(promises);

  const totalEnd = Date.now();
  console.log(`Все пароли зашифрованы за: ${totalEnd - startTime} мс`);
}

module.exports = hashAllPasswords;
