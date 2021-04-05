const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  // level: String,
  age: Number,
  //  quizResults: [],
})
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})
module.exports = mongoose.model('User', userSchema)

