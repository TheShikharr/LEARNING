const express = require('express')
const app = express()
const PORT = 5000
const cookieParser = require('cookie-parser')


const { connectMongoDB } = require('./connection')
const path = require('path')
const URL = require('./models/url')
// const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth')
const {checkForAuthentication, restrictTo} = require('./middlewares/auth')


const urlRoutes = require('./routes/url')
const staticRouter = require('./routes/staticRouter')
const userRoutes = require('./routes/user')


// connectMongoDB
connectMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB not Connected: ', err))


// Set view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkForAuthentication)


// routes
// app.use('/url', restrictToLoggedinUserOnly, urlRoutes)
app.use('/url', restrictTo(['NORMAL', 'ADMIN']), urlRoutes)
app.use('/user', userRoutes)
app.use('/', staticRouter)
 
app.get('/', async(req, res) => {
    const allURLs = await URL.find({})
    return res.render('home', {
        urls: allURLs
    })
}) 

app.get('/url/:shortID', async(req, res) => {
    const shortID = req.params.shortID
    const entry = await URL.findOneAndUpdate(
    {
        shortID,
    }, 
    {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    }
)
    res.redirect(entry.redirectURL)
})



app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))