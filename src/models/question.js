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
