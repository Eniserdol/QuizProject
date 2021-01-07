// eslint-disable-next-line no-unused-vars

class Person {
  constructor(name, id /* password,email */) {
    this.name = name
    this.id = id
    this.answer = []
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
}

const coyotiv1 = new Person('Coyotiv1', 1)
const coyotiv2 = new Person('Coyotiv2', 2)

console.log(coyotiv1.answer === coyotiv2.answer)

module.exports = Person
