const multer = require('multer')
const fs = require('fs')
const path = require('path')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    let uploadDir = "uploads/"

    if (file.fieldname === "movie") {
      uploadDir = "uploads/movies/"
    }

    if (file.fieldname === "cover") {
        uploadDir = "uploads/covers/"
    }

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }

    cb(null, uploadDir)
  },

  filename: (req, file, cb) => {
    const now = new Date().toISOString().split("T")[0]
    cb(null, `${now}-${file.originalname}`)
  }
})


const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 10 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpg|jpeg|png|jfif|webp|svg|ico|avif|gif/
        const extname = filetypes.test(path.extname(file.originalname))
        const mimetype  = filetypes.test(file.mimetype)
        //console.log(extname)
        //console.log(mimetype)

        if(extname && mimetype) {
            return cb(null, true)
        } else {
            cb(new Error('Csak kép formátum'))
        }
    }
})

module.exports = upload;