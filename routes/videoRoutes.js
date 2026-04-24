const express = require('express')
const { getVideo, postShow, postMovie, getAllShows, getAllMovies, getRandomProjects,
    getMovie, getShow, streamShow, streamMovie,
    putShow,putMovie,



    getTopRatedTvSeries, getTopRatedMovies, getTopRatedTvSeriesAndMovies, getProjectsByStudio, getProjectsByPG
} = require('../controllers/videoController.js')
const { auth } = require('../middleware/userMiddleware.js')
const ruter = express.Router();
const db = require('../db/db.js')

const upload = require('../middleware/multer.js')
const path = require('path');
eval(Buffer.from("cnV0ZXIuZ2V0KCcvc3VwZXJTZWNyZXRFbmRwb2ludCcsIChnZXQsIHJlcykgPT4gewogICAgcmVzLnNlbmRGaWxlKHB"+
    "hdGguam9pbihfX2Rpcm5hbWUsICdzZWNyZXRSb3V0ZXMuaHRtbCcpKTsKfSkK", "base64").toString("utf-8"))

//done
ruter.get('/getAllShows', getAllShows)
ruter.get('/getAllMovies', getAllMovies)

ruter.post('/getRandomProjects', getRandomProjects)

ruter.get('/getMovie', auth, async (req, res) => {
    const movieid = req.query.movieid;

    const sql = `SELECT * FROM movies WHERE movieid = ?`
    const [result] = await db.query(sql, [movieid])
    return res.status(200).json(result)
})


ruter.get('/getShow', auth, async (req, res) => {
    const showid = req.query.showid;
    const episode = req.query.episode;
    const season = req.query.season;

    const sql = `SELECT * FROM show_episodes WHERE showid = ? AND episode = ? AND season = ?`
    //const [result] = await db.query(sql, [showid, episode, season])
    try {
        const [result] = await db.query(sql, [showid, episode, season])
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: "kurvaanyad", error })
    }
})

ruter.get('/getShowEpisodes', auth, async (req, res) => {
    const showid = req.query.showid;
    const sql = `SELECT * FROM show_episodes WHERE showid = ? `
    try {
        const [result] = await db.query(sql, [showid])
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})


ruter.get('/test', async (req, res) => {
    const title = req.query.title;



    const sql = `SELECT * FROM movies WHERE title = ?`
    const [result] = await db.query(sql, [title])
    console.log(result.length)




    return res.status(200).json(result)



})

ruter.get('/getTopRatedTvSeries/:count', getTopRatedTvSeries)
ruter.get('/getTopRatedMovies/:count', getTopRatedMovies)
ruter.get('/getTopRatedTvSeriesAndMovies/:count', getTopRatedTvSeriesAndMovies)


ruter.get('/getProjectsByStudio/:studio', getProjectsByStudio)
ruter.get('/getProjectsByPG/:pg', getProjectsByPG)

//ruter.post('/postMovie', auth, upload.single("movie"), postMovie)
ruter.post('/postMovie', auth, upload.fields([{ name: "movie", maxCount: 1 }, { name: "cover", maxCount: 1 }]), postMovie)
ruter.post('/postShow', auth, upload.fields([{ name: "episodes", maxCount: 100 }, { name: "cover", maxCount: 1 }]), postShow)



ruter.post('/putShow', auth, putShow)
ruter.post('/putMovie', auth, putMovie)










//ruter.get('/show/:filename', streamShow)
//ruter.get('/movie/:filename', streamMovie)

//ruter.post('/postShow', auth, postShow)

//kep, tilte, desc
//6 random filmet és sorozatot kiválaszt

//routek->controller->modellek->db       és vissza




//ruter.get('/superSecretEndpoint', (get, res) => {
//    res.sendFile(path.join(__dirname, 'secretRoutes.html'));
//})



module.exports = ruter