const mongoose = require('mongoose')
const Schema = mongoose.Schema

const houseSchema = new Schema({
    photo: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    guests: {type: Number, required: true},
    pricing: {type: Number, required: true},
    user: {type: String, require: true},
}, {
    timestamps: true,
})

const House = mongoose.model('House', houseSchema)

module.exports = House