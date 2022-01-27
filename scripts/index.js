const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const closeBtnList = document.querySelectorAll('.popup__btn-close');
const formEditProfile = document.querySelector('.form_type_edit-profile');
const formAddPlace = document.querySelector('.form_type_add-place');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let inputName = document.querySelector('.popup__input_name_profile-name');
let inputStatus = document.querySelector('.popup__input_name_profile-status');
const photoGridItems = document.querySelector('.photo-grid__items');
const likeBtnList = document.querySelectorAll('.photo-grid__like-btn_active');

function closePopup (el) {
  let popup = el.closest('.popup');
  popup.classList.remove('popup_opened');
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
}

function saveEditProfile () {
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
}

formEditProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  saveEditProfile();
  closePopup(evt.target);
});

profileEditBtn.addEventListener('click', function () {
  const popup = document.querySelector('.popup_type_edit-profile');
  openPopup (popup);
});

profileAddBtn.addEventListener('click', function () {
  const popup = document.querySelector('.popup_type_add-place');
  openPopup (popup);
});

Array.from(closeBtnList).forEach(function(item) {
  item.addEventListener('click', function (evt) {
    closePopup(evt.target);
  });
});




/*function addLike () {
  likeBtn.classList.add('photo-grid__like-btn_active');
}

function deleteLike () {
  likeBtn.classList.remove('photo-grid__like-btn_active');
}*/

photoGridItems.addEventListener('click', function(evt) {
  const btnLike = Array.from(likeBtnList).filter
  likeBtn.classList.toggle('photo-grid__like-btn_active');
})
/* popUp.addEventListener('click', function(evt) {
  if (evt.target === evt.currentTarget) {
    closePopUp();
  }
}) */
