import express from "express"
const app = express()
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

import authRoute from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js"

dotenv.config()

const PORT = process.env.PORT || 8080

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// routes
app.use('/api/auth', authRoute)


app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`)
    connectDB()
})