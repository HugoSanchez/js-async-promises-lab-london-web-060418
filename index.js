const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  question = questions[0].questionText
  document.querySelector('.question-container').innerHTML = question
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(question), time)
  })
}

function removeQuestion() {
  return new Promise((resolve, reject) => {
    document.querySelector('.question-container').innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time)
  .then(toggleTrueAndFalseButtons)
  .then(removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    if (btn.classList.contains('hide')){
      btn.classList.remove('hide')
    } else {
      btn.classList.add('hide')
    }
  })
}

function displayQuestionOnClick() {
  let clickMe = document.querySelector('.waves-light')
  return clickMe.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(5000)
  })
}
