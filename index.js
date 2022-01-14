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
  let inputs = document.querySelectorAll('.popup__input');
  inputs[0].value = nameValue.textContent;
  inputs[1].value = statusValue.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  let inputs = document.querySelectorAll('.popup__input');
  let profileName = document.querySelector('.profile__name');
  let profileStatus = document.querySelector('.profile__status');
  fullNameProfile = inputs[0].value;
  statusProfile = inputs[1].value;
  fillProfile (fullNameProfile, statusProfile);
  closePopUp();
}

function closePopUp () {
  let popUP = document.querySelector('.popup');
  if (popUP.classList.contains('popup_opened')) {
    popUP.classList.remove('popup_opened');
  }
}

fillProfile(fullNameProfile, statusProfile);

formPopUp.addEventListener('submit', formSubmitHandler);

editBtn.addEventListener('click', function () {
  let popUP = document.querySelector('.popup');
  let profileName = document.querySelector('.profile__name');
  if (!popUP.classList.contains('popup_opened')) {
    popUP.classList.add('popup_opened');
    let profileName = document.querySelector('.profile__name');
    let profileStatus = document.querySelector('.profile__status');
    fillPopUp(profileName, profileStatus);
    }
})

closeBtn.addEventListener('click', closePopUp)