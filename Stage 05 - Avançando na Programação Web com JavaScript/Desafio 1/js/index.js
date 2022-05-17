const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonIcreaseTime = document.querySelector('.increase-time');
const buttonDecreaseTime = document.querySelector('.decrease-time');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let timerTimeOut;
let minutesDefault = Number(minutesDisplay.textContent);

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
      updateDisplay(minutesDefault, 0)
      return
    }

    if (seconds <= 0) {
      seconds = 3;

      --minutes;
    }

    updateDisplay(minutes, seconds - 1)
    countDown();
  }, 1000);

}

buttonPlay.addEventListener('click', () => {
  countDown();
})

buttonStop.addEventListener('click', () => {
  clearTimeout(timerTimeOut)
  updateDisplay(minutesDefault, 0)
})

buttonIcreaseTime.addEventListener('click', () => {
  updateDisplay(minutesDefault + 5, 0);
})