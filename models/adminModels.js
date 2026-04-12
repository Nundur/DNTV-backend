const db = require('../db/db.js')

async function allUsers() {
    const sql = 'SELECT userid, email, username, role, watched_episodeid, watched_movieid FROM users'
    const [result] = await db.query(sql)


    return result || null

}





module.exports = {allUsers}
