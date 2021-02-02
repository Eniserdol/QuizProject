const QuestionsClass = require('./questions')
const QuizzesClass = require('./quizzes')
// const UsersClass = require('./users')

const Questions = new QuestionsClass()
const Quizzes = new QuizzesClass()
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
*/
module.exports = {
  getQuestionById,
  getQuizzesById,
  getQuizzesAll,
  getQuizzesByDifficulty,
  getQuestionsAll,
  getQuestionsByDifficulty,
}
