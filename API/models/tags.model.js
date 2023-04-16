const { Schema, model } = require('mongoose');

const Tag =  new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    value: {
        type: Number,
        required: [true, 'The value is required'],
    },
    date: {
        type: Date,
        default: Date.now
    },
    todoId: {
        type: Schema.Types.ObjectId,
        ref: 'Todo',
        required: true
    }
});

Tag.methods.toJSON = function() {
    const { __v, _id, ...tag } = this.toObject();
    tag.id = _id;
    return tag;
}

module.exports = model('Tag', Tag);