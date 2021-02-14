/* eslint-disable no-unused-vars */
const express = require('express')
const controller = require('../models/main')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('quiz', { text: 'hello', title: 'Quiz Project' })
})

// get all quizzes
/*
router.get('/', (req, res) => {
  res.send(controller.getQuizzesAll())
})
*/
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

module.exports = router
