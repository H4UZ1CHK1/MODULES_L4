const { loadUsers } = require('./modules/dataLoader');
const { sortStringsIgnoreSpaces } = require('./modules/stringSorter');
const { createDir, writeFile } = require('./modules/fileSystemHandler');

async function main() {
  const { data: users, error } = await loadUsers();

  if (error) {
    console.error('Ошибка при загрузке пользователей:', error);
    return;
  }

  const names = users.map(user => user.name);
  const emails = users.map(user => user.email);

  const sortedNames = sortStringsIgnoreSpaces(names);

  createDir('users');
  writeFile('users/names.txt', sortedNames.join('\n'));
  writeFile('users/emails.txt', emails.join('\n'));

  console.log('Файлы names.txt и emails.txt созданы.');
}

main();
