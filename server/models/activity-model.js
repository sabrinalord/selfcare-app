const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Activity = new Schema(
    {
        description: { type: String, required: true },
        type: { type: String, required: true },
        intensity: { type: Number, required: true },
        date: { type: Date}
      
    },
    { timestamps: true },
)

module.exports = mongoose.model('activities', Activity)