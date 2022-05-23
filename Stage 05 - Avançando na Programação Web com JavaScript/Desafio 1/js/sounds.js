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

  return {
    pressButton,
    timeEnd,
    reset,
    forest,
    rain,
    coffeShop,
    firePlace,
  }
}