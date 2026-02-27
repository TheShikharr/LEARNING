// HTTP Methods ~

// GET:
// When you want to get some data from the server.

// POST:
// When you want to send and mutate some data on the Server.
// PUT 
// PATCH 
// DELETE 


const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
    return res.end(); 
    } 
    const log = `${Date.now()}: ${req.method} ${req.url} new req rec\n`

    const myURL = url.parse(req.url, true)    

    fs.appendFile('log.txt', log, (err, data) => {
        switch(myURL.pathname) {
            case '/':  
                if(req.method === 'GET') res.end("Home Page")
                break

            case '/about': 
                const username = myURL.query.myname    
                res.end(`Hi, ${username}`)
                break

            case '/signup':
                if(req.method === 'GET') 
                    res.end('This is a signup form')
                    else if(req.method === 'POST') {
                        // DB QUERY
                    res.end('Success')
                }

            default:     
                res.end("404 not found")

        }
    })
})

myServer.listen(8000, () => console.log("server started"))

