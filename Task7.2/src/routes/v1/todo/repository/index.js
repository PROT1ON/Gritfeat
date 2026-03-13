const Todo = require("../model");

const createTodo = (data) => {
  return Todo.create(data);
};
const getTodo = (id) => {
    return Todo.findById(id);
};
const getTodos = () => {
  return Todo.find(); 
};

const updateTodo = (id, data) => {
  return Todo.findByIdAndUpdate(id, data, { new: true });
};

const deleteTodo = (id) => {
  return Todo.findByIdAndDelete(id);
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo
};