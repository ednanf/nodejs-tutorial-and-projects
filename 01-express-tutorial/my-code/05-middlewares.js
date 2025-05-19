const express = require('express');

const logger = require('./my-code/05a-middleware');
const authorize = require('./my-code/05b-middleware2');

const app = express();

// Middleware
app.use([logger, authorize]); // executed in order

// Middlewares can have a path to apply only to specific paths
app.use('/api', (req, res, next) => {
  console.log('The user hit the API!');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);

  res.send('Items');
});

app.listen(8000, () => {
  console.log('Server is listening on localhost:8000');
});
