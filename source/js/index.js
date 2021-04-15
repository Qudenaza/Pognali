// Данный скриптовой файл предназначен для страницы index.html

// Переменные
const modalClose = document.querySelectorAll('.modal__close'),
      ratesModal = document.querySelector('.rates__modal'),
      ratesModalOpen = document.querySelector('.js-rates__link');

// События

// Это событие закрывает модалку прайс-листа для бизнеса
modalClose.forEach(closeButton => {
  closeButton.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove('modal-opened');
  });
})


// Это событие открывает модалку прайс-листа для бизнеса
ratesModalOpen.addEventListener('click', function() {
  ratesModal.classList.add('modal-opened');
})
