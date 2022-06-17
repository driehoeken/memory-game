const scores = document.querySelector('#scores');

const createScores = function(players){
    players = parseInt(players);
    //if there is more than 1 player, it will create score div for all of them
    if(players > 1){
        for(let i = 0; i < players; i++){
            const score = document.createElement('div');
            score.classList.add('score-outer');
            const scoreInner = `<div class='score-triangle'></div><div class='score-inner'><div class='score-name'>Player ${i + 1}</div><div class='score'>0</div></div>`;
            score.innerHTML = scoreInner;
            scores.appendChild(score);
        }
    }
    //if someone wants to play alone, it will show no. of turns and time
    else{
        //score div
        scores.id = 'scores-single';
        console.log('singleplayer');
        const score = document.createElement('div');
        score.classList.add('score-outer');
        const scoreInner = `<div class='score-inner'><div class='score-name'>Moves</div><div class='score'>0</div></div>`;
        score.innerHTML = scoreInner;
        scores.appendChild(score);

        //time div
        const time = document.createElement('div');
        time.classList.add('score-outer');
        const timeInner = `<div class='score-inner'><div class='score-name'>Time</div><div class='score-time'>0:00</div></div>`;
        time.innerHTML = timeInner;
        scores.appendChild(time);
    }
}

//getting how many points player has
const getPoints = function(index){
    return parseInt(scores.children[index].querySelector('.score').textContent);
}
//toggle status of player(is it their turn or not)
const toggleActive = function(index){
    scores.children[index].classList.toggle("score-active");
}
//adding point for a player
const addPoint = function(index){
    const scorePoints = scores.children[index].querySelector('.score');
    scorePoints.textContent = parseInt(scorePoints.textContent) + 1;
}
//starting timer in singleplayer
const startTime = function(){
    const timeDiv = document.querySelector('.score-time');
    setInterval(() => {
        const currentTime = timeDiv.textContent.split(':');
        const s = parseInt(currentTime[1]) + 1;
        const m = parseInt(currentTime[0]);
        const newTime = s !== 60 ? `${m}:${s < 10 ? "0" + s : s}` : `${m + 1}:00`;
        timeDiv.textContent = newTime;
    }, 1000);
}