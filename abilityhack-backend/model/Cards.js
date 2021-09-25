const mongoose = require('mongoose')


const cardSchema = mongoose.Schema({
    title: String,
    content: String,
    amount: Number
})

module.exports = mongoose.model('cards', cardSchema)