const express = require('express')

const router = express.Router()
const users = [
  { name: 'enis', age: 35 },
  { name: 'nde', age: 5 },
]
/* GET users listing. */
router.get('/', (req, res) => {
  res.send(users)
})

router.get('/:userId', (req, res) => {
  const user = users[req.params.userId]
  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
