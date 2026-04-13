const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {config} = require('../config/dotenvConfig')
const {allUsers, bulkUpdate} = require('../models/adminModels.js')
const { rollback } = require('../db/db.js')



const getAllUsers = async (req, res)=>{
    try {
        const result = await allUsers()

        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}

const bulkUpdateUsers = async (req, res)=>{
    try {
        const users = req.body

        const result = await bulkUpdate(users)

        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'adatbázis hiba', err})
    }
}







module.exports = {getAllUsers, bulkUpdateUsers};