const btnsWraps = document.querySelectorAll('.menu-btns-wrap');
const btns = document.querySelectorAll('.menu-btn');
const startBtn = document.querySelector('#menu-start');
const message = document.querySelector('#error-message');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const clickedBtn = e.target;
        //removing style and clicked class for all btns in wrap
        clickedBtn.closest('.menu-btns-wrap')
            .querySelectorAll('.menu-btn').forEach((btn) => {
            btn.style = ''
            btn.classList.remove('clicked')
        });
        //setting style and class for clicked button
        clickedBtn.style.backgroundColor = 'var(--orange)';
        clickedBtn.style.cursor = 'default';
        clickedBtn.classList.add('clicked');
    });
});

startBtn.addEventListener('click', () => {
    const result = {};
    for(const btnsWrap of btnsWraps){
        const chosenBtn = btnsWrap.querySelector('.clicked');
        const wrapLabel = btnsWrap.getAttribute('class').split(' ')[1];
        if(chosenBtn !== null){
            //convert from xxxx-yyy-zzzzz to xxxxYyyZzzzz
            const attrName = wrapLabel.split('-').map((word, index) => {
                if(index != 0){
                    return(word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
                }
                else{
                    return word;
                }
            }).join('');
            result[attrName] = chosenBtn.textContent;
        }
        //if there is no clicked btn in wrap
        else{
            message.textContent = `You have not chosen the ${wrapLabel.split('-').join(' ')}`;
            break;
        }
    };
    return result;
});