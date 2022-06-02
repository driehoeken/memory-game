const grid = document.querySelector('#grid');

const createGrid = function(gridSize){
    let usedValues = [];
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(let j = 0; j < gridSize; j++){
            const card = document.createElement('div');
            card.classList.add('card');
            let value = randomInt(0, gridSize * gridSize / 2);
            while (howManyInArr(usedValues, value) > 1) {
                value = randomInt(0, gridSize * gridSize / 2);
            }
            usedValues.push(value);
            card.setAttribute('data-value', value)
            row.appendChild(card);
        }   
    }
}

const howManyInArr = function(arr, x){
    let count = 0;
    arr.forEach(element => {
        if(element === x){
            count++;
        }
    });
    return count;
}
const randomInt = function(min, max){
    return Math.floor(Math.random() * (max)) + min;
}