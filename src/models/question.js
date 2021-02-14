const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  id: Number,
  difficulty: String,
  text: String,
  choices: [],
  correctAnswer: String,
})
module.exports = mongoose.model('Question', questionSchema)
/*
class Question {
  constructor(id, difficulty, text, choices, correctAnswer) {
    this.id = id
    this.difficulty = difficulty
    this.text = text
    this.choices = choices
    this.correctAnswer = correctAnswer
  }
}

module.exports = Question
*/
