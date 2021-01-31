class Quizzes {
  constructor() {
    this.difficulty = 'e'
    this.quizzes = [
      {
        difficulty: 'e',
        id: '1',
        text: 'Quiz-1',
      },
      {
        difficulty: 'e',
        id: '2',
      },
      {
        difficulty: 'h',
        id: '1',
      },
      {
        difficulty: 'h',
        id: '2',
      },
    ]
  }

  newQuizAdd(difficulty, id) {
    const object = { difficulty, id }
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
    return this.quizzes.filter(quizzes => quizzes.difficulty === this.difficulty)
  }

  getQuiz(index) {
    return this.setQuizzes()[index].text
  }
}

module.exports = Quizzes
