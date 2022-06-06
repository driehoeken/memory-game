const scores = document.querySelector('#scores');

const createScores = function(players){
    if(players !== 1){
        for(let i = 0; i < players; i++){
            const score = document.createElement('div');
            score.classList.add('score-outer');
            const scoreInner = `<div class='score-triangle'></div><div class='score-inner'><div class='score-name'>Player ${i + 1}</div><div class='score'>0</div></div>`;
            score.innerHTML = scoreInner;
            scores.appendChild(score);
        }
    }
    //if someone wants to play alone, it will show no of turns and time
    else{
        
    }
}
const toggleActive = function(index){
    scores.children[index].classList.toggle("score-active");
}
const addPoint = function(index){
    const scorePoints = scores.children[index].querySelector('.score');
    scorePoints.textContent = parseInt(scorePoints.textContent) + 1;
}