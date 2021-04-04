const { text } = require('express')
const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  difficulty: String,
  category: String,
  type: String,
  text: String,
  choices: [],
  correct_answer: String,
})
module.exports = mongoose.model('Question', questionSchema)

