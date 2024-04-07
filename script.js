// app.js (Node.js backend)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (HTML/CSS)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/chat', (req, res) => {
    const message = req.body.message;
    // Here you can implement logic to process the user's message and respond accordingly
    const response = `You said: ${message}`;
    res.json({ response });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
