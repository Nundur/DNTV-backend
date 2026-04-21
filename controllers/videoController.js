
const {allShows, allMovies, createUser, uploadMovie, featured, uploadShows,

    TopRatedMovies,
    TopRatedTvSeries, TopRatedTvSeriesAndMovies,
    ProjectsByStudio,
    ProjectsByPG
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
















/*
const streamShow = (req, res) => {
    const videoPath = path.join("uploads/movies", req.params.filename);
  






    if (!fs.existsSync(videoPath)) {
      return res.status(404).send("Video not found");
    }
  
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
  
    const range = req.headers.range;
    if (!range) return res.status(400).send("Range header required");
  
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
  
    const stream = fs.createReadStream(videoPath, { start, end });
  
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    });
  
    stream.pipe(res);
}



const streamMovie = (req, res) => {
    const videoPath = path.join("uploads/movies", req.params.filename);
    if (!fs.existsSync(videoPath)) {
      return res.status(404).send("Video not found");
    }
  
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
  
    const range = req.headers.range;
    if (!range) return res.status(400).send("Range header required");
  
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
  
    const stream = fs.createReadStream(videoPath, { start, end });
  
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    });
  
    stream.pipe(res);
}
*/




module.exports = {getAllShows, getAllMovies, getRandomProjects, postMovie, postShow, getTopRatedTvSeries, getTopRatedMovies, getTopRatedTvSeriesAndMovies, getProjectsByStudio, getProjectsByPG};