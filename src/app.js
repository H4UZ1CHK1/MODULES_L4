const hashAllPasswords = require('./libs/bcryptHandler');
const loadUsers = require('./modules/dataLoader');

async function startApp() {
  await hashAllPasswords();

  const { data: users, error } = await loadUsers();
  if (error) {
    console.error('Ошибка при загрузке данных:', error);
    return;
  }

  console.log('Данные загружены:', users);
}

startApp();
