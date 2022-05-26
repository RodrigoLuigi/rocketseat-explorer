import {
  buttonLight,
  buttonDark,
  body
} from "./elements.js"

export default function DarkMode(){
  buttonLight.addEventListener('click', () => {
    buttonLight.classList.add('hide');
    buttonDark.classList.remove('hide');
    body.classList.add('dark-mode');
  
  })
  
  buttonDark.addEventListener('click', () => {
    buttonLight.classList.remove('hide');
    buttonDark.classList.add('hide');
    body.classList.remove('dark-mode');
  })
}

