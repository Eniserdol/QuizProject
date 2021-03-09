/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const Quiz = require('../models/quiz')
const controller = require('../models/main')

/* GET quiz listing. */
router.get('/', async (req, res) => {
  const query = {}
  ;['difficulty', 'name'].forEach(key => {
    if (req.query[key]) {
      query[key] = req.query[key]
    }
  })
  // if (req.query.id) {
  //   query.id = req.query.id
  // }
  // if (req.query.difficulty) {
  //   query.difficulty = req.query.difficulty
  // }
  // if (req.query.name) {
  //   query.name = req.query.name
  // }
  let quizzes = await Quiz.find(query)
  quizzes = quizzes.map(quiz => {
    return {
      name: quiz.name,
      difficulty: quiz.difficulty,
      questions: quiz.questions,
      id: quiz.id,
    }
  })
  // let questions = await Quiz.find(query)
  // questions = questions.map(question => {
  //   return {
  //     questions: quizzes.questions

  //   }
  // })
  res.render('quiz-list', { quizzes })
})

router.get('/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id).populate('questions')
  if (quiz) res.render('quiz-detail', { name: quiz.name, difficulty: quiz.difficulty, questions: quiz.questions })

  //  else res.sendStatus(404)
})

// create a quiz
router.post('/', (req, res) => {})

// update a quiz fully
router.put('/:id', (req, res) => {})

// delete one quiz
router.delete('/:id', (req, res) => {})

module.exports = router
