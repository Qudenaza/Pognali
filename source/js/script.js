// БУРГЕР МЕНЮ 
const nav = document.querySelector('.page-nav');
const toggle = document.querySelector('.toggle');

nav.classList.remove('page-nav--nojs');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('toggle--active');

  nav.classList.toggle('page-nav--open')
  nav.classList.toggle('page-nav--closed')
});
