// import Persona from './person.js'

// const Person = new Persona()

class QuizSettings {
  constructor(category, difficulty, numberOfQuestions) {
    this.category = category
    this.difficulty = difficulty
    this.numberOfQuestions = numberOfQuestions
  }
  // this module will decide the user performance level and question difficulty settings
  /*
  decideDifficulty() {
    if (Person.performanceLevel === 1) {
      this.difficulty = 1
    } else if (Person.performanceLevel === 2) {
      this.difficulty = 2
    }
    /* else {
      this.difficulty = 3
      } */
}

module.exports = QuizSettings
