// Переменные

const addCityButton = document.querySelector('.js-add-city'),
      choicesContainer = document.querySelector('.step__choices');

addCityButton.addEventListener('click', function() {
  createChoiceField()
})

function createChoiceField() {
  const div = document.createElement('div'),
        button = document.createElement('button'),
        deleteButton = document.createElement('button'),
        countryFlag = document.createElement('span');

  div.classList.add('step__choice');

  button.className = 'step__choice-button step__choice-button--white';
  button.setAttribute('data-selected', false);
  button.type = 'button';
  button.textContent = 'Выберите страну'

  countryFlag.className = 'step__flag';

  deleteButton.className = 'step__close';
  deleteButton.type = 'button';

  div.appendChild(button);
  div.appendChild(countryFlag);
  div.appendChild(insertCountriesTemplate());
  div.appendChild(deleteButton);

  button.addEventListener('click', function(e) {
    const countriesTemplate = this.nextElementSibling.nextElementSibling;

    countriesTemplate.classList.add('step__countries--active');
  });

  deleteButton.addEventListener('click', function() {
    this.parentElement.remove();
  });

  choicesContainer.prepend(div);
};

