
const toggle = document.querySelector('.navigation__toggle');
const nav = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  nav.classList.toggle('navigation--open');
  nav.classList.toggle('navigation--close');
});
