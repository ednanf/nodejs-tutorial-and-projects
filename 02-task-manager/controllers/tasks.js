// Imports
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

// Controllers
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res) => {
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
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const contents = req.body;
  // findOneAndUpdate({<id>}, <updated_content>, {<options>})
  const task = await Task.findOneAndUpdate({ _id: taskID }, contents, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res
      .status(404)
      .json({ success: false, message: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res
      .status(404)
      .json({ success: false, message: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

// Exports
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
