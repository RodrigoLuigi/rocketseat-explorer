/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER(ABRIR) e X(FECHA) */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  })
}

/* Função adicionando box-shadow no header quando der scroll*/
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= 45) {
    header.classList.add('scroll');
    header.style.borderBottom = '2px solid black';
  } else {
    header.classList.remove('scroll');
    header.style.borderBottom = 'none';
  }
}

/* When scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
})