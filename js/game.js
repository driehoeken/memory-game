const gameDiv = document.querySelector('#game');
const animTime = 500;
let gameValues = {};

let firstGuess;
let firstClicked;
let currentPlayer;
let isEnded;

const showGame = function(){
    createGrid(gameValues.gridSize);
    createScores(gameValues.numberOfPlayers);
    currentPlayer = 0;
    toggleActive(0);
}
gameDiv.addEventListener('click', (e) => {
    isEnded = false;
    const clicked = e.target.closest('.card');
    if(clicked !== null && !isAnimation()){
        if(clicked.classList.contains('card-hidden')){
            const value = clicked.getAttribute('data-value');
            cardAnimation(clicked, animTime);

            //first click
            if(firstGuess === undefined){
                firstGuess = value;
                firstClicked = clicked;
            }
            //second click
            else{
                //setting animation class
                clicked.classList.add('card-animation-wait');
                firstClicked.classList.add('card-animation-wait');

                setTimeout(() => {
                    //removing animation class later
                    clicked.classList.remove('card-animation-wait');
                    firstClicked.classList.remove('card-animation-wait');

                    //if the player is right it will change the class of clicked cards
                    if(value === firstGuess){
                        clicked.classList.remove('card-active');
                        firstClicked.classList.remove('card-active');
                        clicked.classList.add('card-revealed');
                        firstClicked.classList.add('card-revealed');
                        addPoint(currentPlayer);
                    }
                    //otherwise they will hide
                    else{
                        cardAnimation(clicked, animTime);
                        cardAnimation(firstClicked, animTime);
                    }
                    firstGuess = undefined;
                    //if there is no hidden or active cards it will end the game
                    if(gameDiv.querySelector('.card-hidden') === null){
                        endGame();
                        isEnded = true;
                    }

                    if(!isEnded){
                        toggleActive(currentPlayer);
                    
                        currentPlayer++;
                        if(currentPlayer >= gameValues.numberOfPlayers){
                            currentPlayer = 0;
                        }
                        toggleActive(currentPlayer);
                    }

                }, animTime * 2);
            }
        }
    }
});

const endGame = function(){
    console.log('game is ended');
};