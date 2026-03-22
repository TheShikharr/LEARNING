const express = require("express")
const http = require("http")
const path = require("path")
const { Server } = require("socket.io")

const app = express()
const PORT = 1234   

const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.resolve("./public")))

app.get('/', (req,res) => {
    return res.sendFile("./pulic/index")
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))