const express = require("express")
const app = express()
const PORT = 8000
const mongoose = require('mongoose')

// connection
mongoose.connect('mongodb://127.0.0.1:27017/NewUsers')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Mongo Error', err))


// Schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
},
    { timestamps: true }
)

// Model
const User = mongoose.model('user', userSchema)


// Middleware - Plugin
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()}: ${req.method} - ${req.path}\n`,
        (err, data) => next()
    )
})


// Routes
app.get('/users', async (req, res) => {
    const allDBusers = await User.find({})
    const html = `
    <ul>
    ${allDBusers.map((user) => `<li>${user.firstname} - ${user.email}</li>`).join("")}
    </ul>
    `
    res.send(html)
})



// REST API
app.get('/api/users', async (req, res) => {
    const allDBusers = await User.find({})
    return res.json(allDBusers)

})

app.route('/api/users/:id')
    .get(async (req, res) => {
        const user = await User.findById(req.params.id)

        if (!user) return res.status(404).json({ error: 'user not found' })
        return res.json(user)

    })
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, { firstname: 'ladoo' })
        return res.json({ status: 'success' })

    })
    .delete(async(req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.json({ status: 'success' })

    })


app.post('/api/users', async (req, res) => {
    const body = req.body
    if (!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title) {
        return res.status(400).json({ msg: 'all fields are required' })
    }

    const result = await User.create({
        firstname: body.first_name,
        lastname: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    console.log('result', result);

    return res.status(201).json({ msg: 'success' })
})


// server
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))



