// Переменные
const header = document.querySelector('.header'),
      toggle = document.querySelector('.toggle');


// Функции

// Функция закрепляет хэдер при скролле
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


// События


// Это событие отвечает за открытие и закрытие бургер меню
toggle.addEventListener('click', function () {
  toggle.classList.toggle('toggle--active');

  header.classList.toggle('header--open');
});

// Это событие запускает функцию при загрузке страницы
window.onload = function() {
  onScroll();
};



