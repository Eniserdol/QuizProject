// eslint-disable-next-line no-unused-vars

class Person {
  constructor(name, id) {
    this.name = name
    this.id = id
    this.answer = []
  }

  addAnswer(answer) {
    this.answer.push(answer)
  }
}
module.exports = Person
