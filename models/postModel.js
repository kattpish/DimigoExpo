const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const postSchema = new Schema({
    number: Number,
    name: String,
    title: String,
    published_date: { type: Date, default: Date.now() },
    imgURL: String,
    description: String
})

module.exports = mongoose.model('posts', postSchema)