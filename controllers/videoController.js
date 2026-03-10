const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {config} = require('../config/dotenvConfig')
const {allShows, allMovies, createUser, uploadMovie, featured} = require('../models/videoModels.js')
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




const postMovie = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        const { title, desc, studio, imdb, pg, quality } = req.body;
        const movie = req.files?.movie ? req.files.movie[0].filename : null
        const cover = req.files?.cover ? req.files.cover[0].filename : null
        console.log(`${title}, ${desc}, ${studio}, ${imdb}, ${pg}, ${cover}, ${quality} ${movie} `)

        
        const result = await uploadMovie(title, desc, studio, imdb, pg, cover, movie, quality)
        return res.status(201).json({message : 'sikerült:D ', result})
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}






module.exports = {getAllShows, getAllMovies, getFeatured, postMovie};