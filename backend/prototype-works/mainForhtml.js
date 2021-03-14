// eslint-disable-next-line import/extensions
// import Que from './questions.js'
// const Que = require('public/js/questions')
/*
const Questions = new Que()

let correctAns = 0

let i = 0

document.querySelector('.settings').addEventListener('click', () => {
  const difficulty = document.querySelector('.difficulty').value
  // eslint-disable-next-line no-console
  const difMessage = Questions.setDifficulty(difficulty)
  document.querySelector('.settings_info').textContent = difMessage
})

document.querySelector('.check').addEventListener('click', () => {
  const answer = document.querySelector('.answer').value

  if (!answer) {
    document.querySelector('.message').textContent = 'No answer! is given please choose a, b or c ⛔'
  } else if (answer === Questions.getQuizAnswers(i)) {
    document.querySelector('.message').textContent = 'CORRECT  ANSWER  YAYYYY '
    correctAns += 1
    document.querySelector('.score').textContent = correctAns
    document.querySelector('.number').textContent = Questions.getQuizAnswers(i)
  } else {
    document.querySelector('.message').textContent = 'Wrong Answer sorry '
    correctAns -= 1
    document.querySelector('.score').textContent = correctAns
  }
})
document.querySelector('.again_start').addEventListener('click', () => {
  correctAns = 0
  i = 0
  document.querySelector('.answer').value = ''
  document.querySelector('.question').textContent = Questions.getQuestion(i)
  document.querySelector('.questionAnswers').textContent = Questions.getAnswer(i)
  document.querySelector('.number').textContent = '?'
  document.querySelector('.message').textContent = 'answer is '
  document.querySelector('.score').textContent = 0
})

document.querySelector('.next').addEventListener('click', () => {
  document.querySelector('.answer').value = ''
  document.querySelector('.number').textContent = '?'
  document.querySelector('.message').textContent = 'answer is '
  i += 1
  if (i < Questions.getQuestionsLength()) {
    document.querySelector('.question').textContent = Questions.getQuestion(i)
    document.querySelector('.questionAnswers').textContent = Questions.getAnswer(i)
  } else {
    document.querySelector('.question').textContent = 'you answered all the Questions please start again'
    document.querySelector('.questionAnswers').textContent = ''
  }
})

document.querySelector('.newQuestion').addEventListener('click', () => {
  const text = document.querySelector('.text').value
  const answerA = document.querySelector('.answerA').value
  const answerB = document.querySelector('.answerB').value
  const answerC = document.querySelector('.answerC').value
  const difficulty = document.querySelector('.difficulty').value
  const correctAnswer = document.querySelector('.correctAnswer').value
  if (text && answerA && answerB && answerC && difficulty && correctAnswer) {
    Questions.newQuestionAdd(difficulty, text, [`a:${answerA}`, `b:${answerB}`, `c:${answerC}`], correctAnswer)
  }
})
*/
