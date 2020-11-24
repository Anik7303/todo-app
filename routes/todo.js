const express = require("express");

const router = express.Router();

const { todo: controller } = require("../controllers");

router.get("/test", controller.test);

router.get("/", controller.fetchTodos);

router.get("/:id", controller.fetchTodo);

router.post("/", controller.createTodo);

router.patch("/:id", controller.updateTodo);

router.delete("/:id", controller.deleteTodo);

module.exports = router;
