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



// let main = document.querySelector(".page__main"),
//  header = document.querySelector(".page__header");

// function onScroll() {
//   window.addEventListener("scroll", callbackFunc);

//   function callbackFunc() {
//     const y = window.pageYOffset;

//     if (y > 0) {
//       header.classList.add("header__fix");
//     } else {
//       header.classList.remove("header__fix");
//     }
//   }
// }

// window.onload = function() {
//   onScroll();
// };
 