let editBtn = document.querySelector('.profile__edit-btn');
let closeBtn = document.querySelector('.popup__btn-close');
let formPopUp = document.querySelector('.popup__form');
let popUp = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let inputName = document.querySelector('.popup__input_name_profile-name');
let inputStatus = document.querySelector('.popup__input_name_profile-status');
const photoGridItems = document.querySelector('.photo-grid__items');
const arrayLikeBtn = document.querySelectorAll('.photo-grid__like-btn_active');

function closePopUp () {
  popUp.classList.remove('popup_opened');
}

function openPopUp () {
  popUp.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
}

function savePopUp () {
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closePopUp();
}

formPopUp.addEventListener('submit', function (evt) {
  evt.preventDefault();
  savePopUp();
});

editBtn.addEventListener('click', openPopUp);

closeBtn.addEventListener('click', function () {
  closePopUp();
});

/*function addLike () {
  likeBtn.classList.add('photo-grid__like-btn_active');
}

function deleteLike () {
  likeBtn.classList.remove('photo-grid__like-btn_active');
}*/

photoGridItems.addEventListener('click', function(evt) {
  const btnLike = Array.from(arrayLikeBtn).filter
  likeBtn.classList.toggle('photo-grid__like-btn_active');
})
/* popUp.addEventListener('click', function(evt) {
  if (evt.target === evt.currentTarget) {
    closePopUp();
  }
}) */
