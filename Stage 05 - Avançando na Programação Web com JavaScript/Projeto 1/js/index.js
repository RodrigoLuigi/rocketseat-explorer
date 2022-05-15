// DOM
// Document Object Model
// programação imperativa - passo a passo do que deve ser feito
// Event-driven
// callback
// Refatoração mudar um código para deixá-lo mais entendível
// deixar o código mais performático
// SEM alterar suas funcionalidades

import Sound from "./sounds.js";
// Named impot
import Timer from "./timer.js";

// Default impot
import Controls from "./controls.js";

import { elements } from "./elements.js";

const {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  secondsDisplay,
  minutesDisplay,
} = elements;

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound()

buttonPlay.addEventListener('click', () => {
  controls.play();
  timer.countdown();
  sound.pressButton();
});

buttonPause.addEventListener('click', () => {
  controls.pause();
  timer.hold();
  sound.pressButton();
});

buttonStop.addEventListener('click', () => {
  controls.reset();   
  timer.reset();
  sound.pressButton();
});

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
  sound.bgAudio.play();
});

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
  sound.bgAudio.pause();
});

buttonSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes();

  if(!newMinutes){
    timer.reset();
    return
  }

  timer.updateDisplay(newMinutes , 0);
  timer.updateMinutes(newMinutes)
});