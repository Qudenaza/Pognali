// Данный скриптовой файл предназначен для страницы index.html

// МОДАЛКИ

const modalClose = document.querySelectorAll('.modal__close'),
      ratesModal = document.querySelector('.rates__modal'),
      ratesModalOpen = document.querySelector('.js-rates__link');

modalClose.forEach(closeButton => {
  closeButton.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove('modal-opened');
  });
})

ratesModalOpen.addEventListener('click', function() {
  ratesModal.classList.add('modal-opened');
})
