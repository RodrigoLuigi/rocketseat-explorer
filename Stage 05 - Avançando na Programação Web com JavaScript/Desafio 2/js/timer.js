import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);
  let currentSecond = Number(secondsDisplay.textContent);



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
        Sounds().timeEnd();
        setTimeout(() => {
          reset();
          resetControls();
          alert('O tempo acabou!');

        }, 1000)

        return
      }

      if (seconds <= 0) {
        seconds = 60;

        --minutes;
      }
      currentSecond = seconds - 1;
      updateDisplay(minutes, currentSecond)
      countDown();
    }, 1000);

  }

  function getSeconds() {
    return currentSecond;
  }

  function reset() {
    currentSecond = 0;
    hold();
    updateDisplay(minutes, 0);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    updateDisplay,
    countDown,
    getSeconds,
    reset,
    hold,
  }
}