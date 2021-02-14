/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const User = require('../models/user')
const controller = require('../models/main')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  if (req.query.name) {
    query.name = req.query.name
  }
  if (req.query.level) {
    query.level = req.query.level
  }
  if (req.query.quizResults) {
    query.quizResults = req.query.quizResults
  }
  res.send(await User.find(query))
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

// create a user
router.post('/', (req, res) => {})

// update a user
router.patch('/:id', (req, res) => {})

// delete user
router.delete('/:id', (req, res) => {})

module.exports = router
