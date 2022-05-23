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
// DISPLAY
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIcreaseTime,
  buttonDecreaseTime,
  minutesDisplay,
  secondsDisplay,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeShop,
  buttonSoundFirePlace
}