import Sounds from "./sounds.js"
import Timer from "./timer.js";
import Controls from "./controls.js";

import Events from "./events.js";

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeShop,
  buttonSoundFirePlace,
  display,
}
from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeShop,
  buttonSoundFirePlace,
  display,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sounds();

Events({controls, timer, sound});


const buttonLight = document.querySelector('.light');
const buttonDark = document.querySelector('.dark');
const body = document.querySelector('body');

buttonLight.addEventListener('click', ()=>{
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  body.classList.add('dark-mode')

})

buttonDark.addEventListener('click', ()=>{
  buttonLight.classList.remove('hide')
  buttonDark.classList.add('hide')
  body.classList.remove('dark-mode')
})

