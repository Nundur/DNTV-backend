
const express = require('express')
const {register, login, whoAmI, logout} = require('../controllers/userController.js')
const {authAdmin} = require('../middleware/adminMiddleware.js');
const { getAllUsers } = require('../controllers/adminController.js');

const ruter = express.Router();

ruter.get('/getAllUsers', authAdmin, getAllUsers)




module.exports = ruter