/* eslint-disable no-console */
/*  This document is created for Quiz project for Coyotiv School of Software engineering. */
const Person = require('./person')
/* const QuizSettings = require('./quiz-settings'); */
const Question = require('./questions')

// create questions here
const questions = [new Question('whatis', '1', 'what is 10/2?', ['2', '3', '5'], '5')]
//  create new quiz
// eslint-disable-next-line no-undef
/* const newQuiz = [new QuizSettings(x, y,z)] */
//  create new persona
const enis = new Person('enis', '5')
// keep track of user's answers
// eslint-disable-next-line no-shadow
function score(questions) {
  const userAnswer = enis.answer
  let numCorrect = 0
  for (let i = 0; i < questions.length; i += 1) {
    // if answer is correct
    if (userAnswer === questions[i].correctAnswer) {
      // eslint-disable-next-line no-unused-vars
      numCorrect += 1
    }
  }
}

console.log(enis.profile)
console.log(questions)
// console.log(newQuiz)
console.log(enis)
console.log(score)
