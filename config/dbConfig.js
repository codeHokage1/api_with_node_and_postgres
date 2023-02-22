const { Pool } = require('pg');
const newPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'postgres',
    port: 5432
});

module.exports = newPool;