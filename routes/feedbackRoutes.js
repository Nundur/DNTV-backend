const express = require('express')


const ruter = express.Router();

const db = require('../db/db.js')

ruter.post('/postFeedback', async (req, res) =>{
    const { subject, category, message } = req.body;


    try {
        const sql = `INSERT INTO feedbacks (feedbackid, subject, category, message) VALUES (NULL,?,?,?)`
        //console.log(`${subject} ${category} ${message}`)
        const [result] = await db.query(sql, [subject, category, message])
        return res.status(201).json({message : "Sikeres feedback feltöltés!", result})
    } catch (error) {
        return res.status(500).json({message : "Sikertelen feedback feltöltés:(", error})
    }
    
    

    //return res.status(201).json({message : "Sikeres feedback feltöltés!", result})
    
})

module.exports = ruter