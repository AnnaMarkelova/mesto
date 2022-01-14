let fullNameProfile = 'Жак-Ив Кусто';
let statusProfile = 'Исследователь океана';
let editBtn = document.querySelector('.profile__edit-btn');
let closeBtn = document.querySelector('.popup__btn-close');
let formPopUp = document.querySelector('.popup__container');

function fillProfile (nameValue, statusValue) {
  let profileName = document.querySelector('.profile__name');
  let profileStatus = document.querySelector('.profile__status');
  profileName.textContent = nameValue;
  profileStatus.textContent = statusValue;
}

function fillPopUp (nameValue, statusValue) {
  let inputName = document.querySelector('.popup__input_name');
  let inputStatus = document.querySelector('.popup__input_status');
  inputName.value = nameValue;
  inputStatus.value = statusValue;
}

function closePopUp () {
  let popUP = document.querySelector('.popup');
  if (popUP.classList.contains('popup_opened')) {
    popUP.classList.remove('popup_opened');
  }
}

fillProfile(fullNameProfile, statusProfile);

formPopUp.addEventListener('submit', function (evt) {
  evt.preventDefault();
  let inputName = document.querySelector('.popup__input_name');
  let inputStatus = document.querySelector('.popup__input_status');
  fullNameProfile = inputName.value;
  statusProfile = inputStatus.value;
  fillProfile (fullNameProfile, statusProfile);
  closePopUp();
});

editBtn.addEventListener('click', function () {
  let popUP = document.querySelector('.popup');
  if (!popUP.classList.contains('popup_opened')) {
    popUP.classList.add('popup_opened');
    fillPopUp(fullNameProfile, statusProfile);
  }
});

closeBtn.addEventListener('click', function () {
  closePopUp();
});