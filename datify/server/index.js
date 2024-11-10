// server/index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Initialize SQLite database
const db = new sqlite3.Database('music.db');

// Create basic table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY,
    token_id TEXT,
    artist_address TEXT,
    play_count INTEGER DEFAULT 0
  )`);
});

app.use(express.json());

// Endpoint to handle song upload
app.post('/api/upload', (req, res) => {
  const { artistAddress } = req.body;
  
  db.run('INSERT INTO songs (artist_address, play_count) VALUES (?, ?)', 
    [artistAddress, 0],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    });
});

// Endpoint to record play
app.post('/api/play/:id', (req, res) => {
  const { id } = req.params;
  
  db.run('UPDATE songs SET play_count = play_count + 1 WHERE id = ?', 
    [id],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ success: true });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});