// TIMER CONTROL
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonIcreaseTime = document.querySelector('.increase-time');
const buttonDecreaseTime = document.querySelector('.decrease-time');
// SOUND CONTROL
const buttonSoundForest = document.querySelector('.music-1')
const buttonSoundRain = document.querySelector('.music-2')
const buttonSoundCoffeShop = document.querySelector('.music-3')
const buttonSoundFirePlace = document.querySelector('.music-4')
// VOLUME
const inputForest = document.querySelector('#inputForest');
const inputRain = document.querySelector('#inputRain');
const inputChoffeShop = document.querySelector('#inputCoffeShop');
const inputFirePlace = document.querySelector('#inputFirePlace');
// DISPLAY
const display = document.querySelector('.player');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
// DARK-MODE
const buttonLight = document.querySelector('.light');
const buttonDark = document.querySelector('.dark');
const body = document.querySelector('body');


export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIcreaseTime,
  buttonDecreaseTime,
  display,
  minutesDisplay,
  secondsDisplay,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeShop,
  buttonSoundFirePlace,
  inputForest,
  inputRain,
  inputChoffeShop,
  inputFirePlace,
  buttonLight,
  buttonDark,
  body
}