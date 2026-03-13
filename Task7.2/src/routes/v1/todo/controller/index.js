const todoService = require("../services");

const createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    console.log(todos); 
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getTodo = async (req, res) => {
  try {
    const todo = await todoService.getTodo(req.params.id);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await todoService.updateTodo(req.params.id, req.body);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await todoService.deleteTodo(req.params.id);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo
};