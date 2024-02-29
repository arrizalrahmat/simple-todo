const express = require('express');
const router = express.Router();
const db = require('../config/db');
const TodoController = require('../controllers/todo-controller');

//Get all Todos
router.get('/todo', async (req, res) => {
  const payload = await TodoController.getTodos();

  res.send(payload);
});

//Get one Todo
router.get('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const payload = await TodoController.getTodo(id);

  res.send(payload);
});

//Create Todo
router.post('/todo', async (req, res) => {
  const { title, description } = req.body;
  const { status } = await TodoController.createTodo({
    title,
    description,
  });
  if (status === 'ok') {
    res.send('Successfully added a new todo');
  }
});

//Update Todo
router.put('/todo/:id', async (req, res) => {});

//Delete Todo
router.delete('/todo/:id', async (req, res) => {});

module.exports = router;
