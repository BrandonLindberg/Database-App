const { Pool } = require('pg');

const pool = new Pool({
  user: 'appuser',
  host: '10.34.151.5', // IP of Machine A
  database: 'appdb',
  password: 'apppass',
  port: 5432,
});

module.exports = pool;