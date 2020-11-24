const mongoose = require("mongoose");

// models names
const names = require("../models/names");

// load database models
const Todo = mongoose.model(names.TODO);

exports.test = (req, res) => {
    res.json({ type: "test", result: "success" });
};

exports.createTodo = async (req, res) => {
    let statusCode = 500;
    try {
        const todo = new Todo({
            content: req.body.content,
            isDone: req.body.isDone,
        });
        const result = await todo.save();
        if (!result) {
            statusCode = 400;
            throw new Error("something went wrong while creating a todo");
        }
        res.status(201).send(result);
    } catch (err) {
        res.status(statusCode).send({ error: err });
    }
};

exports.fetchTodos = async (req, res) => {
    let statusCode = 500;
    try {
        const todos = await Todo.find();
        res.status(200).send(todos);
    } catch (err) {
        res.status(statusCode).send({ error: err });
    }
};

exports.fetchTodo = async (req, res) => {
    let statusCode = 500;
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            statusCode = 404;
            throw new Error(`todo with id ${req.params.id} not found`);
        }
        res.status(200).send(todo);
    } catch (err) {
        res.status(statusCode).send({ error: err });
    }
};

exports.updateTodo = async (req, res) => {
    let statusCode = 500;
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            statusCode = 404;
            throw new Error(`todo with id ${req.params.id} not found`);
        }

        todo.content = req.body.content || todo.content;
        if (req.body.isDone !== null) todo.isDone = req.body.isDone;

        const result = await todo.save();
        if (!result) {
            statusCode = 400;
            throw new Error(`something went wrong while updating todo with id ${req.params.id}`);
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(statusCode).send({ error: err });
    }
};

exports.deleteTodo = async (req, res) => {
    let statusCode = 500;
    try {
        const result = await Todo.findByIdAndDelete(req.params.id);
        if (!result) {
            statusCode = 404;
            throw new Error(`todo with id ${req.params.id} not found`);
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(statusCode).send({ error: err });
    }
};
