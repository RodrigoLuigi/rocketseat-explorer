import Sounds from "./sounds.js"
import Timer from "./timer.js";
import Controls from "./controls.js";

import Events from "./events.js";
import DarkMode from "./dark-mode.js";


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
  inputForest,
  inputRain,
  inputChoffeShop,
  inputFirePlace,
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
  inputForest,
  inputRain,
  inputChoffeShop,
  inputFirePlace,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sounds();

Events({controls, timer, sound});

DarkMode();


