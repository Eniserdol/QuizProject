/* eslint-disable no-unused-vars */
const express = require('express')
const axios = require('axios')

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
  let users = await User.find(query)
  users = users.map(user => {
    return {
      name: user.name,
      age: user.age,
      level: user.level,
    }
  })
  // res.render('user-list', { users })
  res.send(users)
})

// create a user
router.post('/', async (req, res) => {
  const userToCreate = {
    name: req.body.name,
    age: req.body.age,
  }

  const createdUser = await User.create(userToCreate)
  res.send(createdUser)
})

// router.get('/:id', async (req, res) => {
//   const user = await User.findById(req.params.id)
//   if (user) res.render('user-detail', { user: user.name, level: user.level })
//   else res.sendStatus(404)
// })

router.get('/initialize', async (req, res) => {
  const mihri = new User({ name: 'mihri', age: 35, email: 'mihri@coyotiv.com' })
  await mihri.setPassword('test')
  await mihri.save()

  const armagan = new User({ name: 'armagan', age: 36, email: 'armagan@coyotiv.com' })
  await armagan.setPassword('test')
  await armagan.save()

  const steve = new User({ name: 'steve', age: 21, email: 'steve@coyotiv.com' })
  await steve.setPassword('test')
  await steve.save()

  steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'
  steve.save()
  res.sendStatus(200)
})

// update a user
router.patch('/:id', (req, res) => {})

// delete user
router.delete('/:id', (req, res) => {})

module.exports = router
