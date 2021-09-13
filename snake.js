const square = $('.square')
const scoreDisplay = $('span')
const startButton = $('.start')

let snake = [ [10, 12], [10, 11], [10, 10] ]
let nextDirection = [0, 1]
let appleIndex = [25, 25]
let speed = 0.9
let intervalTime = 0
let interval = 0

const down = [1, 0];
const up = [-1, 0];
const right = [0, 1];
const left = [0, -1];


function createGrid() {
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      let cell = $(`<div class="square" data-row="${i}" data-col="${j}"></div>`)
      $('.grid').append(cell)
    }
  }
}

createGrid()

function snakeBody() {
  for (let i = 0; i < snake.length; i++) {
    let snakeCoordinate = snake[i]
    console.log(snakeCoordinate)
    $(`[data-row="${snakeCoordinate[0]}"][data-col="${snakeCoordinate[1]}"]`).addClass('snake')
  }
}

function apple() {
  appleIndex = [Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)]
  $(`[data-row="${appleIndex[0]}"][data-col="${appleIndex[1]}"]`).addClass('apple')
}

function startGame() {
  if($('.square').hasClass('snake')) {$('.square').removeClass('snake')}
  if($('.square').hasClass('apple')) {$('.square').removeClass('apple')}
  clearInterval(interval)
  score = 0
  apple()
  nextDirection = [0, 1]
  scoreDisplay.text(score)
  intervalTime = 1000
  snake = [ [10, 12], [10, 11], [10, 10] ]
  snakeBody()
  interval = setInterval(moveSnake, intervalTime)
}

function moveSnake() {
  let tail = snake.pop()
  $(`[data-row="${tail[0]}"] + [data-col="${tail[1]}"]`).removeClass('snake')
  const snakeZero = snake[0][0] + nextDirection[0]
  const snakeOne = snake[0][1] + nextDirection[1]
  snake.unshift([snakeZero, snakeOne])
  
  if ($(`[data-row="${snake[0][0]}"][data-col="${snake[0][1]}"]`).hasClass('apple')) {
    $(`[data-row="${snake[0][0]}"][data-col="${snake[0][1]}"]`).removeClass('apple')
    snake.push(tail)
    apple()
    score++
    scoreDisplay.text(score)
    clearInterval(interval)
    intervalTime = intervalTime * speed
    interval = setInterval(moveSnake, intervalTime)
  }
  snakeBody()
  console.log(snake)
  if((snake[0][0] === -1) || (snake[0][0] === 30) || (snake[0][1] === 30) || (snake[0][1] === -1)) {
    alert("GAME OVER. Your score is " + score)
    return clearInterval(interval)
  }
  let head = snake[0]
  let newSnake = snake.slice(1)
  let newSnakeBody = newSnake.find(body => body[0] === head[0] && body[1] === head[1])
  if (newSnakeBody !== undefined) {
    alert("GAME OVER. Your score is " + score)
    return clearInterval(interval)
  }
}

function onKeyPress(event) {
  const keyPressed = event.key
  if(keyPressed === "ArrowRight") {
    nextDirection = right
  } else if(keyPressed === "ArrowUp") {
    nextDirection = up
  } else if(keyPressed === "ArrowLeft") {
    nextDirection = left
  } else if (keyPressed === "ArrowDown") {
    nextDirection = down
  }
}

$(document).on('keydown', onKeyPress)
startButton.on('click', startGame)
