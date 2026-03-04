const express = require("express")
const app = express()

const users = require("./users.json")
const fs = require("fs")

const PORT = 1000


app.use(express.urlencoded({ extended: false }))

app.get('/api/users', (req, res) => {

    res.json(users)
})

app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    if(!user) res.status(404).json({error: `user not found`})
    res.json(user)
})
.patch((req, res) => {
    console.log(req.body);
    
    const id = Number(req.params.id)
    const body = req.body
    const user = users.findIndex((user) => user.id === id)

    users[user] = {
        ...users[user],
        ...body
    }

    fs.writeFile('./users.json', JSON.stringify(users), (err, data) => {
        return res.json({
            status: 'success',
            user: users[user]
        })
    })

})
.delete((req, res) => {
    const id = Number(req.params.id)
    const user = users.findIndex((user) => user.id === id)

    const deletedUser = users.splice(user ,1)

    fs.writeFile('./users.json', JSON.stringify(users), (err, data) => {
        return res.json({
            status: 'success',
            deletedUser: deletedUser[0]
        })
    })
})


app.post('/api/users', (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    const body = req.body

    if (!body ||
        !body.name ||
        !body.email ||
        !body.role) {
        return res.status(400).json({ msg: 'all fields are required' })
    }

    users.push({
        id: users.length + 1,
        ...body
    })
    fs.writeFile('./users.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({
            status: 'success',
            id: users.id
        })
    })
})

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))