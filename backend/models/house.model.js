const mongoose = require('mongoose')

const Schema = mongoose.Schema

const houseSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    guests: {type: Number, required: true},
    duration: {type: Date, required: true},
    user: {type: String, require: true},
}, {
    timestamps: true,
})

const House = mongoose.model('House', houseSchema)

module.exports = House