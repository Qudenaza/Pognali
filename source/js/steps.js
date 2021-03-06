// Данный скриптовой файл предназначен для страницы form.html и отвечает за интерактивность блока "Добавить план"

// Переменные:

// Объект, хранящий все значения введенные пользователем
const stepsData = {
  daysCount: 0,
  companionsCount: 0,
  allowChildren: false,
  countriesToVisit: []
};

// Массив стран по буквам
const countries = [
  {
    letter: 'А',
    countriesArray: ['Австралия','Австрия', 'Азербайджан', 'Албания', 'Алжир', 'Ангола', 'Андорра', 'Антигуа и Барбуда', 'Аргентина', 'Армения', 'Афганистан'],
  },
  {
    letter: 'Б',
    countriesArray: ['Багамские Острова', 'Бангладеш', 'Барбадос', 'Бахрейн', 'Белоруссия', 'Белиз', 'Бельгия', 'Бенин', 'Болгария', 'Боливия', 'Босния и Герцеговина', 'Ботсвана', 'Бразилия', 'Бруней', 'Буркина-Фасо', 'Бурунди', 'Бутан']
  },
  {
    letter: 'В',
    countriesArray: ['Вануату', 'Великобритания', 'Венгрия', 'Венесуэла', 'Восточный Тимор', 'Вьетнам']
  },
  {
    letter: 'Г',
    countriesArray: ['Габон', 'Гаити', 'Гайана', 'Гамбия', 'Гана', 'Гватемала', 'Гвинея', 'Гвинея-Бисау', 'Германия', 'Гондурас', 'Гренада', 'Греция', 'Грузия']
  },
  {
    letter: 'Д',
    countriesArray: ['Дания', 'Джибути', 'Доминика', 'Доминикана']
  },
  {
    letter: 'Е',
    countriesArray: ['Египет']
  },
  {
    letter: 'З',
    countriesArray: ['Замбия', 'Зимбабве']
  },
  {
    letter: 'И',
    countriesArray: ['Израиль', 'Индия', 'Индонезия', 'Иордания', 'Ирак', 'Иран', 'Ирландия', 'Исландия', 'Испания', 'Италия']
  },
  {
    letter: 'К',
    countriesArray: ['Кабо-Верде', 'Казахстан', 'Камбоджа', 'Камерун', 'Канада', 'Катар', 'Кения', 'Кипр', 'Киргизия', 'Кирибати', 'Китай', 'Колумбия']
  },
  {
    letter: 'Л',
    countriesArray: ['Лаос', 'Латвия', 'Лесото', 'Либерия', 'Ливан', 'Ливия', 'Литва', 'Лихтенштейн', 'Люксембург']
  },
  {
    letter: 'М',
    countriesArray: ['Маврикий', 'Мавритания', 'Мадагаскар', 'Малави', 'Малайзия', 'Мали', 'Мальдивы', 'Мальта', 'Марокко']
  },
  {
    letter: 'Н',
    countriesArray: ['Намибия', 'Науру', 'Непал', 'Нигер', 'Нигерия', 'Нидерланды', 'Никарагуа', 'Новая Зеландия', 'Норвегия']
  },
  {
    letter: 'О',
    countriesArray: ['ОАЭ', 'Оман']
  },
  {
    letter: 'П',
    countriesArray: ['Пакистан', 'Палау', 'Панама', 'Папуа - Новая Гвинея', 'Парагвай', 'Перу', 'Польша', 'Португалия']
  },
  {
    letter: 'Р',
    countriesArray: ['Руанда', 'Румыния', 'Россия']
  },
  {
    letter: 'С',
    countriesArray: ['Сальвадор', 'Самоа', 'Сан-Марино', 'Саудовская Аравия', 'Сейшелы', 'Сенегал', 'Сербия', 'Сингапур', 'Сирия', 'Словакия', 'Словения', 'США']
  },
  {
    letter: 'Т',
    countriesArray: ['Таджикистан', 'Таиланд', 'Танзания', 'Того', 'Тонга', 'Тринидад и Тобаго', 'Тувалу', 'Тунис', 'Туркмения', 'Турция']
  },
  {
    letter: 'У',
    countriesArray: ['Уганда', 'Узбекистан', 'Украина', 'Уругвай']
  },
  {
    letter: 'Ф',
    countriesArray: ['Фиджи', 'Филиппины', 'Финляндия', 'Франция']
  },
  {
    letter: 'Х',
    countriesArray: ['Хорватия']
  },
  {
    letter: 'Ч',
    countriesArray: ['Чад', 'Черногория', 'Чехия', 'Чили']
  },
  {
    letter: 'Ш',
    countriesArray: ['Швейцария', 'Швеция', 'Шри-Ланка']
  },
  {
    letter: 'Э',
    countriesArray: ['Эквадор', 'Эритрея', 'Эсвантини', 'Эстония', 'Эфиопия']
  },
  {
    letter: 'Ю',
    countriesArray: ['ЮАР', 'Южный Судан']
  },
  {
    letter: 'Я',
    countriesArray: ['Ямайка', 'Япония']
  }
];

// Количество дней
const daysInput = document.querySelector('#stepDays'),
      daysIncreaseButton = document.querySelector('#stepDaysMore'),
      daysDecreaseButton = document.querySelector('#stepDaysLess');

// Количество попутчиков
const companionsInput = document.querySelector('#stepCompanions'),
      companionsIncreaseButton = document.querySelector('#stepCompanionsMore'),
      companionsDecreaseButton = document.querySelector('#stepCompanionsLess');

// Чекбокс "Можно с детьми"
const allowChildrenCheckbox = document.querySelector('#allowChildren');

// Выбор месяца
const dateInput = document.querySelector('.step__input-date'),
      prevMonthBtn = document.querySelector('.step__arrow--prev'),
      nextMonthBtn = document.querySelector('.step__arrow--next');

// Добавление нового поля выбора страны
const addCountryButton = document.querySelector('#addCountry'),
      countryChoiceContainer = document.querySelector('#stepChoices');

// Кнопки переключения между шагами
const steps = document.querySelectorAll('.step');
      nextStepBtns = document.querySelectorAll('.js-next-step'),
      prevStepBtns = document.querySelectorAll('.js-prev-step'),
      circleIndicators = document.querySelectorAll('.form__item');


// Функции:

// Функция увеличевает значение переданного поля на один пункт и делает дополнительую проверку на соответствие максимальному значению
function increaseValue(elem, property) {
  elem.value++; // Увеличеваем значение на один пункт

  if (+elem.value > +elem.max) { // Если текущее значение больше чем максимальное
    elem.value = elem.min;
  }

  stepsData[property] = +elem.value; // Добавляем значение в объект steps
};

// Функция уменьшает значение переданного поля на один пункт и делает дополнительую проверку на соответствие минимальному значению
function decreaseValue(elem, property) {
  elem.value--; // Уменьшаем значение на один пункт

  if (+elem.value < +elem.min) { // Если текущее значение меньше чем минимальное
    elem.value = elem.min;
  }

  stepsData[property] = +elem.value; // Добавляем значение в объект steps
}

// Функция меняет статус про разрешение с детьми в объекте пользователя
function changePermissionStatus(e) {
  stepsData.allowChildren = e.target.checked;
};

// Функция добавляет поле выбора страны в HTML код и вешает на них события
function addCountryChoiceField() {
  const template = document.querySelector('#stepAddCountry').content.firstElementChild.cloneNode(true),
        countriesPopupOpenButton = template.querySelector('.step__choice-button'),
        countriesPopupCloseButton = template.querySelector('.step__cross'),
        deleteCountryFieldButton = template.querySelector('.step__close'),
        lettersTable = template.querySelector('.step__letters'),
        countriesList = template.querySelector('.step__content'),
        uniqueId = Math.floor(Math.random() * 1000);

  countriesPopupOpenButton.addEventListener('click', openCountriesPopup);
  countriesPopupCloseButton.addEventListener('click', closeCountriesPopup);
  deleteCountryFieldButton.addEventListener('click', deleteCountryField);
  countriesList.addEventListener('click', (e) => choseCountry(e, uniqueId));
  lettersTable.addEventListener('click', changeCountries);

  countryChoiceContainer.prepend(template);
};

// Функция открывает попап выбора страны
function openCountriesPopup() {
  const popup = this.parentElement.querySelector('.step__countries');

  popup.classList.add('step__countries--active');
};

// Функция закрывает попап выбора страны
function closeCountriesPopup(e) {
  const popup = e.target.closest('.step__countries');

  popup.classList.remove('step__countries--active');
};

// Функция удаляет поле выбора страны
function deleteCountryField() {
  this.parentElement.remove();
};

// Функция показывает страны по первой букве
function changeCountries(e) {
  if (e.target.classList != 'step__letter') return;

  const letter = e.target.textContent,
        letters = e.target.closest('.step__letters').querySelectorAll('.step__letter');

  letters.forEach(letter => letter.classList.remove('step__letter--active'));

  e.target.classList.add('step__letter--active');

  createCountriesList(letter, e);
};

// Функция создает список стран
function createCountriesList(letter, e) {
  const arr = countries.find(item => item.letter == letter).countriesArray,
        ul = document.createElement('ul'),
        countriesWrapper = e.target.closest('.step__countries').querySelector('.step__content');

  ul.className = 'step__list';

  arr.forEach(country => {
    const li = document.createElement('li'),
          button = document.createElement('button');

    li.className = 'step__box';
    button.className = 'step__country';
    button.type = 'button';
    button.textContent = country;

    li.append(button);

    ul.append(li);
  });

  countriesWrapper.firstElementChild.replaceWith(ul);
};

// Функция для выбора желаемой страны
function choseCountry(e, id) {
  if (e.target.className != 'step__country') return;

  const country = e.target.textContent,
        countryField = e.target.closest('.step__choice').querySelector('.step__choice-button');

  countryField.textContent = country;
  countryField.dataset.selected = true;
  countryField.setAttribute('data-country', country);

  addCountryToArray(id, country);

  closeCountriesPopup(e);
};

// Функция добавляет поле для описание действий в выбранной стране
function addCountryPlans(data) {
  const template = document.querySelector('#stepTextareas').content.firstElementChild.cloneNode(true),
        plansWrapper = document.querySelector('.step__fieldset'),
        plansTitle = template.querySelector('.step__legend'),
        plansFlag = template.querySelector('span'),
        plansTextarea = template.querySelector('textarea');

  plansTitle.textContent = data.countryName;
  plansFlag.dataset.country = data.countryName;

  plansWrapper.appendChild(template);

  plansTextarea.addEventListener('change', (e) => {
    const target = stepsData.countriesToVisit.find(el => el.countryName == stepsData.countriesToVisit[country].countryName);

    target.countryPlans = e.target.value;
  })
};

// Функция переключение между шагами
function makeActiveStep(el, next) {
  let currentActiveModal = +el.target.parentElement.parentElement.dataset.slide;

  steps.forEach(step => step.classList.remove('step--active'));
  circleIndicators.forEach(circle => circle.classList.remove('form__item--active'));

  if (el.target.id == 'textareaTrigger') {
    for(let i = 0; i < stepsData.countriesToVisit.length; i++) {
      addCountryPlans(stepsData.countriesToVisit[i]);
    };
  } else if (el.target.id == 'removeTextareaFields') {
    document.querySelector('.step__fieldset').innerHTML = '';
  }

  if (next) {
    steps[++currentActiveModal].classList.add('step--active');
    circleIndicators[currentActiveModal].classList.add('form__item--active');
  } else {
    steps[--currentActiveModal].classList.add('step--active');
    circleIndicators[currentActiveModal].classList.add('form__item--active');
  };
};

// Функция проверяет уникальность страны
function checkForUniqueId(id) {
  return stepsData.countriesToVisit.findIndex(country => country.uniqueId == id);
};


// Функция добавляет данные в объект
function addCountryToArray(id, country) {
  const index = checkForUniqueId(id);

  if (index != -1) {
    const data = {
      uniqueId: id,
      countryName: country,
      countryPlans: ''
    };

    stepsData.countriesToVisit.splice(index, 1, data);
  } else {
    stepsData.countriesToVisit.push({
      uniqueId: id,
      countryName: country,
      countryPlans: ''
    })
  }
};


// События:

// Это событие срабатывает при клике на кнопку добавления количества попутчиков
companionsIncreaseButton.addEventListener('click', () => increaseValue(companionsInput, 'companionsCount'));

// Это событие срабатывает при клике на кнопку уменьшения количества попутчиков
companionsDecreaseButton.addEventListener('click', () => decreaseValue(companionsInput, 'companionsCount'));

// Это событие срабатывает при клике на кнопку добавления количества дней
daysIncreaseButton.addEventListener('click', () => increaseValue(daysInput, 'daysCount'));

// Это событие срабатывает при клике на кнопку уменьшения количества дней
daysDecreaseButton.addEventListener('click', () => decreaseValue(daysInput, 'daysCount'));

// Это событие срабатывает при изменении статуса чекбокса "Можно с детьми"
allowChildrenCheckbox.addEventListener('change', changePermissionStatus);

// Это событие срабатывает при клике на кнопку добавления нового поля для выбора страны
addCountryButton.addEventListener('click', addCountryChoiceField);

// Это событие срабатывает при клике на кнопку предыдущего месяца
prevMonthBtn.addEventListener('click', () => dateInput.stepDown());

// Это событие срабатывает при клике на кнопку следующего месяца
nextMonthBtn.addEventListener('click', () => dateInput.stepUp());

// Это событие срабатывает при клике на следующий шаг
nextStepBtns.forEach(button => {
  button.addEventListener('click', (e) => makeActiveStep(e, true));
});

// Это событие срабатывает при клике на предыдущий шаг
prevStepBtns.forEach(button => {
  button.addEventListener('click', (e) => makeActiveStep(e, false));
});
