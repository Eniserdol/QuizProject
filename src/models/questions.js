class Questions {
  constructor() {
    // this.difficulty = ''
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

  getQuestion(index) {
    return this.questions[index].text
  }

  getQuestionsAll() {
    return this.questions.map(questions => questions.text)
  }

  getQuestionsByDifficulty(difficulty) {
    return this.questions.filter(questions => questions.difficulty === difficulty)
  }

  getQuestionsLength() {
    return this.questions().length
  }
}

module.exports = Questions
