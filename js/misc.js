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