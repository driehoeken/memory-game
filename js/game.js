const gameDiv = document.querySelector('#game');
let gameValues = {};

const showGame = function(){
    createGrid(gameValues.gridSize);
}