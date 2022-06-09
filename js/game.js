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
    console.log(isAnimation());
    if(clicked !== undefined && clicked.classList.contains('card-hidden') && !isAnimation()){
        const value = clicked.getAttribute('data-value');
        cardAnimation(clicked);
        if(firstGuess === undefined){
            firstGuess = value;
            firstClicked = clicked;
        }
        else{
            clicked.classList.add('card-animation-wait');
            firstClicked.classList.add('card-animation-wait');
            setTimeout(() => {
                clicked.classList.remove('card-animation-wait');
                firstClicked.classList.remove('card-animation-wait');
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
        console.log(`value: ${value} | firstValue: ${firstGuess}`);
    }
});