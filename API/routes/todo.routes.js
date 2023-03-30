const { Router } = require('express');
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller');

const router = Router();

router.get('/', getAllTodos);

router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/', deleteTodo);

module.exports = router;

