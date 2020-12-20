/*This document is created for Quiz project for Coyotiv School of Software engineering. */

const Question = require('./questions')
const Person = require('./person')
const QuizSettings = require('./quiz-settings')

// create questions here
let questions = [new Question('whatis', '1', 'what is 10/2?', ['2', '3', '5'], '5')]
//  create new persona
let enis = new Person('enis', '5')
// keep track of user's answers
function score(questions) {
  let userAnswer = enis.answer
  let numCorrect = 0
  for (var i = 0; i < questions.length; i++) {
    // if answer is correct
    if (userAnswer === questions[i].correctAnswer) {
      numCorrect++
    }
  }
}
console.log(enis.profile)
