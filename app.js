const container = document.getElementById('container');
// let gameBoard = document.createElement('div');
// gameBoard.setAttribute('class', 'game-board');


let userInput = prompt('Enter a number between 10-20: ');
if (isNaN(userInput)) {
    alert('Numbers only.');
    location.reload();
} else if (userInput < 10) {
    alert('That\'s less than 10');
    location.reload();
} else if (userInput > 20) {
    alert('That\'s greater than 20');
    location.reload();
} else {
    console.log('Something went wrong');
}


for (let index = 1; index <= userInput; index++) {
    let gameBoard = document.createElement('div');
    gameBoard.setAttribute('class', 'game-board');
    container.appendChild(gameBoard);

    for (let j = 0; j < userInput; j++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        gameBoard.appendChild(square);
    }
}



