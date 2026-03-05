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


module.exports = { allShows, allMovies, featured};