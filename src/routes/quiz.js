/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

// get all quizes
router.get('/quizes', (req, res) => {})

// get one quiz
router.get('/quizes/:id', (req, res) => {})

// create a quiz
router.post('/quizes', (req, res) => {})

// update a quiz fully
router.put('/quizes/:id', (req, res) => {})

// delete one quiz
router.delete('/quiz/:id', (req, res) => {})

module.exports = router
