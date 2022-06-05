const scores = document.querySelector('#scores');

const createScores = function(players){
    if(players !== 1){
        for(let i = 0; i < players; i++){
            const score = document.createElement('div');
            score.classList.add('score-outer');
            const scoreInner = `<div class='score-name'>Player ${i + 1}</div><div class='score'>0</div>`;
            score.innerHTML = scoreInner;
            scores.appendChild(score);
        }
    }
    //if someone wants to play alone, it will show no of turns and time
    else{
        
    }
}