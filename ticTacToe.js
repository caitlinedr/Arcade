const squares = $('.square')
const playerDisplay = $('#player')
let currentPlayer = 'Current Player: playerX'
const addPlayerButton = $('.input-button')
let playerOne 
let playerTwo

function addPlayers() {
    playerOne = $('#player1').val()
    console.log(playerOne)
    $('#one').html("Player X: " + playerOne)
    playerTwo = $('#player2').val()
    $('#two').html("Player O: "  + playerTwo)
}

addPlayerButton.on('click', addPlayers)

function game(){
    playerDisplay.text(currentPlayer)
    if(currentPlayer === 'Current Player: playerX') {
        $(this).addClass('playerX')
        currentPlayer = 'Current Player: playerO'
        playerDisplay.text(currentPlayer)
    } else {
        $(this).addClass('playerO')
        currentPlayer = 'Current Player: playerX'
        playerDisplay.text(currentPlayer)
    }
    // playerX wins
    if($('#1').hasClass('playerX') && $('#2').hasClass('playerX') && $('#3').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    } else if($('#4').hasClass('playerX') && $('#5').hasClass('playerX') && $('#6').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    }  else if($('#7').hasClass('playerX') && $('#8').hasClass('playerX') && $('#9').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    } else if($('#1').hasClass('playerX') && $('#4').hasClass('playerX') && $('#7').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    } else if($('#2').hasClass('playerX') && $('#5').hasClass('playerX') && $('#8').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    } else if($('#3').hasClass('playerX') && $('#6').hasClass('playerX') && $('#9').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    } else if($('#1').hasClass('playerX') && $('#5').hasClass('playerX') && $('#9').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    } else if($('#7').hasClass('playerX') && $('#5').hasClass('playerX') && $('#3').hasClass('playerX')) {
        $(this).addClass('playerX')
        alert('GAME OVER. playerX wins')
    // playerO wins
    } else if ($('#1').hasClass('playerO') && $('#2').hasClass('playerO') && $('#3').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    } else if($('#4').hasClass('playerO') && $('#5').hasClass('playerO') && $('#6').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    }  else if($('#7').hasClass('playerO') && $('#8').hasClass('playerO') && $('#9').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    } else if($('#1').hasClass('playerO') && $('#4').hasClass('playerO') && $('#7').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    } else if($('#2').hasClass('playerO') && $('#5').hasClass('playerO') && $('#8').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    } else if($('#3').hasClass('playerO') && $('#6').hasClass('playerO') && $('#9').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    } else if($('#1').hasClass('playerO') && $('#5').hasClass('playerO') && $('#9').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    } else if($('#7').hasClass('playerO') && $('#5').hasClass('playerO') && $('#3').hasClass('playerO')) {
        $(this).addClass('playerO')
        alert('GAME OVER. playerO wins')
    }
}       

squares.on('click', game)

$('#reset').on('click', function() {
    squares.removeClass('playerX')
    squares.removeClass('playerO')
    currentPlayer = 'Current Player: playerX'
    playerDisplay.text(currentPlayer)
    playerOne = $('#player1').val('')
    $('#one').html("Player X: ")
    playerTwo = $('#player2').val('')
    $('#two').html("Player O: ")
})