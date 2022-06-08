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
            card.classList.add('card-hidden');
            let value = randomInt(0, gridSize * gridSize / 2);
            //if value was used more than 1 time (so it was set 2 times arleady) it will set other value
            while (howManyInArr(usedValues, value) > 1) {
                value = randomInt(0, gridSize * gridSize / 2);
            }
            usedValues.push(value);

            //setting value to card to use it later
            card.setAttribute('data-value', value);
            card.innerHTML = `<span>${value}</span>`;
            row.appendChild(card);
        }   
    }
}
//animations
/*
grid.addEventListener('click', (e) => {
    if(e.target.closest('.card')){
        const card = e.target.closest('.card');
        if(card.classList.contains('card-hidden')){
            card.classList.remove('card-hidden');
            card.classList.add('card-hidden-to-active');
            setTimeout(() => {
                card.classList.remove('card-hidden-to-active');
                card.classList.add('card-active');    
            }, 500);
        }
        else if(card.classList.contains('card-active')){
            card.classList.remove('card-active');
            card.classList.add('card-active-to-hidden');
            setTimeout(() => {
                card.classList.remove('card-active-to-hidden');
                card.classList.add('card-hidden');
            }, 500);
        }
    }
});*/