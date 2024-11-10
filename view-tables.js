const { Pool } = require('pg');

const pool = new Pool({
    user: 'music_app_user',
    host: 'localhost',
    database: 'music_app_db',
    password: 'securepassword123',
    port: 5432,  // Default PostgreSQL port
  });

async function viewTables() {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    console.log('Tables in database:', res.rows);
  } finally {
    client.release();
  }
}

viewTables().catch(err => console.error('Error executing query', err.stack));
