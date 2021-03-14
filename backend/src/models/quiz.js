const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  difficulty: String,
  questions: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Question',
    },
  ],
  name: String,
})

module.exports = mongoose.model('Quiz', quizSchema)

/*
class Quiz {
  constructor(id, difficulty, questions, name) {
    this.id = id
    this.difficulty = difficulty
    this.questions = questions
    this.name = name
  }
}

module.exports = Quiz
*/
