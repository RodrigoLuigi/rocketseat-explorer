import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js"

export default function Events({
  controls,
  timer,
  sound
}) {

  buttonPlay.addEventListener('click', () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
    sound.bgAudio.play();
  });

  buttonPause.addEventListener('click', () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
    sound.bgAudio.pause();
  });

  buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
    sound.bgAudio.pause();
  });

  buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return
    }
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });

  buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.pressButton();
    sound.bgAudio.muted= true;
  });

  buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.pressButton();
    sound.bgAudio.muted = false;
  });

}