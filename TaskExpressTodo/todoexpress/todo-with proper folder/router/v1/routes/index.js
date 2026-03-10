const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/todos", controller.getTodos);
router.get("/todos/:id",controller.getTodo );
router.post("/todos", controller.createTodo);
router.put("/todos", controller.editTodo);
router.delete("/todos", controller.deleteTodo);

module.exports = router;