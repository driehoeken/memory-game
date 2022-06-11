const gameDiv = document.querySelector('#game');
const animTime = 500;
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
        cardAnimation(clicked, animTime);
        if(firstGuess === undefined){
            firstGuess = value;
            firstClicked = clicked;
        }
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
                    console.log('you are correct!');
                    clicked.classList.remove('card-active');
                    firstClicked.classList.remove('card-active');
                    clicked.classList.add('card-revealed');
                    firstClicked.classList.add('card-revealed');
                }
                //otherwise they will hide
                else{
                    console.log('you are not correct :C');
                    cardAnimation(clicked, animTime);
                    cardAnimation(firstClicked, animTime);
                    firstGuess = undefined;
                }
            }, animTime * 2);
        }
        console.log(`value: ${value} | firstValue: ${firstGuess}`);
    }
});