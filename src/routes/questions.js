/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

// get all quiz questions
router.get('/questions', (req, res) => {})

// get one quiz question
router.get('/questions/:id', (req, res) => {})

// create one quiz question
router.post('/questions', (req, res) => {})

// update one quiz question fully
router.put('/questions/:id', (req, res) => {})

// delete one quiz question
router.delete('/questions/:id', (req, res) => {})

module.exports = router
