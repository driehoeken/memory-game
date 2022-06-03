const grid = document.querySelector('#grid');

const createGrid = function(gridSize){
    //array to check which values were used
    let usedValues = [];
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(let j = 0; j < gridSize; j++){
            const card = document.createElement('div');
            card.classList.add('card');

            let value = randomInt(0, gridSize * gridSize / 2);
            //if value was used more than 1 time (so it was set 2 times arleady) it will set other value
            while (howManyInArr(usedValues, value) > 1) {
                value = randomInt(0, gridSize * gridSize / 2);
            }
            usedValues.push(value);

            //setting value to card to use it later
            card.setAttribute('data-value', value)
            row.appendChild(card);
        }   
    }
}