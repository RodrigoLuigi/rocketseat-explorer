const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);

function updateMinutes(newMinutes){
    minutes = newMinutes;
}

function resetTimer(){
    updateDisplay(minutes, 0)
}

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countDown() {
    timerTimeOut = setTimeout(function () {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        if (minutes <= 0 && seconds <= 0) {
            resetControls();
            updateDisplay();
            return
        }

        if (seconds <= 0) {

            seconds = 5;

            --minutes
        }

        updateDisplay(minutes, String(seconds - 1));

        countDown();
    }, 1000)
}

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countDown();
});

buttonPause.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

    clearTimeout(timerTimeOut);
});

buttonStop.addEventListener('click', () => {
    resetControls();
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
});

buttonSet.addEventListener('click', () => {
    let newMinutes = prompt('Digite o tempo.');

     if(!newMinutes){
        resetTimer();
        return
    } 
    updateDisplay(newMinutes, 0);
    updateMinutes(newMinutes);
});

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
});

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
});