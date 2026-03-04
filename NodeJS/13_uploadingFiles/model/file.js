const mongoose = require('mongoose')

const uploadSchema = mongoose.Schema({
    name: String,
    imagePath: String,
    createdAt: {
        type:Date,
        default: Date.now
    }
})

const UPLOAD = mongoose.model('upload', uploadSchema)

module.exports = UPLOAD