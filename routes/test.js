
// added to learn stuff
const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

router.post('/', todosController.createTodo)
