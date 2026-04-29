
const {allUsers, bulkUpdate, bulkUpdateM, bulkUpdateS, deleteUserById, deleteShowById, deleteMovieById} = require('../models/adminModels.js')
const { rollback } = require('../db/db.js')



const getAllUsers = async (req, res)=>{
    try {
        const result = await allUsers()

        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}

const bulkUpdateUsers = async (req, res)=>{
    try {
        const users = req.body

        const result = await bulkUpdate(users)

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}

const bulkUpdateMovies = async (req, res)=>{
    try {
        const movies = req.body
        //console.log(`${movies[0].movieid} ${movies[0].title} ${movies[0].description} ${movies[0].imdbrating} `)
        const result = await bulkUpdateM(movies)

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}




const bulkUpdateShows = async (req, res)=>{
    try {
        const shows = req.body
        //console.log(`${shows[0].showid} ${shows[0].title} ${shows[0].description} ${shows[0].imdbrating} `)
        const result = await bulkUpdateS(shows)

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}

const deleteUser = async (req, res)=>{
    try {
        const userid = req.params.userid
        //console.log(`${shows[0].showid} ${shows[0].title} ${shows[0].description} ${shows[0].imdbrating} `)
        const result = await deleteUserById(userid)

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}


const deleteMovie = async (req, res)=>{
    try {
        const movieid = req.params.movieid
        //console.log(`${shows[0].showid} ${shows[0].title} ${shows[0].description} ${shows[0].imdbrating} `)
        const result = await deleteMovieById(movieid)

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}


const deleteShow = async (req, res)=>{
    try {
        const showid = req.params.showid
        //console.log(`${shows[0].showid} ${shows[0].title} ${shows[0].description} ${shows[0].imdbrating} `)
        const result = await deleteShowById(showid)

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}





module.exports = {getAllUsers, bulkUpdateUsers, bulkUpdateMovies, bulkUpdateShows, deleteUser, deleteShow, deleteMovie};