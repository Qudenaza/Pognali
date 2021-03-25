// БУРГЕР МЕНЮ 
const nav = document.querySelector('.page-nav');
const toggle = document.querySelector('.toggle');

nav.classList.remove('page-nav--nojs');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('toggle--active');

  nav.classList.toggle('page-nav--open')
  nav.classList.toggle('page-nav--closed')
});

// ФИКСИРОВАННОЕ МЕНЮ 



let introSection = document.querySelector(".intro"),
 header = document.querySelector(".page__header");

function onScroll() {
  window.addEventListener("scroll", callbackFunc);

  function callbackFunc() {
    const y = window.pageYOffset;

    if (y > introSection.offsetHeight) {
      header.classList.add("header__fix");
    } else {
      header.classList.remove("header__fix");
    }
  }
}

window.onload = function() {
  onScroll();
};
 