const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mood = new Schema(
    {
        createdAt: {type: Date, default: Date.now},
        value: { type: Number, required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('moods', Mood)