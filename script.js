
const quizData = [
    {
        question: 'When JavaScript was invented?',
        a: '1987',
        b: '1990',
        c: '1995',
        d: '2001',
        correct: 'c'
    },

    {
        question: 'What is HTML?',
        a: 'Hypertransform Multilevel Language',
        b: 'Hypertext Markup Language',
        c: 'Hypertext Minimalistic Language',
        d: 'Hypertext Morons\' Language',
        correct: 'b'
    },

    {
        question: 'What is CSS?',
        a: 'Cascading Style Sheets',
        b: 'Claster Style Sheets',
        c: 'Classic Style Sheets',
        d: 'Cascade Style Shoes',
        correct: 'a'
    },

    {
        question: 'Who is on duty today?',
        a: 'He is on duty today',
        b: 'She is on duty today',
        c: 'We are on duty today',
        d: 'I am on duty today',
        correct: 'd'
    },

    {
        question: 'What year was Windows-95 launched?',
        a: '1985',
        b: '1996',
        c: '1994',
        d: '1995',
        correct: 'd'
    }

]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text') 
const b_text = document.getElementById('b_text') 
const c_text = document.getElementById('c_text') 
const d_text = document.getElementById('d_text') 
const submitButton = document.getElementById('submit')
const answerEls = document.querySelectorAll(".answer")

let currentQuiz = 0
let score = 0


loadQuiz()

function loadQuiz () {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function getSelected() {

    let answer = undefined

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

submitButton.addEventListener('click', () => {
    //check to see the answer

    const answer = getSelected()

    //console.log(answer) check answers in console

    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++
        } 

        currentQuiz++

            if (currentQuiz < quizData.length) {
                   loadQuiz()
               } else {
                   quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correctly!</h2> <button onclick="location.reload()">Reload Page</button>`
         }
    }
})
