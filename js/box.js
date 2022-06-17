const box = document.querySelector('#message-box');
const button = document.querySelector('#play-again');
const boxMessage = document.querySelector('#message');

const showBox = function(mess){
    //showing box with the message passed in function
    boxMessage.textContent = mess;
    box.classList.remove('hidden');
    box.classList.add('shown-flex');
};

button.addEventListener('click', () => {
    //if player clicks play again, it will refresh the page
    location.reload();
});