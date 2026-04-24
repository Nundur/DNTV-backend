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


    //const sql = 'SELECT userid, email, username, role, watched_episodeid, watched_movieid FROM users'
    //const [result] = await db.query(sql)


    return results

}


module.exports = { allUsers, bulkUpdate }
