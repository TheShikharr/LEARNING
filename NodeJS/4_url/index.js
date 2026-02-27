
/*
URL - Uniform Resource Locator

protocol -> domain -> path -> query parameters
*/


const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    const log = `${Date.now()}: ${req.url} new req rec\n`

    const myURL = url.parse(req.url, true)
    console.log(myURL);


    fs.appendFile('log.txt', log, (err, data) => {
        switch (myURL.pathname) {
            case '/':
                res.end("Home Page")
                break

            case '/about':
                const username = myURL.query.myname
                res.end(`Hi, ${username}`)
                break

            default: res.end("404 not found")

        }
    })
})

myServer.listen(8000, () => console.log("server started"))

