class Question {
  constructor(questionType, questionNumber, text, choices, answer) {
    this.questionType = questionType
    this.questionNumber = questionNumber
    this.text = text
    this.choices = choices
    this.answer = answer
  }
}
module.exports = Question
