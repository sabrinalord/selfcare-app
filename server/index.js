
const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db')
const activityRouter = require('./routes/activity-router')
const moodRouter = require('./routes/mood-router')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.json({ message: "Hello from Express!" });
})

app.use('/api', activityRouter)
app.use('/api', moodRouter)

app.listen(PORT, () => {
    console.log(`Express application listening on ${PORT}`);
  });