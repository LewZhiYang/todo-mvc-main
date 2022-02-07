const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

// defining express settings
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// when main page is loaded use this
app.use('/', homeRoutes)

// when subdirectory starts with todos
app.use('/todos', todoRoutes)

// starts server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at ${process.env.PORT}, you better catch it!`)
})    