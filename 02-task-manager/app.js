// Imports
const express = require('express');
const app = express();

const tasksRoutes = require('./routes/tasks');
const connectDB = require('./utils/connectDB');

// Constants
const PORT = 8000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasksRoutes);

// Server startup
const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on localhost:${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
