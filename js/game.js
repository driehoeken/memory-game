const gameDiv = document.querySelector('#game');
const animTime = 500;
let gameValues = {};

let firstGuess;
let firstClicked;
let currentPlayer;
let isEnded;
let isSingle;

const showGame = function(){
    //creating ui
    createGrid(gameValues.gridSize);
    createScores(gameValues.numberOfPlayers);

    //setting currentPlayer and toggle their status
    currentPlayer = 0;
    toggleActive(0);

    gameValues.numberOfPlayers === '1' ? isSingle = true : isSingle = false;
    
    //if single, it will start measure time
    if(isSingle){
        startTime();
    }
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

                    //if the player is right it will change the class of clicked cards to revealed
                    if(value === firstGuess){
                        clicked.classList.remove('card-active');
                        firstClicked.classList.remove('card-active');
                        clicked.classList.add('card-revealed');
                        firstClicked.classList.add('card-revealed');
                        if(!isSingle){
                            addPoint(currentPlayer);
                        }
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
                    //if game is not ended, it will change active player
                    if(!isEnded){
                        if(!isSingle){
                            toggleActive(currentPlayer);
                        
                            currentPlayer++;

                            //if current player does not fit in numberOfPlayers, it will change the current player to the first
                            if(currentPlayer >= gameValues.numberOfPlayers){
                                currentPlayer = 0;
                            }
                            toggleActive(currentPlayer);
                        }
                        //if it is single mode it will add the move to score
                        else{
                            addPoint(0);
                        }
                    }

                }, animTime * 2);
            }
        }
    }
});

const endGame = function(){
    let textMessage = '';
    if(!isSingle){
        let highest = 0;
        let players = [];
        

        //getting players which have the most points in case if there is few players who have the same no. of points
        for(let i = 0; i < gameValues.numberOfPlayers; i++){
            const currentPoints = getPoints(i);
            if(currentPoints > highest){
                highest = currentPoints;
                players = [i];
            }
            else if(currentPoints === highest){
                players.push(i);
            }
        }
        
        for(const player of players){
            textMessage += `player ${player}, `
        }
        textMessage = textMessage.slice(0, -2);
        textMessage = textMessage.charAt(0).toUpperCase() + textMessage.slice(1);
        showBox(`${textMessage} won!`);
    }

    //if there is one player, it will show no. of moves and time
    else{
        showBox(`You have ended with ${parseInt(document.querySelector('.score').textContent) + 1} moves in ${document.querySelector('.score-time').textContent}`)
    }
};