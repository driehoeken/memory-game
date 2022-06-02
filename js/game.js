const gameDiv = document.querySelector('#game');
let gameValues = {};

const showGame = function(){
    //appearing needs to be repaired
    gameDiv.style.display = 'block'
    gameDiv.style.opacity = '1';
    createGrid(gameValues.gridSize);
}