import Timer from "./timer.js";

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


const timer = Timer({
    minutesDisplay,
    secondsDisplay ,
    resetControls, 
});

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}


buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    timer.countDown();
});

buttonPause.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

    timer.hold();
});

buttonStop.addEventListener('click', () => {
    resetControls();
    timer.reset();
});

buttonSet.addEventListener('click', () => {
    let newMinutes = prompt('Digite o tempo.');

     if(!newMinutes){
        timer.reset();
        return
    } 
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
});

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
});

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
});