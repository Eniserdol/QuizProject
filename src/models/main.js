/* eslint-disable no-console */

// const mongoose = require('mongoose')
const User = require('./user')
const Quiz = require('./quiz')
const Question = require('./question')

// create user
// const enis = new User({ name: 'enis', level: 'easy', quizResults: [] })
// enis.save()

// async function main() {
// const nde = await User.create({  name: 'nde', level: 'easy', quizResults: [] })
// nde.save()
// }
// main()

// create quiz
// const quizOne = new Quiz({ difficulty: 'easy', questions: [question.id, question.id, question.id], name: 'Quiz 1' })
// const quizTwo = new Quiz({
//   difficulty: 'easy',
//   questions: [questionFour.id, questionFive.id, questionSix.id],
//   name: 'Quiz 2',
// })
// const quizThree = new Quiz({
//   difficulty: 'hard',
//   questions: [questionSeven, questionEight, questionNine],
//   name: 'Quiz 3',
// })
// quizOne.save()
// quizTwo.save()
// quizThree.save()

// create question
const questions = [
  {
    difficulty: 'easy',
    text: 'What is 1+1',
    choices: ['1', '2', '3'],
    correctAnswer: '2',
  },
  { difficulty: 'easy', text: 'What is 2+2', choices: ['4', '5', '6'], correctAnswer: '4' },
  { difficulty: 'easy', text: 'What is 3+3', choices: ['3', '5', '6'], correctAnswer: '6' },
  { difficulty: 'easy', text: 'What is 4+4', choices: ['4', '8', '10'], correctAnswer: '8' },
  { difficulty: 'easy', text: 'What is 5+5', choices: ['40', '50', '60'], correctAnswer: '40' },
  { difficulty: 'easy', text: 'What is 6+6', choices: ['12', '15', '20'], correctAnswer: '12' },
  { difficulty: 'hard', text: 'What is 7+7', choices: ['14', '15', '16'], correctAnswer: '14' },
  { difficulty: 'hard', text: 'What is 8+8', choices: ['14', '15', '16'], correctAnswer: '16' },
  { difficulty: 'hard', text: 'What is 9+9', choices: ['16', '18', '20'], correctAnswer: '18' },
]
// create quiz
const quizzes = [
  { difficulty: 'easy', questions: [questions[0], questions[1], questions[2]], name: 'Quiz1' },
  {
    difficulty: 'easy',
    questions: [questions[3], questions[4], questions[5]],
    name: 'Quiz2',
  },
  {
    difficulty: 'hard',
    questions: [questions[6], questions[7], questions[8]],
    name: 'Quiz3',
  },
]
// create user
const users = [
  { name: 'enis', level: 'easy', quizResults: [] },
  { name: 'nde', level: 'easy', quizResults: [] },
]

async function anything() {
  await Question.remove({})
  await Quiz.remove({})
  await User.remove({})

  // questions.forEach(q => Question.create(q))
  // for (const question of questions) {
  //   await Question.create(question)
  // }
  await Question.create(questions)
  await Quiz.create(quizzes)
  await User.create(users)

  const createdQuestion = await Question.find({})
  console.log(createdQuestion)
  const createdQuiz = await Quiz.find({})
  console.log(createdQuiz)
  const createdUser = await User.find({})
  console.log(createdUser)
}
anything()
