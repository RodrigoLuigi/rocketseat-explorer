export default function () {
  // BUTTON SOUND / TIMER END SOUND
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  // SOUNDS MUSIC
  const forest = new Audio("./assets/sounds/Floresta.wav")
  const rain = new Audio("./assets/sounds/Chuva.wav")
  const coffeShop = new Audio("./assets/sounds/Cafeteria.wav")
  const firePlace = new Audio("./assets/sounds/Lareira.wav")


  // Loop sound
  forest.loop = true;
  rain.loop = true;
  coffeShop.loop = true;
  firePlace.loop = true;

  // Volume Default
  volumeDefault();

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function reset() {
    forest.pause();
    rain.pause();
    coffeShop.pause();
    firePlace.pause();
  }

  function volumeDefault() {
    forest.volume = 0.5;
    rain.volume = 0.5;
    coffeShop.volume = 0.5;
    firePlace.volume = 0.5;
  }

  function volumeForest(value) {
    forest.volume = value;
  }

  function volumeRain(value) {
    rain.volume = value;
  }

  function volumeChoffeShop(value) {
    coffeShop.volume = value;
  }

  function volumeFirePlace(value) {
    firePlace.volume = value;
  }

  return {
    pressButton,
    timeEnd,
    reset,
    forest,
    rain,
    coffeShop,
    firePlace,
    volumeForest,
    volumeRain,
    volumeChoffeShop,
    volumeFirePlace,
    volumeDefault
  }
}