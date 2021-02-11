class QuizResult {
  constructor(quiz, user, correctAnswers) {
    this.quiz = quiz
    this.user = user
    this.correctAnswers = correctAnswers
    this.score = correctAnswers * 5
  }
}

module.exports = QuizResult
