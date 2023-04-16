const expres = require('express');
const { Schema, model } = require('mongoose');

const Todo =  new Schema({
    title: {
        type: String,
        required: [true, 'The title is required']
    },
    description : {
        type: String,
        required: [true, 'The description is required'],
    },
    date: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: false
    }]
});

Todo.methods.toJSON = function() {
    const { __v, _id, ...todo } = this.toObject();
    todo.id = _id;
    return todo;
}

module.exports = model('Todo', Todo);
