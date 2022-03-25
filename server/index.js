
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const activityRouter = require('./routes/activity-router')
const moodRouter = require('./routes/mood-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', activityRouter)

app.use('/api', moodRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))