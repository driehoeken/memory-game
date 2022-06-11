const box = document.querySelector('#message-box');
const button = document.querySelector('#play-again');
const boxMessage = document.querySelector('#message');

const showBox = function(mess){
    boxMessage.textContent = mess;
    box.classList.remove('hidden');
    box.classList.add('shown-flex');
};

button.addEventListener('click', () => {
    location.reload();
});