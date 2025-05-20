const express = require('express');

const peopleRouter = require('./my-code/06-express-router/routes/people');
const authRouter = require('./my-code/06-express-router/routes/auth');

const app = express();

// Static assets
app.use(express.static('./methods-public'));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse JSON
app.use(express.json());

// Routes
app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

app.listen(8000, () => {
  console.log('Server is listening on localhost:8000');
});
