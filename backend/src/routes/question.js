/* eslint-disable no-unused-vars */
const axios = require('axios')
const { text } = require('express')
const express = require('express')
const controller = require('../models/main')
const Question = require('../models/question')

const router = express.Router()

router.get('/', async (req, res) => {
  const query = {}
  if (req.query.difficulty) {
    query.difficulty = req.query.difficulty
  }
  let questions = await Question.find(query)
  questions = questions.map(question => {
    return {
      text: question.text,
      choices: question.choices,
      difficulty: question.difficulty,
      id: question.id,
    }
  })
  // res.render('question-list', { questions })
  res.send(questions)
})
router.get('/:id', async (req, res) => {
  const question = await Question.findById(req.params.id)
  if (question) res.send(question)
  else res.sendStatus(404)
})
// create one quiz question
router.post('/', (req, res) => {})

// update one quiz question fully
router.put('/:id', (req, res) => {})

// update one quiz question partially -  question part answer part or correct ans
router.patch('/:id', (req, res) => {})

// delete one quiz question
router.delete('/:id', (req, res) => {})

module.exports = router
