var mongoose = require('mongoose')

var barSchema = new mongoose.Schema({
  expire: Number,
  bar: String,
  person: String
})

module.exports = mongoose.model('Bar', barSchema)
