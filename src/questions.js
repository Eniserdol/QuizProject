export default class Questions {
  constructor() {
    this.difficulty = ''
    this.questions = {
      e: ['What is 10/5 ?', 'Who invented JavaScript?', 'What is 2*6'],
      h: ['What is 100/5 ?', 'Who invented JS?', 'What is 2*60'],
    }
    this.answers = {
      e: [`a: 3 b: 2 c: 5`, `a: Douglas Crockford,b: Sheryl Sandberg, c: Brendan Eich`, `a: 12 b: 3 c: 8`],
      h: [`a: 30 b: 20 c: 50`, `a:Crockford,b:Sandberg, c:Eich`, `a: 120 b: 30 c: 80`],
    }
    this.quizAnswers = ['b', 'c', 'a']
  }

  newQuestionAdd(questionText, answersText, correctAnswer) {
    this.questions.push(questionText)
    this.answers.push(answersText)
    this.quizAnswers.push(correctAnswer)
  }

  getQuestion(index) {
    return this.questions[this.difficulty][index]
  }

  getAnswer(index) {
    return this.answers[this.difficulty][index]
  }

  getQuizAnswers(index) {
    return this.quizAnswers[index]
  }

  getQuestionsLength() {
    return this.questions.length
  }

  setDifficulty(value) {
    if (value === 'e') {
      this.difficulty = 'e'
      return 'difficulty is easy'
    }
    if (value === 'h') {
      this.difficulty = 'h'
      return 'difficulty is hard'
    }
    return 'Difficulty is not set please choose easy or hard ⛔'
  }
}
