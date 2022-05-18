const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonIcreaseTime = document.querySelector('.increase-time');
const buttonDecreaseTime = document.querySelector('.decrease-time');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);
let minutoAtual;



function updateDisplay(newMinutes, seconds) {
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
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
      seconds = 3;

      --minutes;
    }
    
    currentTime = minutes;
    updateDisplay(minutes, seconds - 1)
    countDown();
  }, 1000);

}

buttonPlay.addEventListener('click', () => {
  countDown();
})

buttonStop.addEventListener('click', () => {
  clearTimeout(timerTimeOut)
  updateDisplay(minutes, 0)
})

buttonIcreaseTime.addEventListener('click', () => {
  let newMinutes = getMinutes(currentTime, +5);
  updateDisplay(newMinutes, 0);
  updateMinutes(newMinutes);
})

buttonDecreaseTime.addEventListener('click', () => {
  let newMinutes = getMinutes(currentTime, -5);
  updateDisplay(newMinutes, 0);
  updateMinutes(newMinutes);''
})

function getMinutes(currentTime, time){
  let newMinutes = currentTime + time;

  if(newMinutes<0){
    return 0
  }
  return newMinutes
}

function updateMinutes(newMinutes){
  minutesDisplay.textContent = newMinutes 
}

function resetTimer(){
  clearTimeout(timerTimeOut);
  updateDisplay(minutes , 0);
}
