const squares = $('.square')
const mole = $('.mole')
const timeLeft = $('#timer')
const score = $('#score')

let result = 0
let currentTime = 10
let timerId = null

function randomMole() {
    if(squares.hasClass('mole')) {
        squares.removeClass('mole')
    }
    let randomSquare = $(squares[Math.floor(Math.random() * 9)])
    randomSquare.addClass('mole')
}

function moveMole() {
    timerId = setInterval(randomMole, 1000)
  }

function whacAMole(){
    if($(this).hasClass('mole')) {
        result++
        score.text(result)
    }
}
squares.on('click', whacAMole)

function timer() {
    currentTime--
    timeLeft.text(currentTime)
    if(currentTime === 0) {
        currentTime = 10
        alert('GAME OVER! Your final score is ' + result)
        result = 0
        score.text(0)
    }
}

$('button').on('click', function() {
    moveMole()
    timer()
    let countDownTimerId = setInterval(timer, 1000)
})