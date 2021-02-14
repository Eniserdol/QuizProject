/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const Quiz = require('../models/quiz')
const controller = require('../models/main')

/*
router.get('/', (req, res) => {
  res.render('quiz', { title: 'Quiz Project', quiz: { quiz } })
})
*/

/* GET quiz listing. */
router.get('/', async (req, res) => {
  const query = {}
  if (req.query.id) {
    query.id = req.query.id
  }
  if (req.query.difficulty) {
    query.difficulty = req.query.difficulty
  }
  if (req.query.name) {
    query.name = req.query.name
  }
  res.send(await Quiz.find(query))
})

router.get('/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id)
  if (quiz) res.render('quiz', { quiz })
  else res.sendStatus(404)
})

/*
// get all quizzes

router.get('/', (req, res) => {
  res.send(controller.getQuizzesAll())
})

// get all quizzes by difficulty
router.get('/difficulty/:level', (req, res) => {
  const { level } = req.params
  res.send(controller.getQuizzesByDifficulty(level))
})

// get one quiz
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.send(controller.getQuizzesById(id))
})

// create a quiz
router.post('/', (req, res) => {})

// update a quiz fully
router.put('/:id', (req, res) => {})

// delete one quiz
router.delete('/:id', (req, res) => {})
*/
module.exports = router
