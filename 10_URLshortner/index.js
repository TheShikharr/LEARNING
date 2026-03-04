const express = require('express')
const app = express()
const PORT = 5000

const { connectMongoDB } = require('./connection')
const URL = require('./models/url')

const urlRoutes = require('./routes/url')

// connectMongoDB
connectMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB not Connected: ', err))


// Middleware
app.use(express.json())


// routes
app.use('/url', urlRoutes)
 
app.get('/:shortID', async(req, res) => {
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