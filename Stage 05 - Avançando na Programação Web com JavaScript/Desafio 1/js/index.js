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
  buttonSound1,
  buttonSound2,
  buttonSound3,
  buttonSound4
}
from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  buttonSound1,
  buttonSound2,
  buttonSound3,
  buttonSound4
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sounds();

Events({controls, timer, sound});

