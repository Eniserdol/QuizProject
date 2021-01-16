// eslint-disable-next-line no-unused-vars

class Person {
  constructor(name, id, performanceLevel /* password,email */) {
    this.name = name
    this.id = id
    this.answer = []
    this.performanceLevel = performanceLevel
    // add password and email as private ??
    // #password = [];
    // #email =[];
  }

  addAnswer(answer) {
    this.answer.push(answer)
  }

  /*
  login(userEmail,userPassword) {
      this.#email === userEmail
      this.#password === userPassword

  }
  */

  // Level gain property is added

  gainLevel() {
    if (this.answer > 0 && this.answer < 5) {
      this.performanceLevel = 1
    } else if (this.answer >= 5 && this.answer < 10) {
      this.performanceLevel = 2
    } else {
      this.performanceLevel = 3
    }
  }
}

const coyotiv1 = new Person('Coyotiv1', 1)
const coyotiv2 = new Person('Coyotiv2', 2)

console.log(coyotiv1.answer === coyotiv2.answer)

module.exports = Person
