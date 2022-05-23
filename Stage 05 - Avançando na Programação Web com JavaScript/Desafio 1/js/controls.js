export default function Controls({
  buttonPlay,
  buttonPause,
  minutesDisplay,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeShop,
  buttonSoundFirePlace
}) {


  function play() {
    buttonPause.classList.remove('hide');
    buttonPlay.classList.add('hide');
  }

  function pause() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  function reset() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  function getMinutes(timer) {
    let newMinutes = Number(minutesDisplay.textContent) + timer;

    if (newMinutes <= 0) {
      return false;
    }

    return newMinutes;
  }

  function soundForest() {
    buttonSoundForest.classList.toggle('active')
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.remove('active');
  }

  function soundRain() {
    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.toggle('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.remove('active');
  }

  function soundCoffeShop() {
    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.toggle('active');
    buttonSoundFirePlace.classList.remove('active');
  }

  function soundFirePlace() {
    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.toggle('active');
  }

  function soundReset(){
    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.remove('active');
  }

  return {
    play,
    pause,
    reset,
    getMinutes,
    soundForest,
    soundRain,
    soundCoffeShop,
    soundFirePlace,
    soundReset
  }
}