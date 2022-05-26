import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIcreaseTime,
  buttonDecreaseTime,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeShop,
  buttonSoundFirePlace,
  inputForest,
  inputRain,
  inputChoffeShop,
  inputFirePlace,
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
    sound.pressButton();

    controls.reset();
    timer.reset();

    sound.reset();
    sound.volumeDefault()
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

  inputForest.addEventListener('input', () => {
    let volume = Number(inputForest.value / 100)
    sound.volumeForest(volume);
  })

  inputRain.addEventListener('input', () => {
    let volume = Number(inputRain.value / 100)
    sound.volumeRain(volume);
  })

  inputChoffeShop.addEventListener('input', () => {
    let volume = Number(inputChoffeShop.value / 100)
    sound.volumeChoffeShop(volume);
  })
  
  inputFirePlace.addEventListener('input', () => {
    let volume = Number(inputFirePlace.value / 100)
    sound.volumeFirePlace(volume);
  })

}