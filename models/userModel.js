const db = require('../db/db.js')

async function findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email=?'
    const [result] = await db.query(sql, [email])


    return result[0] || null

}


async function monifyUserInDataBase(username, email, originalEmail) {
    const sql = "UPDATE `users` SET `username`=?,`email`=?, WHERE email=?"
    
    const [result] = await db.query(sql, [username, email, originalEmail])



    return result.insertId
}

async function createUser(username, email, hashed) {
    const sql = "INSERT INTO users(userid, email, psw, username, role) VALUES (NULL,?,?,?,?)"
    
    const [result] = await db.query(sql, [email, hashed, username, 0])



    return result.insertId
}


module.exports = {findByEmail, createUser, monifyUserInDataBase}
