//making two elements in some outer dissappear and appear
const disappearAppear = function(outer, elToDis, elToApp, time){
    if(!elToDis.classList.contains('hidden') && elToApp.classList.contains('hidden')){
        outer.classList.add('disappearing');
        setTimeout(() => {
            elToDis.classList.add('hidden');
            elToApp.classList.remove('hidden');
        }, time / 2);
        setTimeout(() => {
            outer.classList.remove('disappearing');
        }, time);
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

//animating card
const cardAnimation = function(card, animTime){
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
        }, animTime);
    }
};

//checking if there are card which is being animated
const isAnimation = function(){
    if(document.querySelector('.card-active-to-hidden') !== null ||
        document.querySelector('.card-hidden-to-active') !== null ||
        document.querySelector('.card-active-to-revealed') !== null ||
        document.querySelector('.card-animation-wait') !== null)
        {
            return true;
        }
    else{
        return false;
    }
}