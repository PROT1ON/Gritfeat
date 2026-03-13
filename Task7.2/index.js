require("dotenv").config();

const express = require("express");
const connectDatabase = require("./src/config/database");

const todoRoutes = require("./src/routes/v1/todo/router");

const app = express();

app.use(express.json());

connectDatabase();
console.log(todoRoutes);
app.use("/api/v1/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});