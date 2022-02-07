const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const testRoutes = require('./test')
const app = express()

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

// added to learn stuff

router.get('/test123', testRoutes)
// app.use('/test123', testRoutes)
// app.route('/test123').get(todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router