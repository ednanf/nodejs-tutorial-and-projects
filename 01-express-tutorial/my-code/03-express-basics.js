// Imports
const path = require('path');

const express = require('express');

// Instantiate express
const app = express();

// Setup static folder
app.use(express.static('./navbar-app')); // Usually we use a 'public' folder

// Routes
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Server start
app.listen(8000, () => {
  console.log('Listening on localhost:8000');
});
