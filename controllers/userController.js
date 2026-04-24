const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {config} = require('../config/dotenvConfig')
const {findByEmail, createUser, monifyUserInDataBase} = require('../models/userModel.js')
const { rollback } = require('../db/db.js')



const cookieOpts = {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 1000 * 60 * 60 * 7 * 24
}
async function modifyUser (req, res) {
    try {
        const {username, email, userid} = req.body

        if (!username ||!email || !userid) {
            return res.status(400).json({error:'A felhasználónév vagy a jelszó üres!'})
        }
        const result = await monifyUserInDataBase
        return res.status(200).json({message:""})

    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'modifyUserProblem', err})
    }
}















async function logout (req, res) {
    try {
        return res.clearCookie(config.COOKIE_NAME, 
            {
                httpOnly: true,
                secure:true,
                sameSite: 'none',
                path: '/'
            }
        ).status(200).json({message: 'Kijelentkezve'})
    } catch (err) {
        return res.status(500).json({error: 'logout'})
    }
}

async function whoAmI(req, res) {
    try {
        const { user_id, username, email, role } = req.user
        return res.status(200).json({user_id: user_id, username: username, email: email, role: role})
    } catch (err) {
        return res.status(500).json({error: 'whoami error'})
    }
    // console.log(user_id, username, email, role);
}

async function register(req, res) {
    try {
        const {email, username, psw} = req.body
        console.log(`${email} ${username} ${psw}`)
        if(!email || !username || !psw){
            return res.status(400).json({error:'A felhazsnálónév vagy a jelszó üres:('})
        }

        const exists = await findByEmail(email)

        if(exists){
            return res.status(409).json({error:"Az email már foglalt"})
        }



        const hash = await bcrypt.hash(psw, 10)

        const {insertId} = await createUser(username, email, hash)
        return res.status(201).json({message : 'sikeres regisztráció', insertId})
    } catch (err) {
        console.log(err.code)
        if (err.code == "ER_DUP_ENTRY") {
            return res.status(500).json({error:'Felhazsnáló már foglalt!', err}) 
        }
        return res.status(500).json({error:'Regisztrációs hiba!', err})
        
    }
}

async function login(req, res) {
    try {
        const {email, psw} = req.body

        if(!email || !psw){
            return res.status(400).json({error:'Email és jelszó kötelező öcsisajt!'})
        }

        const exists = await findByEmail(email)


        if (!exists) {
            return res.status(409).json({error:'Hibás email!'})
        }
        const ok = await bcrypt.compare(psw, exists.psw)
        if (!ok) {
            return res.status(409).json({error:'Hibás jelszó!'})
        }


        const token = jwt.sign({
            user_id: exists.user_id,
            email: exists.email,
            username: exists.username,
            role: exists.role
        },
        config.JWT_SECRET,
        {
            expiresIn: config.JWT_EXPIRES_IN
        })

        res.cookie(config.COOKIE_NAME, token, cookieOpts)
        return res.status(200).json({message: "Sikeres login"})
    } catch (err) {
        
    }
    
}


module.exports = { register, login, whoAmI, logout, modifyUser}