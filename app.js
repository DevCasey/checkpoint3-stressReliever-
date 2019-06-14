
const container = document.getElementById('container');
const gameButton = document.createElement('button');
// const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// gameButton.addEventListener('click', function (event) {
//     const getRandomElement = gameBoard => {
//         const elements = document.querySelectorAll('game-board');
//         const num = randomNum(0, elements.length -1)
//         return elements[num];
//     }
    
// });

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
    gameButton.textContent = 'Play';
    gameButton.style.height = '25px';
    gameButton.style.width = '50px';
    gameButton.style.borderRadius = '7px';
    gameButton.style.marginBottom = '15px';
    container.appendChild(gameButton);
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



