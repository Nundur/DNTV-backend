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
    SELECT * FROM movies
    UNION ALL
    SELECT * FROM shows
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


module.exports = { allShows, allMovies, featured, uploadMovie};