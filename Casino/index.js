// variables declaration
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const startGame = document.getElementById('start');
const winMsg = document.getElementById('winner');
const retry = document.getElementById('retry');
const retryAgain = document.getElementById('retryAgain');

startGame.addEventListener('click', spinMachine);
retry.addEventListener('click', restartGame);
retryAgain.addEventListener('click', restartGame);

// spin the machine
function spinMachine(){
    var s1;
    var s2;
    var s3;

    s1 = Math.floor(Math.random() * 7) + 1;
    s2 = Math.floor(Math.random() * 7) + 1;
    s3 = Math.floor(Math.random() * 7) + 1;

    slot1.innerHTML = s1;
    slot2.innerHTML = s2;
    slot3.innerHTML = s3;
// check winner
    if(s1 == s2 && s2 == s3){   
        winMsg.classList.add('show');
        startGame.classList.add('hide');
    }
    else{
        winMsg.classList.remove('show');
    }
}
// restart game

function restartGame(){
    slot1.innerHTML = '';
    slot2.innerHTML = '';
    slot3.innerHTML = '';
    startGame.classList.remove('hide');
    winMsg.classList.remove('show');

}