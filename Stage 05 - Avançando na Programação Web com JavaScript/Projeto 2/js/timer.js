import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function reset() {
    hold();
    updateDisplay(minutes, 0)
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
      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        resetControls();
        updateDisplay();
        Sounds().timeEnd();
        return
      }

      if (seconds <= 0) {

        seconds = 60;

        --minutes
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    updateMinutes,
    reset,
    updateDisplay,
    countDown,
    hold,
  }

}