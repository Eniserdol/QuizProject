class Quizzes {
  constructor() {
    this.difficulty = ''
    this.id = ''
    this.quizzes = [
      {
        difficulty: 'e',
        id: '',
        text: `Quiz-1-easy`,
      },
      {
        difficulty: 'e',
        id: '',
        text: 'Quiz-2-easy',
      },
      {
        difficulty: 'h',
        id: '',
        text: 'Quiz-1-hard',
      },
      {
        difficulty: 'h',
        id: '',
        text: `Quiz-2-hard`,
      },
    ]
  }

  newQuizAdd(difficulty, id, text) {
    const object = { difficulty, id, text }
    this.quizzes.push(object)
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

  setQuizzes() {
    // return this.quizzes.filter(quizzes => quizzes.difficulty === this.difficulty)
    return this.quizzes.filter(quizzes => quizzes.id === this.id)
  }

  getQuiz(index) {
    return this.setQuizzes()[index].text
  }

  getQuizAll() {
    return this.setQuizzes().map(quiz => quiz.text)
  }

  getQuizByDifficulty(difficulty) {
    return this.quizzes.filter(quizzes => quizzes.difficulty === difficulty)
  }
}

module.exports = Quizzes
