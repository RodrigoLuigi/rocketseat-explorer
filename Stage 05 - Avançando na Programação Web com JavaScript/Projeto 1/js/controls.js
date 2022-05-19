export default function Controls({buttonPlay,  buttonPause,  buttonSet,  buttonStop,}) {

  function play() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  function pause() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');

  }

  function reset() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?');

    if (!newMinutes) {
      return false;
    }
    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  }
}



//export defauld
//export default resetControls;