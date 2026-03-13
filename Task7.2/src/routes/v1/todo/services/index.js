const todoRepo = require("../repository");

const createTodo = async (data) => {
  return await todoRepo.createTodo(data);
};
const getTodos = async () => {
    return await todoRepo.getTodos();
}
const getTodo = async (id) => {
  return await todoRepo.getTodo(id);
};

const updateTodo = async (id) => {
    return await todoRepo.updateTodo(id);
}

const deleteTodo = async (id) => {
    return await todoRepo.deleteTodo(id);
}
module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo
};