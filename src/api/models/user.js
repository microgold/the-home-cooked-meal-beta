const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  username: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  birthdate: {
    type: Date
  },
  modifieddate: {
    type: Date
  }
})

module.exports = mongoose.model('User', UserSchema, 'Users')
