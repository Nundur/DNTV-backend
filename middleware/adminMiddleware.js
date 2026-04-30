const jwt = require('jsonwebtoken')
const { config } = require('../config/dotenvConfig')


function authAdmin(req, res, next) {
    //console.log(req);
    const token = req.cookies?.[config.COOKIE_NAME]
    //clearconsole.log(`${token} - asd `);
    if (!token) {
        return res.status(401).json({error: 'Unauthorized persons are prohibited from viewing this content!'})
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
            return res.status(401).json({error: 'Users without administrative privileges cannot view this content!'})
        }
        return res.status(401).json({error: 'Invalid token'})
    }

}



module.exports = {authAdmin }
