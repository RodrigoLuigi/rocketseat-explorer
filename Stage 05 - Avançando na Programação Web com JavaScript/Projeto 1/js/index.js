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

import {  
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  secondsDisplay,
  minutesDisplay } from "./elements.js";

import Events from './events.js';


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

Events({controls, timer, sound});

