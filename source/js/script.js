// БУРГЕР МЕНЮ
const header = document.querySelector('.header');
const toggle = document.querySelector('.toggle');

// nav.classList.remove('page-nav--nojs');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('toggle--active');

  header.classList.toggle('header--open');
});


// ФИКСИРОВАННОЕ МЕНЮ

function onScroll() {
  window.addEventListener("scroll", callbackFunc);

  function callbackFunc() {
    const y = window.pageYOffset;

    if (y > 400) {
      header.classList.add("header--fix");
    } else {
      header.classList.remove("header--fix");
    }
  }
};

window.onload = function() {
  onScroll();
};



