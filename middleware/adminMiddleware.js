const jwt = require('jsonwebtoken')
const { config } = require('../config/dotenvConfig')


function authAdmin(req, res, next) {
    //console.log(req);
    const token = req.cookies?.[config.COOKIE_NAME]
    //clearconsole.log(`${token} - asd `);
    if (!token) {
        return res.status(401).json({error: 'nincsen cookie'})
    }
    try {
        req.user = jwt.verify(token, config.JWT_SECRET)

        
        const { role } = req.user

        if (role == 1) {
            next()
        } else {
            throw new Error('noadmin')
        }

        // console.log(req.user);
        
    } catch (err) {
        if(err.message == "noadmin"){
            return res.status(401).json({error: 'Nem admin fiók!'})
        }
        return res.status(401).json({error: 'Érvénytelen token'})
    }

}



module.exports = {authAdmin }
