//CRUD
const asyncHandler = require("express-async-handler")
const Todo = require("../modal/Todo")
const { io } = require("../socket/socket")

exports.createTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    const result = await Todo.find()
    io.emit("Todo-Create-Response", result)
    res.json({ message: "createTodo Success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "readTodo Success", result })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params, { ...req.body, complete: true })
    res.json({ message: "updateTodo Success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    const result = await Todo.find()
    io.emit("Todo-Create-Response", result)
    res.json({ message: "deleteTodo Success" })
})