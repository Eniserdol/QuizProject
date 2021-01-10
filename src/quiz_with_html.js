let correctAns = 0

// created with const will be refactored after question creation module created
const quizAnswers = ['b', 'c', 'a']
const questions = ['What is 10/5 ?', 'Who invented JavaScript?', 'What is 2*6']
const answers = [`a: 3 b: 2 c: 5`, `a: Douglas Crockford,b: Sheryl Sandberg, c: Brendan Eich`, `a: 12 b: 3 c: 8`]
let i = 0

document.querySelector('.check').addEventListener('click', () => {
  const answer = document.querySelector('.answer').value
  if (!answer) {
    document.querySelector('.message').textContent = 'No answer! is given please choose a, b or c ⛔'
  } else if (answer === quizAnswers[i]) {
    document.querySelector('.message').textContent = 'CORRECT ANSWER YAYYYY'
    correctAns += 1
    document.querySelector('.score').textContent = correctAns
    document.querySelector('.number').textContent = quizAnswers[i]
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
  document.querySelector('.question').textContent = questions[i]
  document.querySelector('.questionAnswers').textContent = answers[i]
  document.querySelector('.number').textContent = '?'
  document.querySelector('.message').textContent = 'answer is '
  document.querySelector('.score').textContent = 0
})

document.querySelector('.next').addEventListener('click', () => {
  document.querySelector('.answer').value = ''
  document.querySelector('.number').textContent = '?'
  document.querySelector('.message').textContent = 'answer is '
  i += 1
  if (i < questions.length) {
    document.querySelector('.question').textContent = questions[i]
    document.querySelector('.questionAnswers').textContent = answers[i]
  } else {
    document.querySelector('.question').textContent = 'you answered all the questions'
    document.querySelector('.questionAnswers').textContent = ''
  }
})
