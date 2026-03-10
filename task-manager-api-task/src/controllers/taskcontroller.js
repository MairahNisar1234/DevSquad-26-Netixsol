const Task = require("../models/Task");

exports.getTasks = async (req, res) => {

  const tasks = await Task.find({ user: req.user.id });

  res.json(tasks);
};

exports.createTask = async (req, res) => {

  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id
  });

  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {

  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  res.json(task);
};

exports.deleteTask = async (req, res) => {

  await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  res.json({ message: "Task deleted" });
};
exports.getTasksbyCategory = async (req, res) => {
    const query = req.query.completed ? { completed: req.query.completed } : {};
    const tasks = await Task.find({ user: req.user.userId, ...query });
    res.json(tasks);
};