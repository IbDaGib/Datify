const { Pool } = require('pg');

const pool = new Pool({
  user: 'music_app_user',
  host: 'localhost',
  database: 'music_app_db',
  password: '123',
  port: 5432,  // Default PostgreSQL port
});

module.exports = pool;
