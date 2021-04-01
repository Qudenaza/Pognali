// БУРГЕР МЕНЮ
const header = document.querySelector('.header');
const toggle = document.querySelector('.toggle');

// nav.classList.remove('page-nav--nojs');

// toggle.addEventListener('click', function () {
//   toggle.classList.toggle('toggle--active');

//   header.classList.toggle('header--open');
// });


// ФИКСИРОВАННОЕ МЕНЮ

// let introSection = document.querySelector(".intro");

// function onScroll() {
//   window.addEventListener("scroll", callbackFunc);

//   function callbackFunc() {
//     const y = window.pageYOffset;

//     if (y > introSection.offsetHeight) {
//       header.classList.add("header--fix");
//     } else {
//       header.classList.remove("header--fix");
//     }
//   }
// };

// window.onload = function() {
//   onScroll();
// };

// МОДАЛКИ

// const modalClose = document.querySelectorAll('.modal__close'),
//       ratesModal = document.querySelector('.rates__modal'),
//       ratesModalOpen = document.querySelector('.js-rates__link');

// modalClose.forEach(closeButton => {
//   closeButton.addEventListener('click', function() {
//     this.parentElement.parentElement.classList.remove('modal-opened');
//   });
// })

// ratesModalOpen.addEventListener('click', function() {
//   ratesModal.classList.add('modal-opened');
// })


// ВЫБОР ПОПУТЧИКОВ
const subtitlesPremission = (window.innerWidth >= 768 && 1440 > window.innerWidth);

const selectSubtitles = document.querySelectorAll('.select__subtitle');

selectSubtitles.forEach(title => {
  if (!subtitlesPremission) {
    title.addEventListener('click', function(e) {
      slideDown(e);
    });
  }
});

function slideDown(e) {
  const elem = e.target,
        container = e.target.nextElementSibling;

  selectSubtitles.forEach(title => {
    if (title == elem) return;

    title.classList.remove('is-active');
    title.nextElementSibling.style.height = 0;
  })

  if (e.target.classList.contains('is-active')) {
    elem.classList.remove('is-active');
    container.style.height = 0;
  } else {
    elem.classList.add('is-active');
    container.style.height = container.scrollHeight + 'px';
  };
};

// КНОПКА ЛАЙКА

const likeButtons = document.querySelectorAll('.companion-card__like');

likeButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('companion-card__like--active');
  })
});
