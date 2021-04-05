/* eslint-disable no-console */

// const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const axios = require('axios')
// const User = require('./user')
const Quiz = require('./quiz')
const Question = require('./question')

// create user
// const users = [
//   { name: 'enis', level: 'easy', quizResults: [] },
//   { name: 'nde', level: 'easy', quizResults: [] },
// ]
const answerArray = results => {
  return results.map(question => {
    const choices = question.incorrect_answers.concat(question.correct_answer)
    return {
      text: question.question,
      choices,
      correct_answer: question.correct_answer,
      difficulty: question.difficulty,
      type: question.type,
      category: question.category,
    }
  })
}
async function anything() {
  await Question.remove({})
  await Quiz.remove({})
  // await User.remove({})

  const questionRequest1 = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')

  const questionRequest2 = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')

  const questionRequest3 = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')

  const createdQuestions = await Question.create(
    answerArray([].concat(questionRequest1.data.results, questionRequest2.data.results, questionRequest3.data.results))
  )

  console.log(createdQuestions)
  // create quiz
  const quizzes = [
    {
      difficulty: 'Easy',
      questions: createdQuestions.filter(q => {
        return q.difficulty == 'easy'
      }),
      name: 'Quiz1',
    },
    {
      difficulty: 'Medium',
      questions: createdQuestions.filter(q => {
        return q.difficulty == 'medium'
      }),
      name: 'Quiz2',
    },
    {
      difficulty: 'Hard',
      questions: createdQuestions.filter(q => {
        return q.difficulty == 'hard'
      }),
      name: 'Quiz3',
    },
  ]
  await Quiz.create(quizzes)
  // await User.create(users)
}
anything()
