// Imports
const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

// Routes - /api/v1/tasks/*
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

// Exports
module.exports = router;
