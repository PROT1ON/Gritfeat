let todos = [
  { id: 1, task: "Eat breakfast", action: true },
  { id: 2, task: "Eat dinner", action: false }
];

function getAllTodos() {
  return todos;
}

function getTodoById(id) {
  return todos.find(todo => todo.id == id);
}

function createTodo(todo) {
  todos.push(todo);
  return todo;
}

function updateTodo(id, data) {
  const todo = todos.find(t => t.id == id);
  if (!todo) return null;

  todo.task = data.task;
  todo.action = data.action;

  return todo;
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id != id);
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};