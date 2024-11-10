const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.static('public')); // Serve static files in the 'public' folder

// Endpoint to handle the upload (minting NFT)
app.post('/upload', (req, res) => {
    const { songId, artistAddress } = req.body;
    console.log(`Minting NFT for song ID: ${songId} by artist: ${artistAddress}`);
    // TODO: Implement minting logic
    res.json({ message: 'NFT minted successfully!' });
});

// Endpoint to handle playing a song
app.post('/play', (req, res) => {
    const { songId } = req.body;
    console.log(`Playing song ID: ${songId}`);
    // TODO: Implement song playing logic
    res.json({ message: 'Song played successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
