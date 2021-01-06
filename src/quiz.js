/* eslint-disable no-undef */
const myQuestions = ['a', 'b', 'c']
/* const myQuestions = {
   correctAnswer1: "a",
   correctAnswer2: "b",
   correctAnswer3: "c"
 }  */
let correctAns = 0
const userAnswerArr = []
// eslint-disable-next-line no-alert
const userAnswer1 = prompt(`What is 15/5 \n
    a: 3 \n
    b: 2 \n
    c: 5 `)
userAnswerArr.push(userAnswer1)
/* if (userAnswer1 === myQuestions.correctAnswer1) {
    correctAns += 1
    console.log(`True you have got ${correctAns} correct answer`)
  } else {
    console.log('wrong ,reload and  choose  again ')
  } */
// eslint-disable-next-line no-alert
const userAnswer2 = prompt(`'What is 10/5' \n
    a: 3 \n
    b: 2 \n
    c: 5 `)
userAnswerArr.push(userAnswer2)
/*  if (userAnswer2 === myQuestions.correctAnswer2) {
    correctAns += 1
    console.log(`True you have got ${correctAns} correct answers`)
  } else {
    console.log('wrong ,reload and  choose  again ')
  } */
// eslint-disable-next-line no-alert
const userAnswer3 = prompt(`Who invented JavaScript?,\n
      a: "Douglas Crockford",\n
      b: "Sheryl Sandberg",\n
      c: "Brendan Eich"`)
userAnswerArr.push(userAnswer3)

/*  if (userAnswer3 === myQuestions.correctAnswer3) {
  correctAns += 1
  console.log(`True you have got ${correctAns} correct answers`)
} else {
  console.log('wrong ,reload and  choose  again ')
} */

// eslint-disable-next-line no-console
console.log(userAnswerArr)

for (let i = 0; i < 3; i += 1) {
  if (userAnswerArr[i] === myQuestions[i]) {
    correctAns += 1
    // eslint-disable-next-line no-console
    console.log(`True you have got ${correctAns} correct answers`)
  } else {
    // eslint-disable-next-line no-console
    console.log('wrong ,reload and  choose  again ')
  }
}

// eslint-disable-next-line no-console
console.log(`you have got ${correctAns} correct answers and  ${3 - correctAns} wrong answers`)
