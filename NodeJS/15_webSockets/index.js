const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const path = require("path")

const app = express()
const PORT = 5000
const server = http.createServer(app)
const io = new Server(server)

// Socket.io
io.on('connection', (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message)
    })
})

app.use(express.static(path.resolve("./public")))

app.get('/', (req,res) => {
    return res.sendFile("./public/index")
})

server.listen( PORT, () => console.log(`Server Started at PORT: ${PORT}`) )