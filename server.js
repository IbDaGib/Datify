const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/upload', (req, res) => {
    // Logic to create NFT and store artist details
    res.send("NFT Created");
});

app.post('/play', (req, res) => {
    // Logic to track song plays and payments
    res.send("Song Played");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});