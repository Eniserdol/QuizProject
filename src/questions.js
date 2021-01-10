export default class Questions {
  constructor() {
    this.questions = ['What is 10/5 ?', 'Who invented JavaScript?', 'What is 2*6']
    this.answers = [`a: 3 b: 2 c: 5`, `a: Douglas Crockford,b: Sheryl Sandberg, c: Brendan Eich`, `a: 12 b: 3 c: 8`]
    this.quizAnswers = ['b', 'c', 'a']
  }

  newQuestionAdd(questionText, answersText, correctAnswer) {
    this.questions.push(questionText)
    this.answers.push(answersText)
    this.quizAnswers.push(correctAnswer)
  }

  getQuestion(index) {
    return this.questions[index]
  }

  getAnswer(index) {
    return this.answers[index]
  }

  getQuizAnswers(index) {
    return this.quizAnswers[index]
  }

  getQuestionsLength() {
    return this.questions.length
  }
}
