const express = require('express');
const path = require('path');
const app = express();

// Import JSON data
const items = require('./data/items.json');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to send JSON data
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

