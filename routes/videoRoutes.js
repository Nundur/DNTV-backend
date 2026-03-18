const express = require('express')
const {getVideo, postShow, postMovie, getAllShows, getAllMovies, getRandomProjects,
    getMovie, getShow, streamShow, streamMovie, 
    
    
    
    getTopRatedTvSeries, getTopRatedMovies, getTopRatedTvSeriesAndMovies, getProjectsByStudio, getProjectsByPG
} = require('../controllers/videoController.js')
const {auth} = require('../middleware/userMiddleware.js')
const ruter = express.Router();


const upload = require('../middleware/multer.js')


//done
ruter.get('/getAllShows', getAllShows)
ruter.get('/getAllMovies', getAllMovies)

ruter.post('/getRandomProjects', getRandomProjects)



ruter.get('/getTopRatedTvSeries/:count', getTopRatedTvSeries)
ruter.get('/getTopRatedMovies/:count', getTopRatedMovies)
ruter.get('/getTopRatedTvSeriesAndMovies/:count', getTopRatedTvSeriesAndMovies)


ruter.get('/getProjectsByStudio/:studio', getProjectsByStudio)
ruter.get('/getProjectsByPG/:pg', getProjectsByPG)

//ruter.post('/postMovie', auth, upload.single("movie"), postMovie)
ruter.post('/postMovie', auth, upload.fields([{name:"movie", maxCount : 1},{name:"cover", maxCount : 1}]), postMovie)
ruter.post('/postShow', auth, upload.fields([{name:"episodes", maxCount : 100},{name:"cover", maxCount : 1}]), postShow)

//ruter.get('/show/:filename', streamShow)
//ruter.get('/movie/:filename', streamMovie)

//ruter.post('/postShow', auth, postShow)

//kep, tilte, desc
//6 random filmet és sorozatot kiválaszt

//routek->controller->modellek->db       és vissza



module.exports = ruter