let mongoose = require('mongoose')

let contactSchema = new mongoose.Schema({
  mailinput: String,
  sujetinput: String,
  messageinput: String
})

module.exports = mongoose.model('Contact', contactSchema)