
const {allShows, allMovies, createUser, uploadMovie, featured, uploadShows,

    TopRatedMovies,
    TopRatedTvSeries, TopRatedTvSeriesAndMovies,
    ProjectsByStudio,
    ProjectsByPG,
    modifyShow
} = require('../models/videoModels.js')
const { rollback } = require('../db/db.js')
const fs = require("fs");
const path = require("path");



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

/*
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
}*/


const getRandomProjects = async (req, res)=>{
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





const postShow = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        const { title, desc, studio, imdb, pg, quality, season } = req.body;
        
        const cover = req.files?.cover ? req.files.cover[0].filename : null
        const episodes = req.files?.episodes ? req.files.episodes : null
        

        //console.log(req.files)

        //console.log(`${title}, ${desc}, ${studio}, ${imdb}, ${pg}, ${cover}, ${quality} ${episodes} ${season}`)

        //                               title, desc, studio, imdb, pg, cover, quality, episodes, season 
        const result = await uploadShows(title, desc, studio, imdb, pg, cover, quality, episodes, season)
        return res.status(201).json({message : 'sikerült:D ', result})
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}


const getTopRatedTvSeries = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        //const { title, desc, studio, imdb, pg, quality } = req.body;
        const count = req.params.count;

        
        const result = await TopRatedTvSeries(count)
        return res.status(201).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}

const getTopRatedMovies = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        //const { title, desc, studio, imdb, pg, quality } = req.body;
        const count = req.params.count;


        
        const result = await TopRatedMovies(count)
        return res.status(201).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}



const getTopRatedTvSeriesAndMovies = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        //const { title, desc, studio, imdb, pg, quality } = req.body;
        
        const count= req.params.count;
        
        const result = await TopRatedTvSeriesAndMovies(count)
        return res.status(201).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}

const getProjectsByStudio = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        //const { title, desc, studio, imdb, pg, quality } = req.body;
        
        const studio =req.params.studio;
        
        const result = await ProjectsByStudio(studio)
        return res.status(201).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}



const getProjectsByPG = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        //const { title, desc, studio, imdb, pg, quality } = req.body;
        
        const pg = req.params.pg;
        
        const result = await ProjectsByPG(pg)
        return res.status(201).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}



const putShow = async(req, res)=>{
    try {
        //title, desc, studio, imdb, pg, cover, image, quality
        //const { title, desc, studio, imdb, pg, quality } = req.body;
        
        const { showid, title, description, studio, imdbrating, pgrating, quality } = req.body;
        
        const result = await modifyShow(showid, title, description, studio, imdbrating, pgrating, quality)
        return res.status(201).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Adatbázis hiba ', err })
    }
}
















module.exports = {getAllShows, getAllMovies, getRandomProjects, postMovie, postShow, getTopRatedTvSeries, 
    getTopRatedMovies, getTopRatedTvSeriesAndMovies, getProjectsByStudio, getProjectsByPG, putShow};