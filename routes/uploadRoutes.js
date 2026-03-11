const express = require('express')
const {getVideo, postShow, postMovie, getAllShows, getAllMovies, getFeatured,
    getMovie, getShow
} = require('../controllers/videoController.js')
const {auth} = require('../middleware/userMiddleware.js')
const ruter = express.Router();


const upload = require('../middleware/multer')


//done
ruter.get('/getAllShows', getAllShows)
ruter.get('/getAllMovies', getAllMovies)

//ruter.get('/getAllShow/:showid', getShow)
//ruter.get('/getAllMovie/:movieid', getMovie)

//
ruter.post('/getFeatured', getFeatured)//




//ruter.post('/postMovie', auth, upload.single("movie"), postMovie)
ruter.post('/postMovie', auth, upload.fields([{name:"movie", maxCount : 1},{name:"cover", maxCount : 1}]), postMovie)






//ruter.post('/postShow', auth, postShow)

//kep, tilte, desc
//6 random filmet és sorozatot kiválaszt




//ruter.get('/getShow', getVideo)
//ruter.get('/getMovie', getVideo)


//routek->controller->modellek->db       és vissza



module.exports = ruter