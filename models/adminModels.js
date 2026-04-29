const db = require('../db/db.js')

async function allUsers() {
    const sql = 'SELECT userid, email, username, role FROM users'
    const [result] = await db.query(sql)


    return result || null

}



async function bulkUpdate(users) {


    const results = [];

    for (const user of users) {
        const { userid, username, email, role } = user;
        //console.log(`${userid} ${username} ${email} ${role}`);
        const sql = `
            UPDATE users
            SET username = ?, email = ?, role = ?
            WHERE userid = ?
        `;

        const [result] = await db.query(sql, [
            username,
            email,
            role,
            userid
        ]);

        results.push(result);
    }

    return results

}
async function bulkUpdateM(movies) {


    const results = [];

    for (const movie of movies) {
        const { movieid, title, description, studio, imdbrating, pgrating, quality } = movie;
        //console.log(`${userid} ${username} ${email} ${role}`);
        const sql = 
        "UPDATE movies SET title=?,description=?,studio=?,imdbrating=?,pgrating=?,quality=? WHERE movieid=?";

        const [result] = await db.query(sql, [
            title, description, studio, imdbrating, pgrating, quality, movieid 
        ]);

        results.push(result);
    }

    return results

}
async function bulkUpdateS(shows) {
    const results = [];

    for (const show of shows) {
        const { showid, title, description, studio, imdbrating, pgrating, quality } = show;
        //console.log(`${userid} ${username} ${email} ${role}`);
        const sql = 
        "UPDATE shows SET title=?,description=?,studio=?,imdbrating=?,pgrating=?,quality=? WHERE showid=?";

        const [result] = await db.query(sql, [
            title, description, studio, imdbrating, pgrating, quality, showid 
        ]);

        results.push(result);
    }

    return results

}
async function deleteUserById(userid) {

    const sql = 
        "DELETE FROM users WHERE userid=?";

        const [result] = await db.query(sql, [
            userid
        ]);

    return result

}

async function deleteMovieById(movieid) {
    const sql = 
        "DELETE FROM movies WHERE movieid=?";

        const [result] = await db.query(sql, [
            movieid
        ]);

    return result

}
async function deleteShowById(showid) {
    const sql = 
        "DELETE FROM shows WHERE showid=?; DELETE FROM show_episodes WHERE showid=? ";

        const [result] = await db.query(sql, [
            showid, showid
        ]);
        
    return result

}

module.exports = { allUsers, bulkUpdate, bulkUpdateM, bulkUpdateS, deleteUserById, deleteMovieById, deleteShowById }
