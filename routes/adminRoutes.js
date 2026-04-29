
const express = require('express')
const {register, login, whoAmI, logout} = require('../controllers/userController.js')
const {authAdmin} = require('../middleware/adminMiddleware.js');
const { getAllUsers, bulkUpdateUsers, bulkUpdateMovies, bulkUpdateShows, deleteUser, deleteMovie, deleteShow } = require('../controllers/adminController.js');

const ruter = express.Router();

ruter.get('/getAllUsers', authAdmin, getAllUsers)
ruter.post('/bulk-update-users', authAdmin, bulkUpdateUsers)
ruter.post('/bulk-update-movies', authAdmin, bulkUpdateMovies)
ruter.post('/bulk-update-shows', authAdmin, bulkUpdateShows)

ruter.delete('/delete-user/:userid', authAdmin, deleteUser)
ruter.delete('/delete-movie/:userid', authAdmin, deleteMovie)
ruter.delete('/delete-show/:userid', authAdmin, deleteShow)





module.exports = ruter