const gameDiv = document.querySelector('#game');
let gameValues = {};

let firstGuess;
let firstClicked;
let currentPlayer;

const showGame = function(){
    createGrid(gameValues.gridSize);
    createScores(gameValues.numberOfPlayers);
}
gameDiv.addEventListener('click', (e) => {
    const clicked = e.target.closest('.card');
    console.log(clicked);
    if(clicked !== undefined && clicked.classList.contains('card-hidden')){
        const value = clicked.getAttribute('data-value');
        cardAnimation(clicked);
        if(firstGuess === undefined){
            firstGuess = value;
            firstClicked = clicked;
        }
        else{
            setTimeout(() => {
                if(value === firstGuess){
                    console.log('you are correct!');
                    clicked.classList.remove('card-active');
                    firstClicked.classList.remove('card-active');
                    clicked.classList.add('card-revealed');
                    firstClicked.classList.add('card-revealed');
                }
                else{
                    console.log('you are not correct :C');
                    cardAnimation(clicked);
                    cardAnimation(firstClicked);
                    firstGuess = undefined;
                }
            }, 1000);
        }
    }
});