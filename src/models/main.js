/* eslint-disable no-console */

// const mongoose = require('mongoose')
const User = require('./user')
const Quiz = require('./quiz')
const Question = require('./question')

// create user
const enis = new User({ id: 1, name: 'enis', level: 'easy', quizResults: [] })
enis.save()

async function main() {
  const nde = await User.create({ id: 2, name: 'nde', level: 'easy', quizResults: [] })
  nde.save()
}
main()

// create quiz

const quizOne = new Quiz({ id: 1, difficulty: 'easy', questions: ['1', '2', '3'], name: 'Quiz 1 Easy' })
const quizTwo = new Quiz({ id: 2, difficulty: 'easy', questions: [], name: 'Quiz 2 Easy' })
const quizThree = new Quiz({ id: 3, difficulty: 'easy', questions: [], name: 'Quiz 3 Easy' })
quizOne.save()
quizTwo.save()
quizThree.save()

// create question
const questionOne = new Question({
  id: 1,
  difficulty: 'easy',
  text: 'What is 2+2',
  choices: ['4', '5', '6'],
  correctAnswer: '4',
})
const questionTwo = new Question({
  id: 2,
  difficulty: 'hard',
  text: 'What is 20+20',
  choices: ['40', '50', '60'],
  correctAnswer: '40',
})
questionOne.save()
questionTwo.save()
