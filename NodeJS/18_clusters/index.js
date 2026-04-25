const express = require('express')
const cluster = require('node:cluster')
const os = require('os')

const totalCPU = os.cpus().length   // os.availableParallelism()

if (cluster.isPrimary) {

    for (i = 0; i < totalCPU; i++) {
        cluster.fork()
    }

} else {

    const app = express()
    const PORT = 8080

    app.get('/', (req, res) => {
        return res.json({ message: `Hello from express server ${process.pid}` })
    })

    app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))

} 