const dateInput = document.querySelector('.step__input-date'),
      prevMonthBtn = document.querySelector('.step__arrow--prev'),
      nextMonthBtn = document.querySelector('.step__arrow--next');


// Установка текущей даты.

const currentDate = new Date();

dateInput.value = `${currentDate.getFullYear()}-${currentDate.getMonth() < 10 ? '0' + currentDate.getMonth() : currentDate.getMonth()}`;


// Выбор предыдущего месяца.

prevMonthBtn.addEventListener('click', () => dateInput.stepDown());


// Выбор следующего месяца.

nextMonthBtn.addEventListener('click', () => dateInput.stepUp());


// Тестовые функции.

const stepCalendar = document.querySelector('.step__table');

stepCalendar.addEventListener('click', function(e) {
  if (e.target.tagName != 'TD') return;

  e.target.textContent = 22;
});
