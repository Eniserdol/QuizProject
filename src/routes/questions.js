/* eslint-disable no-unused-vars */
const express = require('express')
const controller = require('../models/main')

const router = express.Router()

// get all quiz questions
router.get('/', (req, res) => {})

// get one quiz question
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.send(controller.getQuestionById(id))
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
