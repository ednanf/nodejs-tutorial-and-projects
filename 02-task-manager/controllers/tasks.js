// Controllers
const getAllTasks = (req, res) => {
  res.status(200).json({ success: true, data: { message: 'GET all tasks' } });
};

const createTask = (req, res) => {
  res.status(201).json({
    success: true,
    data: { message: 'POST task', contents: req.body },
  });
};

const getSingleTask = (req, res) => {
  res.status(200).json({
    success: true,
    data: { message: 'GET single task', id: req.params.id },
  });
};

const updateTask = (req, res) => {
  res.status(200).json({ success: true, data: { message: 'PATCH task' } });
};

const deleteTask = (req, res) => {
  res.status(200).json({ success: true, data: { message: 'DELETE task' } });
};

// Exports
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
