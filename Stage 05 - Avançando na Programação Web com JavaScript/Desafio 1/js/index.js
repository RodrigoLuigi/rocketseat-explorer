const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonIcreaseTime = document.querySelector('.increase-time');
const buttonDecreaseTime = document.querySelector('.decrease-time');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let timerTimeOut;
let currentSecond = Number(secondsDisplay.textContent);;
let minutes = Number(minutesDisplay.textContent);


function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function countDown() {
  timerTimeOut = setTimeout(() => {

    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0;

    if (isFinished) {

      resetTimer();

      return
    }

    if (seconds <= 0) {
      seconds = 60;

      --minutes;
    }
    currentSecond = seconds - 1;
    updateDisplay(minutes, seconds - 1)
    countDown();
  }, 1000);

}

buttonPlay.addEventListener('click', () => {
  countDown();
  buttonPause.classList.remove('hide');
  buttonPlay.classList.add('hide');


})

buttonPause.addEventListener('click', () => {
  hold();
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');


})

buttonStop.addEventListener('click', () => {
  resetTimer();
  hold();
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
})

buttonIcreaseTime.addEventListener('click', () => {
  let newMinutes = getMinutes(5);

  if(!newMinutes){
    updateDisplay(0,0);
    return ;
  }

  updateDisplay(newMinutes, currentSecond);
})

buttonDecreaseTime.addEventListener('click', () => {
  let newMinutes = getMinutes(-5);
  if(!newMinutes){
    updateDisplay(0,0);
    return ;
  }

  updateDisplay(newMinutes, currentSecond);
})

function getMinutes(timer) {
  let newMinutes = Number(minutesDisplay.textContent) + timer;

  if (newMinutes <= 0) {

    return false;
  }
  
  return newMinutes;
}

function resetTimer() {
  currentSecond = 0;
  updateDisplay(minutes, currentSecond);
}

function hold(){
  clearTimeout(timerTimeOut);
}