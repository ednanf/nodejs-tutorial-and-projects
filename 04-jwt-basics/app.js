require('@dotenvx/dotenvx').config();
require('express-async-errors');
const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1', mainRouter);

// error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
