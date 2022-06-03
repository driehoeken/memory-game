const disappearAppear = function(outer, elToDis, elToApp, time){
    if(!elToDis.classList.contains('hidden') && elToApp.classList.contains('hidden')){
    outer.classList.add('disappearing');
    setTimeout(() => {
        elToDis.classList.add('hidden');
        elToApp.classList.remove('hidden');
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