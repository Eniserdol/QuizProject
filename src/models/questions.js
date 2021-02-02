class Questions {
  constructor() {
    this.difficulty = ''
    this.id = ''
    this.questions = [
      {
        difficulty: 'e',
        id: '',
        text: 'What is 10/5 ?',
        choices: ['a: 3', 'b: 2', 'c: 5'],
        correctAnswer: 'b',
      },
      {
        difficulty: 'e',
        id: '',
        text: 'Who invented JavaScript?',
        choices: ['a: Douglas Crockford', 'b: Sheryl Sandberg', 'c: Brendan Eich'],
        correctAnswer: 'c',
      },
      {
        difficulty: 'e',
        id: '',
        text: 'What is 2*6',
        choices: ['a: 12', 'b: 3', 'c: 8'],
        correctAnswer: 'a',
      },
      {
        difficulty: 'h',
        id: '',
        text: 'What is 100/5 ?',
        choices: ['a: 30', 'b: 20', 'c: 50'],
        correctAnswer: 'b',
      },
      {
        difficulty: 'h',
        id: '',
        text: 'Who invented JS?',
        choices: ['a: Crockford', 'b: Sandberg', 'c:Eich'],
        correctAnswer: 'c',
      },
      {
        difficulty: 'h',
        id: '',
        text: 'What is 2*60',
        choices: ['a:120', 'b: 30', 'c:80'],
        correctAnswer: 'a',
      },
    ]
  }

  newQuestionAdd(difficulty, text, choices, correctAnswer) {
    const object = { difficulty, text, choices, correctAnswer }
    this.questions.push(object)
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

  setQuestions() {
    // return this.questions.filter(question => question.difficulty === this.difficulty)
    return this.questions.filter(questions => questions.id === this.id)
  }

  getQuestion(index) {
    return this.setQuestions()[index].text
  }

  getAnswer(index) {
    return this.setQuestions()[index].choices
  }

  getQuizAnswers(index) {
    return this.setQuestions()[index].correctAnswer
  }

  getQuestionsAll() {
    return this.setQuestions().map(questions => questions.text)
  }

  getQuestionsByDifficulty(difficulty) {
    return this.questions.filter(questions => questions.difficulty === difficulty)
  }

  getQuestionsLength() {
    return this.setQuestions().length
  }
}

module.exports = Questions
