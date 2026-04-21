
const express = require('express')
const {register, login, whoAmI, logout, modifyUser} = require('../controllers/userController.js')
const {auth} = require('../middleware/userMiddleware.js')

const ruter = express.Router();

ruter.post('/register', register)
ruter.post('/login', login)
ruter.get('/whoami', auth, whoAmI)
ruter.post('/logout', auth, logout)

ruter.put('/modifyUser', auth, modifyUser)



module.exports = ruter