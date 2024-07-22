const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.mimetype.startsWith('/image')){
            cb(null, path.join(__dirname, '../uploads/images'))
        }
        else if(file.mimetype.startsWith('/video')){
            cb(null, path.join(__dirname, '../uploads/videos'))
        }
        else{
            cb({message: 'This is neither a file nor an image'}, false)
        }
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('/image') || file.mimetype.startsWith('/video')){
        cb(null, true)
    }
    else{
        cb({messasge: 'Unsupported file format'}, false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 50 }
})

module.exports = upload