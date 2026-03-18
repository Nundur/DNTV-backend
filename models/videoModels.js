const db = require('../db/db.js')

const allShows = async () => {
    const sql = 'SELECT * FROM shows'

    const [result] = await db.query(sql)
    return result

}
const allMovies = async () => {
    const sql = 'SELECT * FROM movies'

    const [result] = await db.query(sql)
    return result

}
const featured = async (count) => {
    const sql = `SELECT * FROM (
    SELECT movieid, title, description, studio, imdbrating, pgrating, cover, quality, NULL AS episodeid, NULL AS season FROM movies
    UNION ALL
    SELECT showid, title, description, studio, imdbrating, pgrating, cover, quality, 1 AS episodeid, 1 AS season FROM shows
) AS combined
ORDER BY RAND()
LIMIT ${count};`

    const [result] = await db.query(sql)
    return result

}











const uploadMovie = async (title, desc, studio, imdb, pg, cover, image, quality ) => {
    //                                             title, desc, studio, imdb, pg, cover, image, quality
    const sql = 'INSERT INTO `movies`(`movieid`, `title`, `description`, `studio`, `imdbrating`, `pgrating`, `cover`, `file`, `quality`) VALUES (NULL,?,?,?,?,?,?,?,?)'
    const [result] = await db.query(sql, [title, desc, studio, imdb, pg, cover, image, quality])
    return result.insertId
}

const TopRatedTvSeries = async (count ) => {
    //                                             title, desc, studio, imdb, pg, cover, image, quality
    const sql = 'SELECT * FROM `shows` ORDER BY imdbrating DESC LIMIT ?'
    const [result] = await db.query(sql, [parseInt(count)])
    return result
}

const TopRatedMovies = async (count) => {
    //                                             title, desc, studio, imdb, pg, cover, image, quality
    const sql = 'SELECT * FROM `movies` ORDER BY imdbrating DESC LIMIT ?'
    const [result] = await db.query(sql, [parseInt(count)])
    return result
}
const TopRatedTvSeriesAndMovies = async (count) => {
    //                                             title, desc, studio, imdb, pg, cover, image, quality
    const sql = `SELECT * FROM (
    SELECT movieid, title, description, studio, imdbrating, pgrating, cover, quality, NULL AS episodeid, NULL AS season FROM movies
    UNION ALL
    SELECT showid, title, description, studio, imdbrating, pgrating, cover, quality, 1 AS episodeid, 1 AS season FROM shows
) AS combined
ORDER BY imdbrating DESC LIMIT ?`
    const [result] = await db.query(sql, [parseInt(count)])
    return result
}



const ProjectsByPG = async (pg) => {
    //                                             title, desc, studio, imdb, pg, cover, image, quality
    const sql = 'SELECT * FROM `movies` WHERE pgrating = ?'
    const [result] = await db.query(sql, [pg])
    return result
}


const ProjectsByStudio = async (studio) => {
    //                                             title, desc, studio, imdb, pg, cover, image, quality
    const sql = 'SELECT * FROM `movies` WHERE studio = ?'
    const [result] = await db.query(sql, [studio])
    return result
}










const uploadShows = async (title, desc, studio, imdb, pg, cover, quality, episodes, season ) => {
    //                                             title, desc, studio, imdb, pg, cover, image, quality
    const results = [];


    episodes.sort((a, b) => {  
        const getEpisode = (name) => {  
            const match = name.match(/E(\d+)/i);  
            return match ? parseInt(match[1]) : 0;  
        };  
    
        return getEpisode(a.originalname) - getEpisode(b.originalname);  
    });
    
    const insertToShowsSql = 'INSERT INTO `shows`(`showid`, `title`, `description`, `studio`, `imdbrating`, `pgrating`, `cover`, `quality`) VALUES (NULL,?,?,?,?,?,?,?)'
    const [result] = await db.query(insertToShowsSql, [title, desc, studio, imdb, pg, cover, quality])
    results.push(result)
    console.log(result)


    for (const file of episodes){
        const sql = 'INSERT INTO `show_episodes`(`episodeid`, `showid`, `season`, `title`, `description`, `imdbrating`, `pgrating`, `file`, `quality`) VALUES (NULL,?,?,?,?,?,?,?,?)'
        const [episodeResult] = await db.query(sql, [result.insertId, season, title, desc, imdb, pg, file.filename, quality])
        results.push(episodeResult)
        console.log(episodeResult)
    }
    return results;
}

module.exports = { allShows, allMovies, featured, uploadMovie, uploadShows, TopRatedTvSeries, TopRatedMovies, TopRatedTvSeriesAndMovies, ProjectsByPG, ProjectsByStudio};