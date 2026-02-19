const db = require('../db/db.js')

async function findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email=?'
    const [result] = await db.query(sql, [email])


    return result[0] || null

}


async function createUser(username, email, hashed) {
    const sql = "INSERT INTO users(userid, email, psw, username, role) VALUES (NULL,?,?,?,?)"
    
    const [result] = await db.query(sql, [email, hashed, username, 'user'])



    return result.insertId
}


module.exports = {findByEmail, createUser}
