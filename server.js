const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.get('/view', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "table_1"');
    res.json(result.rows);
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.post('/add', async (req, res) => {
  const { name } = req.body;

  try {
    const result = await pool.query('INSERT INTO "table_1" (name) VALUES ($1) RETURNING *', [name]);
    res.json(result.rows[0]);
  }
  catch {
    console.log('oopsies :(');
  }
});

app.listen(4012, () => {
  console.log('Server running on port 4012');
});