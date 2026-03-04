const express = require("express");
const app = express()

app.get('/', (req,res) => {
    return res.send("Hello from HOME Page")
})

app.get('/about', (req,res) => {
    return res.send("Hello from ABOUT Page " + "hey, " + req.query.myname)
})

app.listen(8000, () => console.log("Server Started"))


// const myServer = http.createServer(app) 
// myServer.listen(8000, () => console.log("server started"))

