const jwt = require('jsonwebtoken')
const { config } = require('../config/dotenvConfig')



function auth(req, res, next) {
    //console.log(req);
    const token = req.cookies?.[config.COOKIE_NAME]
    //clearconsole.log(`${token} - asd `);
    if (!token) {
        return res.status(401).json({error: 'You must be logged in to view this content!'})
    }
    try {
        req.user = jwt.verify(token, config.JWT_SECRET)
        // console.log(req.user);
        next()
    } catch (err) {
        return res.status(401).json({error: 'Invalid token'})
    }

}



module.exports = {auth }
