const { config } = require('./config/dotenvConfig')
const express = require('express')
const mysql = require('mysql2/promise')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes.js')

const videoRoutes = require('./routes/videoRoutes.js')
const adminRoutes = require('./routes/adminRoutes.js')


const app = express()
app.use(express.json())
app.use(cookieParser())
//app.use('/users', userRoutes)
app.use('/uploads', express.static('uploads'));

app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true
}))


app.use('/users', userRoutes)
app.use('/videos', videoRoutes)
app.use('/admin', adminRoutes)

//app.use('/users', userRoutes)

module.exports = app
