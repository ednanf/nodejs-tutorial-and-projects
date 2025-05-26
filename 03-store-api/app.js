require('@dotenvx/dotenvx').config();
const express = require('express');
const app = express();

const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// Constants
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res, next) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Server start
const serverStart = async () => {
  try {
    //TODO: add connectDB
    app.listen(PORT, () => {
      console.log(`[system] Server listening on localhost:${PORT}...`);
    });
  } catch (error) {
    console.error(`[system] ERROR: failed to start the server...`);
    console.error(`[system] MESSAGE: ${error.message}`);
    process.exit(1);
  }
};

serverStart();
