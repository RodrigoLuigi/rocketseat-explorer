import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIcreaseTime,
  buttonDecreaseTime,
  buttonSound1,
  buttonSound2,
  buttonSound3,
  buttonSound4,
}
from "./elements.js"

export default function Events({
  controls,
  timer,
  sound,

}) {

  buttonPlay.addEventListener('click', () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
  })

  buttonPause.addEventListener('click', () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  })

  buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
    sound.bgAudio.pause();
  })

  buttonIcreaseTime.addEventListener('click', () => {
    let currentSecond = timer.getSeconds();
    let newMinutes = controls.getMinutes(5)

    timer.updateDisplay(newMinutes, currentSecond);
    sound.pressButton();
  })

  buttonDecreaseTime.addEventListener('click', () => {
    let currentSecond = timer.getSeconds();
    let newMinutes = controls.getMinutes(-5);

    if (!newMinutes) {
      timer.updateDisplay(0, 0);
      return;
    }

    timer.updateDisplay(newMinutes, currentSecond);
    sound.pressButton();
  })

  buttonSound1.addEventListener('click', () => {
    sound.bgAudioForest.play();
    controls.sound1();
  })

  buttonSound2.addEventListener('click', () => {
    controls.sound2();
   
  })

  buttonSound3.addEventListener('click', () => {
    controls.sound3();
    
  })

  buttonSound4.addEventListener('click', () => {
    controls.sound4();
   
  })
}