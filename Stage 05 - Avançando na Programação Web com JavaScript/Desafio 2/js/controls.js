export default function Controls({
  buttonPlay,
  buttonPause,
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
    display.style.backgroundImage = "url('./assets/images/forest.jpg')";

    buttonSoundForest.classList.toggle('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.remove('active');
  }

  function soundRain() {
    display.style.backgroundImage = "url('./assets/images/rain.jpeg')";

    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.toggle('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.remove('active');
  }

  function soundCoffeShop() {
    display.style.backgroundImage = "url('./assets/images/coffe-shop.jpg')";

    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.toggle('active');
    buttonSoundFirePlace.classList.remove('active');
  }

  function soundFirePlace() {
    display.style.backgroundImage = "url('./assets/images/fire-place.jpg')";

    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.toggle('active');
  }

  function soundReset(){   
    display.style.backgroundImage = "url('./assets/images/pomodoro.png')";

    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundCoffeShop.classList.remove('active');
    buttonSoundFirePlace.classList.remove('active');
    inputForest.value = 50;
    inputRain.value = 50;
    inputChoffeShop.value = 50;
    inputFirePlace.value = 50;
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