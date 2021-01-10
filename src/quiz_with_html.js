// eslint-disable-next-line import/extensions
import Que from './questions.js'

const Questions = new Que()
let correctAns = 0

// created with const will be refactored after question create module created
/* const quizAnswers = ['b', 'c', 'a']
 const QuestionsModule = ['What is 10/5 ?', 'Who invented JavaScript?', 'What is 2*6']
 const answers = [`a: 3 b: 2 c: 5`, `a: Douglas Crockford,b: Sheryl Sandberg, c: Brendan Eich`, `a: 12 b: 3 c: 8`]
  */
let i = 0

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
