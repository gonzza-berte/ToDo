const { response } = require('express');

const Todo = require('../models/todo.model');


const getAllTodos = (req, res = response) => {
    Todo.find()
        .then(todos => {
            res.json({
                todos
            });
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: 'Please contact the administrator'
            });
        });
}

const createTodo = async (req, res = response) => {
    const {title, description} = req.body;
    if(!title || !description){
        return res.status(400).json({
            ok: false,
            msg: 'title and description are required'
        });
    }else{
        const todo = new Todo(req.body);
        todo.save()
            .then(todoDB => {
                res.json({
                    todo,
                });
            })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    msg: 'Please contact the administrator'
                });
            });
        }
    
}

const updateTodo = (req, res = response) => {
    // actualizar un registro
    const id = req.params.id;    
    const todo = req.body;
    // find by id and update
    Todo.findByIdAndUpdate(id, todo)
        .then(todoDB => {
            res.json({
                todo,
            });
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: 'Please contact the administrator'
            });
        });
}

const deleteTodo = (req, res = response) => {
    const id = req.params.id;    
    Todo.findByIdAndDelete(id)
        .then(todoDB => {
            res.json({
                ok: true,
                "msg": "Todo deleted"
            });
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: 'Please contact the administrator'
            });
        });        
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}