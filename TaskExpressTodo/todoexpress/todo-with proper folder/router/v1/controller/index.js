const service = require("../services/index");

function getTodos(req,res) {
    res.json(service.getTodos());
}

function getTodo(req, res) {
  const todo = service.getTodo(req.params.id);

  if (!todo) return res.status(404).send("Todo not found");

  res.json(todo);
}

function createTodo(req, res) {
  const todo = service.createTodo(req.body);
  res.status(201).json(todo);
}
function editTodo(req, res) {
  const todo = service.updateTodo(req.params.id, req.body);

  if (!todo) return res.status(404).send("Todo not found");

  res.json(todo);
}

function deleteTodo(req, res) {
  service.deleteTodo(req.params.id);
  res.json({ message: "Todo deleted successfully" });
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  editTodo,
  deleteTodo
};