// Imports
const Task = require('../models/Task');

// Controllers
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
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
    res.status(201).json({ task });
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
    res.status(200).json({ task });
  } catch (error) {
    // If the id's syntax is wrong or any other issue exists
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Exports
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
