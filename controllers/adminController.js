const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {config} = require('../config/dotenvConfig')
const {allUsers} = require('../models/adminModels.js')
const { rollback } = require('../db/db.js')



const getAllUsers = async (req, res)=>{
    try {
        const result = await allUsers()

        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}








module.exports = {getAllUsers};