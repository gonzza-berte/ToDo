const { response } = require('express');

const getAllTodos = (req, res = response) => {
    res.json({
        msg : 'get API - controller',
    });
}


const createTodo = (req, res = response) => {
    res.json({
        msg : 'post API - controller',
    });
}

const updateTodo = (req, res = response) => {
    res.json({
        msg : 'put API - controller',
    });
}

const deleteTodo = (req, res = response) => {
    res.json({
        msg : 'delete API - controller',
    });
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}