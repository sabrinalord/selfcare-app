const Mood = require('../models/mood-model')

createMood = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an mood',
        })
    }

    const mood = new Mood(body)

    if (!mood) {
        return res.status(400).json({ success: false, error: err })
    }

    mood
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: mood._id,
                message: 'Mood created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Mood not created!',
            })
        })
}

updateMood = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Mood.findOne({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Mood not found!',
            })
        }
        mood.name = body.name
        mood.tag = body.tag
        mood.intensity = body.intensity
        mood.createdAt = body.createdAt
        mood
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: mood._id,
                    message: 'Mood updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Mood not updated!',
                })
            })
    })
}

deleteMood = async (req, res) => {
    await Mood.findOneAndDelete({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!mood) {
            return res
                .status(404)
                .json({ success: false, error: `Mood not found` })
        }

        return res.status(200).json({ success: true, data: mood})
    }).catch(err => console.log(err))
}

getMoodById = async (req, res) => {
    await Mood.findOne({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: mood})
    }).catch(err => console.log(err))
}

getMoods = async (req, res) => {
    await Mood.find({}, (err, moods) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!moods.length) {
            return res
                .status(404)
                .json({ success: false, error: `Mood not found` })
        }
        return res.status(200).json({ success: true, data: moods })
    }).catch(err => console.log(err))
}

module.exports = {
    createMood,
    updateMood,
    deleteMood,
    getMoods,
    getMoodById,
}