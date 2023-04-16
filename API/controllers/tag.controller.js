const response = require('express');

const Tag = require('../models/tags.model');
const Todo = require('../models/todo.model');

const createTag = async (req, res = response) => {
    
    const {name, value, todoId} = req.body;

    const todo = await Todo.findById(todoId)
    .then(todo => {
        return todo;
    })

    if(!name || !value || !todoId){
        return res.status(400).json({
            ok: false,
            msg: 'name, value and todoId are required'
        });
    }else{
        
        const tag = new Tag(req.body);
        tag.save()
        .then(() => {
            todo.tags.push(tag);
            todo.save();
            res.json({
                tag
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

const deleteTag = (req, res = response) => {
    // borrar un registro
    const id = req.params.id;
    Tag.findByIdAndDelete(id)
        .then(() => {
            res.json({
                ok: true,
                msg: 'Tag deleted'
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
    createTag,
    deleteTag
};
