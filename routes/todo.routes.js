const { readTodo, createTodo, updateTodo, deleteTodo } = require("../controller/todo.controller")

const router = require("express").Router()

router
    .get("/", readTodo)
    .post("/add", createTodo)
    .put("/update/:id", updateTodo)
    .delete('/delete/:id', deleteTodo)
module.exports = router