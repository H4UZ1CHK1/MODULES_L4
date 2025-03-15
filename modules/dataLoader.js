const https = require('https');

function loadData() {
    return new Promise((resolve) => {
        const result = {
            data: [],
            isLoading: true,
            error: null
        };

        https.get('https://jsonplaceholder.typicode.com/users', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    result.data = JSON.parse(data);
                } catch (err) {
                    result.error = 'Ошибка при разборе данных: ' + err.message;
                } finally {
                    result.isLoading = false;
                    resolve(result);
                }
            });
        }).on('error', (err) => {
            result.error = 'Ошибка при загрузке данных: ' + err.message;
            result.isLoading = false;
            resolve(result);
        });
    });
}

module.exports = loadData;
