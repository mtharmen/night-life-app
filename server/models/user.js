const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  twitter: {
    id: String,
    // token: String,
    // tokenSecret: String,
    // username: String
    // TODO: twitter avatar?
    displayName: String
  },
  role: {
    type: String,
    default: 'member' // guest, member, admin
  }
})

module.exports = mongoose.model('User', userSchema)
