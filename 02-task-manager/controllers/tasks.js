// Imports
const Task = require('../models/Task');

// Controllers
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res
      .status(200)
      .json({ success: true, message: 'GET all tasks', data: { tasks } });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      message: 'POST task',
      data: { contents: task },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleTask = async (req, res) => {
  try {
    // Added "taskID" alias when destructuring for clarity
    const { id: taskID } = req.params;
    // "findOne" will store the whole task object inside "task"
    const task = await Task.findOne({ _id: taskID });
    // If the id's syntax is correct but doesn't exist
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: `No task with id: ${taskID}` });
    }
    res.status(200).json({
      success: true,
      message: 'GET single task',
      data: { task },
    });
  } catch (error) {
    // If the id's syntax is wrong or any other issue exists
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTask = (req, res) => {
  res.status(200).json({ success: true, message: 'PATCH task', data: {} });
};

const deleteTask = (req, res) => {
  res.status(200).json({ success: true, message: 'DELETE task', data: {} });
};

// Exports
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
