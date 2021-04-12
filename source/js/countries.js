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
const countriesTemplate = document.querySelector('#stepCountries').content.firstElementChild;

function insertCountriesTemplate() {
  const target = countriesTemplate.cloneNode(true),
        closeButton = target.querySelector('.step__cross'),
        lettersTable = target.querySelector('.step__letters');

  lettersTable.addEventListener('click', changeCountry);

  closeButton.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove('step__countries--active');
  });

  return target;
};

function changeCountry(e) {
  if (e.target.tagName != 'BUTTON') return;

  const lettersTable = e.target.parentElement.parentElement.parentElement.parentElement,
        letters = lettersTable.querySelectorAll('.step__letter');

  letters.forEach(letter => letter.classList.remove('step__letter--active'));

  e.target.classList.add('step__letter--active');

  const countriesList = countries.find(country => country.letter == e.target.textContent).countriesArray,
        ul = document.createElement('ul'),
        wrapper = lettersTable.parentElement.nextElementSibling;

  ul.className = 'step__list';

  for (let i = 0; i < countriesList.length; i++) {
    const li = document.createElement('li');
          button = document.createElement('button');


    li.className = 'step__box',
    button.className = 'step__country'
    button.type = 'button';

    button.textContent = countriesList[i];

    li.appendChild(button);

    ul.appendChild(li);
  };

  wrapper.firstElementChild.replaceWith(ul);

  wrapper.addEventListener('click', choseCountry);
};

function choseCountry(e) {
  if (e.target.tagName != 'BUTTON') return;

  const country = e.target.textContent,
        choice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild;

  choice.textContent = country;
  choice.dataset.selected = true;
  choice.setAttribute('data-country', country);

  choice.nextElementSibling.nextElementSibling.classList.remove('step__countries--active');

  // Тут будет скрипт запоминания выбранной страны
}
