/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const User = require('../models/user')
const controller = require('../models/main')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  ;['name', 'level', 'quizResults'].forEach(key => {
    if (req.query[key]) {
      query[key] = req.query[key]
    }
  })

  // if (req.query.name) {
  //   query.name = req.query.name
  // }
  // if (req.query.level) {
  //   query.level = req.query.level
  // }
  // if (req.query.quizResults) {
  //   query.quizResults = req.query.quizResults
  // }
  let users = await User.find(query)
  users = users.map(user => {
    return {
      name: user.name,
      level: user.level,
    }
  })
  res.render('user-list', { users })
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) res.render('user-detail', { user: user.name, level: user.level })
  else res.sendStatus(404)
})

// create a user
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  console.log(createdUser, 'stop')
  res.send(createdUser)
})

// update a user
router.patch('/:id', (req, res) => {})

// delete user
router.delete('/:id', (req, res) => {})

module.exports = router
