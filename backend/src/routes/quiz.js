/* eslint-disable no-unused-vars */
const express = require('express')
const axios = require('axios')

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
  let quizzes = await Quiz.find(query)
  quizzes = quizzes.map(quiz => {
    return {
      name: quiz.name,
      difficulty: quiz.difficulty,
      questions: quiz.questions,
      id: quiz.id,
    }
  })
  res.send(quizzes)
})

router.get('/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id).populate('questions')
  if (quiz) res.send(quiz)
  else res.sendStatus(404)
})

router.post('/:id/control', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id).populate('questions')
  const ans = {}
  quiz.questions.map(q => {
    let a = false
    if (q.choices[req.body[q._id]] == q.correct_answer) {
      a = true
    }
    ans[q._id] = a
    return true
  })
  console.log(ans)
  if (quiz) res.send(ans)
  else res.sendStatus(404)
})

// create a quiz
router.post('/', (req, res) => {})

// update a quiz fully
router.put('/:id', (req, res) => {})

// delete one quiz
router.delete('/:id', (req, res) => {})

module.exports = router
