const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Activity = new Schema(
    {
        name: { type: String, required: true },
        tag: { type: String, required: true },
        intensity: { type: Number, required: true },
        createdAt: {type: Date, default: Date.now},
      
    },
    { timestamps: true },
)

module.exports = mongoose.model('activities', Activity)