const { config } = require('./config/dotenvConfig')
const express = require('express')
const mysql = require('mysql2/promise')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/userRoutes.js')



const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use(cookieParser())

//app.use('/users', userRoutes)

module.exports = app
