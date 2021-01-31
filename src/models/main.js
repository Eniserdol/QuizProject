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
/* const getUsersById = id => {
  return Users.getQuiz(id)
}
*/
module.exports = { getQuestionById, getQuizzesById }
