/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const users = [
  { name: 'enis', age: 35 },
  { name: 'nde', age: 5 },
]

/* GET users listing. */
router.get('/', (req, res) => {
  let result = users

  if (req.query.name) {
    result = users.filter(user => user.name == req.query.name)
  }

  res.send(result)
})

router.get('/:userId', (req, res) => {
  const user = users[req.params.userId]

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

// create a user
router.post('/users', (req, res) => {})

// update a user
router.patch('/quizes/:id', (req, res) => {})

// delete user
router.delete('/quiz/:id', (req, res) => {})
module.exports = router
