import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIcreaseTime,
  buttonDecreaseTime,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeShop,
  buttonSoundFirePlace
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
    buttonPause.style.filter = 'invert()';
  })

  buttonPause.addEventListener('click', () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  })

  buttonStop.addEventListener('click', () => {
    sound.pressButton();
    
    controls.reset();
    timer.reset();

    sound.reset();
    controls.soundReset();
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

  buttonSoundForest.addEventListener('click', () => {
    controls.soundForest();
    sound.reset();

    if (buttonSoundForest.classList.contains('active')) {
      sound.forest.play();
    } else {
      sound.forest.pause();
    }
  })

  buttonSoundRain.addEventListener('click', () => {
    controls.soundRain();
    sound.reset();

    if (buttonSoundRain.classList.contains('active')) {
      sound.rain.play();
    } else {
      sound.rain.pause();
    }
  })

  buttonSoundCoffeShop.addEventListener('click', () => {
    controls.soundCoffeShop();
    sound.reset();

    if (buttonSoundCoffeShop.classList.contains('active')) {
      sound.coffeShop.play();
    } else {
      sound.coffeShop.pause();
    }
  })

  buttonSoundFirePlace.addEventListener('click', () => {
    controls.soundFirePlace();
    sound.reset();

    if (buttonSoundFirePlace.classList.contains('active')) {
      sound.firePlace.play();
    } else {
      sound.firePlace.pause();
    }
  })
}