// eslint-disable-next-line no-unused-vars
const colors = require("colors")

class Person {
  constructor(name, answer) {
    this.name = name
    this.answer = answer
  }

  get profile() {
    return `this is a dynamic property.Here is the proof ; ${this.name.red.bold} has answers ${this.answers} for this quiz.`
  }
}
module.exports = Person
