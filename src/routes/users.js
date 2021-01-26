const express = require('express')

const router = express.Router()

// these lines will be refactored
/*
const User = require('../models/user')
const Photo = require('../models/photo')
*/
const users = [
  { name: 'enis', age: 35 },
  { name: 'nde', age: 5 },
]

/*
// these lines will be refactored
const mihri = new User('mihri', 35)
const armagan = new User('armagan', 36)

const steve = new User('steve', 21)
steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

const berlinPhoto = new Photo('berlin.jpg')
const munichPhoto = new Photo('munich.jpg')

steve.addPhoto(berlinPhoto)
steve.addPhoto(munichPhoto)

armagan.likePhoto(berlinPhoto)
mihri.likePhoto(berlinPhoto)

const users = [mihri, armagan, steve]

*/

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

module.exports = router
