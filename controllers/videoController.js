const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {config} = require('../config/dotenvConfig')
const {allShows, allMovies, createUser, uploadVideo, featured} = require('../models/videoModels.js')
const { rollback } = require('../db/db.js')



const getAllShows = async (req, res)=>{
    try {
        const result = await allShows()

        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}


const getAllMovies = async (req, res)=>{
    try {
        const result = await allMovies()

        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}


const postVideo = async (req, res)=>{
    try {
        const { nev } = req.body;
        const video = req.file ? req.file.filename : null
        console.log(`${kep} ${nev}`)

        const result = await uploadVideo(nev, kep)

        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}


const getFeatured = async (req, res)=>{
    try {
        const {count} = req.body
        const result = await featured(count)

        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}







module.exports = {getAllShows, getAllMovies, getFeatured};