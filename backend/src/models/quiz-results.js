const mongoose = require('mongoose')

const quizResultSchema = new mongoose.Schema({
  quiz: String,
  user: String,
  correctAnswers: [],
  score: Number,
})

module.exports = mongoose.model('QuizResult', quizResultSchema)

/*
class QuizResult {
  constructor(quiz, user, correctAnswers) {
    this.quiz = quiz
    this.user = user
    this.correctAnswers = correctAnswers
    this.score = correctAnswers * 5
  }
}

module.exports = QuizResult
*/
