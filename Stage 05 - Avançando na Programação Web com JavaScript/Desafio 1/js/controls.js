export default function Controls({
  buttonPlay,
  buttonPause,
  minutesDisplay,
  buttonSound1,
  buttonSound2,
  buttonSound3,
  buttonSound4
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

  function sound1() {
    buttonSound1.classList.toggle('active');
    buttonSound2.classList.remove('active');
    buttonSound3.classList.remove('active');
    buttonSound4.classList.remove('active');
  }

  function sound2() {
    buttonSound1.classList.remove('active');
    buttonSound2.classList.toggle('active');
    buttonSound3.classList.remove('active');
    buttonSound4.classList.remove('active');
  }

  function sound3() {
    buttonSound1.classList.remove('active');
    buttonSound2.classList.remove('active');
    buttonSound3.classList.toggle('active');
    buttonSound4.classList.remove('active');
  }

  function sound4() {
    buttonSound1.classList.remove('active');
    buttonSound2.classList.remove('active');
    buttonSound3.classList.remove('active');
    buttonSound4.classList.toggle('active');
  }

  return {
    play,
    pause,
    reset,
    getMinutes,
    sound1,
    sound2,
    sound3,
    sound4
  }
}