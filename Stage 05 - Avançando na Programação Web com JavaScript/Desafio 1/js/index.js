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
  buttonSoundFirePlace
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
  buttonSoundFirePlace
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sounds();

Events({controls, timer, sound});

