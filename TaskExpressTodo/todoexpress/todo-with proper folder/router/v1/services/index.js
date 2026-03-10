const repo = require("../repository/index");
const { v4: uuidv4 } = require("uuid");

function getTodos() {
  return repo.getAllTodos();
}

function getTodo(id) {
  return repo.getTodoById(id);
}

function createTodo(data) {
  const todo = {
    id: uuidv4(),
    task: data.task,
    action: data.action
  };

  return repo.createTodo(todo);
}

function updateTodo(id, data) {
  return repo.updateTodo(id, data);
}

function deleteTodo(id) {
  repo.deleteTodo(id);
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};