let mongoose = require('mongoose')

let projectSchema = new mongoose.Schema({
  titleinput: String,
  descriptioninput: String,
  imageinput: String
})

module.exports = mongoose.model('Project', projectSchema)