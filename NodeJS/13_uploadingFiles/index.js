const express = require('express')
const path = require('path')
const multer = require('multer')
const { connectMongoDB } = require('./connection')
const UPLOAD = require('./model/file')

const app = express()
const PORT = 7000

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

connectMongoDB('mongodb://localhost:27017/IMAGE-PATH')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB not Connected: ',err)
    )


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

app.use(express.urlencoded({ extended:false }))

app.get('/', (req, res) => {
    return res.render("homepage")
})
app.post('/upload', upload.single('profileImage'), async(req,res) => {
    console.log(req.body);
    console.log(req.file);

    await UPLOAD.create({
        name:req.body.name,
        imagePath:req.file.path
    })
    
    return res.redirect('/')
})

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))