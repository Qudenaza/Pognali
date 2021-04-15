// Данный скриптовой файл предназначен для страницы catalog.html

// Переменные
const lettersWrapper = document.querySelector('.filtering__wrapper'),
      citiesContainer = document.querySelector('.filtering__content'),
      filteringPremission = (window.innerWidth < 1439),
      filtering = document.querySelector('.filtering'),
      likeButtons = document.querySelectorAll('.companion-card__like');

// Попутчики
const subtitlesPremission = (window.innerWidth >= 768 && 1440 > window.innerWidth),
      selectSubtitles = document.querySelectorAll('.select__subtitle');


// События

// Этот блок кода проверяет размер экрана и решает вешать событие или нет. Само событие отвечает за переключение списка стран
if (filteringPremission) {
  lettersWrapper.addEventListener('click', function(e) {
    const letters = document.querySelectorAll('.filtering__letter');

    if (e.target.tagName = "BUTTON") {
      const citiesList = e.target.nextElementSibling.cloneNode(true);

      letters.forEach(letter => {
        letter.classList.remove('filtering__letter--active');
      });

      e.target.classList.add('filtering__letter--active');

      citiesContainer.firstElementChild.replaceWith(citiesList);
    };
  });
}


// Это событие открывает попап выбора стран
filtering.addEventListener('click', function(e) {
  if (e.target.classList.contains('filtering__close') || e.target.classList.contains('filtering__toggle')) {
    this.classList.toggle('filtering--expanded');
  }
});


// Это событие отвечат за клик на кнопку лайка
likeButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('companion-card__like--active');
  })
});


// Это событие отвечает за выбор попутчиков
selectSubtitles.forEach(title => {
  if (!subtitlesPremission) {
    title.addEventListener('click', function(e) {
      slideDown(e);
    });
  }
});


// Эта функция отвечает за раскрытие блока с фильтрами
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

