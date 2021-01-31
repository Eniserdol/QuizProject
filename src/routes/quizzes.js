/* eslint-disable no-unused-vars */
const express = require('express')
const controller = require('../models/main')

const router = express.Router()

// get all quizzes
router.get('/', (req, res) => {})

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
