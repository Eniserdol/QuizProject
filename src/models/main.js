/*
const QuestionClass = require('./question')
const QuizClass = require('./quiz')
const UserClass = require('./user')

// const Questions = new QuestionsClass()
const Quiz = new QuizClass()
// const Users = new UsersClass()

const getQuestionById = id => {
  return Questions.getQuestion(id)
}

const getQuizzesById = id => {
  return Quizzes.getQuiz(id)
}
const getQuizzesAll = () => {
  return Quizzes.getQuizAll()
}
const getQuestionsAll = () => {
  return Questions.getQuestionsAll()
}

const getQuizzesByDifficulty = level => {
  return Quizzes.getQuizByDifficulty(level)
}

const getQuestionsByDifficulty = level => {
  return Questions.getQuestionsByDifficulty(level)
}
/* const getUsersById = id => {
  return Users.getUser(id)
}

module.exports = {
 // getQuestionById,
  getQuizzesById,
  getQuizzesAll,
  getQuizzesByDifficulty,
  getQuestionsAll,
  getQuestionsByDifficulty,
}
*/
const mongoose = require('mongoose')

const User = mongoose.model('User', { id: Number, name: String, level: String, quizResults: [] })
const enis = new User({ id: 1, name: 'enis', level: 'easy', quizResults: [] })
enis.save().then(() => console.log('we have a new user'))

const Quiz = mongoose.model('Quiz', { id: Number, difficulty: String, questions: [], name: String })
const quizOne = new Quiz({ id: 1, difficulty: 'easy', questions: [], name: 'Quiz 1 Easy' })
const quizTwo = new Quiz({ id: 2, difficulty: 'easy', questions: [], name: 'Quiz 2 Easy' })
const quizThree = new Quiz({ id: 3, difficulty: 'easy', questions: [], name: 'Quiz 3 Easy' })
quizOne.save().then(() => console.log('we have a new quiz'))
quizTwo.save().then(() => console.log('we have a new quiz'))
quizThree.save().then(() => console.log('we have a new quiz'))

const Question = mongoose.model('Question', {
  id: Number,
  difficulty: String,
  text: String,
  choices: [],
  correctAnswer: String,
})
const questionOne = new Question({
  id: 1,
  difficulty: 'easy',
  text: 'What is 2+2',
  choices: ['4', '5', '6'],
  correctAnswer: '4',
})
const questionTwo = new Question({
  id: 2,
  difficulty: 'hard',
  text: 'What is 20+20',
  choices: ['40', '50', '60'],
  correctAnswer: '40',
})
questionOne.save()
questionTwo.save()
