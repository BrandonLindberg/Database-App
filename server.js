const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Example: get all users
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "table_1"');
    res.json(result.rows);
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});