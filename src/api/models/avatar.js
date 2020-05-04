const mongoose = require('mongoose')

const AvatarSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  image: { data: Buffer, contentType: String },
  contentType: { type: String }
})

module.exports = mongoose.model('Avatar', AvatarSchema)
