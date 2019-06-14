const container = document.getElementById('container');
// let gameBoard = document.createElement('div');
// gameBoard.setAttribute('class', 'game-board');


let userInput = prompt('Enter a number between 10-20: ');
if (isNaN(userInput)) {
    alert('Numbers only.');
    location.reload();
} else {
    console.log('A number');
}


for (let index = 1; index <= userInput; index++) {25
    let gameBoard = document.createElement('div');
    gameBoard.setAttribute('class', 'game-board');
    container.appendChild(gameBoard);
}



