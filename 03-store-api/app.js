require('@dotenvx/dotenvx').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./util/connect');

const productsRouter = require('./routes/products');

const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// Constants
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res, next) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});
app.use('/api/v1/products', productsRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Server start
const serverStart = async () => {
  try {
    await connectDB(MONGO_URI);
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
