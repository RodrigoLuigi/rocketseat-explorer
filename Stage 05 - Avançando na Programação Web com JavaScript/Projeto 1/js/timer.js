import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function reset() {
    clearTimeout(timerTimeOut)
    updateDisplay(minutes, 0)
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      if (isFinished) {
        resetControls();
        updateDisplay();
        Sounds().timeEnd();

        return
      }

      if (seconds <= 0) {
        seconds = 60;

          --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}

// named export
// export {resetTimer,updateTimerDisplay,countdown};

/* Eii Athiaia , boa tarde! Desculpa a demora para dar o retorno, tive um compromisso agora a tarde, mais vamos lá.

Meu momento como programador é de entrada no mercado de trabalhado como Desenvolvedor Jr, e o que mais tenho buscado é me desenvolver tecnicamente  para estar preparado para as oportunidades! Então há um bom tempo venho aprimorando minhas habilidades tanto no front quanto no back-end junto com o time da Rocketseat. Minhas stack para o front-end são HTML , CSS , JAVASCRIPT , BOOTSTRAP FRAMEWORK, FETCH-API, AXIOS  para consumir API's externas e estou estudando REACT.js, no back-end tenho experiência com NODE.js , EXPRESS, SEQUELIZE, testes unitários com MOCHA.js CHAI.js Jest, e banco de dados MySql , slq.  Em questão da pretenção salarial , o que eu busco mesmo é um salário compativel com o cargo e sendo PJ um adicional para gerir todas as despesas.
 */