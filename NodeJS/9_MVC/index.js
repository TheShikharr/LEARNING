const express = require("express")
const app = express()
const PORT = 8008

const { connectMongoDB } = require('./connection')
const { logReqRes } = require('./middlewares')
const userRouter = require('./routes/user')

// connecting DB
connectMongoDB('mongodb://127.0.0.1:27017/NewUsers')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Mongo Error', err))

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes('log.txt'))

// routes
app.use('/api/users', userRouter)

// server
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))