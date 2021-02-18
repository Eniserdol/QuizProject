const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  level: String,
  quizResults: [],
})

module.exports = mongoose.model('User', userSchema)

/*
class User {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.level = 'easy'
    this.quizResults = []
  }
}
module.exports = User
*/
