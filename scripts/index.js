const editProfileBtn = document.querySelector('.profile__edit-btn');
const addPhotoGridItemBtn = document.querySelector('.profile__add-btn');
const closePopupBtnList = document.querySelectorAll('.popup__btn-close');
const editProfileForm = document.querySelector('.form_type_edit-profile');
const addPhotoForm = document.querySelector('.form_type_add-place');
const profileNameHTMLElement = document.querySelector('.profile__name');
const profileStatusHTMLElement = document.querySelector('.profile__status');
const profileNameFormInput = document.querySelector('.popup__input_name_profile-name');
const profileStatusFormInput = document.querySelector('.popup__input_name_profile-status');
const namePlaceFormInput = document.querySelector('.popup__input_name_name-place');
const srcPlaceFormInput = document.querySelector('.popup__input_name_src-picture');
const photoGridItems = document.querySelector('.photo-grid__items');
const likeBtnList = document.querySelectorAll('.photo-grid__like-btn_active');
const photoGridItemTemplate = document.querySelector('#photo-grid__item');
const imagePopup = document.querySelector('.popup__img');
const imageAltPopup = document.querySelector('.popup__img-alt');

let cardList = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    like: false
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    like: false
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    like: false
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    like: false
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    like: false
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    like: false
  }
];

//cardList

function getCard(el) {
  const gridItem = GetGridItem(el);
  return getGridItemCard(gridItem);
}

function getGridItemCard(gridItemEL) {
  const photoGridItemList = Array.from(document.querySelectorAll('.photo-grid__item'))
  const ind = photoGridItemList.indexOf(gridItemEL);
  return cardList[ind];
}

function addCard(name = "", link = "", like = false) {
  cardList.unshift({
    name,
    link,
    like
  });
}

function deleteCard(card) {
  cardList = cardList.filter(el => el !== card);
}

function updateLikeInCard(el) {
  const currentCard = getCard(el);
  const isActiveLike = el.classList.contains('photo-grid__like-btn_active');
  currentCard.like = isActiveLike;

}

//popup

function closePopup(el) {
  const popup = el.closest('.popup');
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

Array.from(closePopupBtnList).forEach(function (item) {
  item.addEventListener('click', function (evt) {
    closePopup(evt.target);
  });
});

//popup img

function fillPopupImage(image) {
  imagePopup.setAttribute('src', image.ink);
  imageAltPopup.textContent = image.name;
}

//popup place

function fillPopupPlace(name = '', src = '') {
  namePlaceFormInput.value = name;
  srcPlaceFormInput.value = src;
}

//popup profile

function fillPopupProfile() {
  profileNameFormInput.value = profileNameHTMLElement.textContent;
  profileStatusFormInput.value = profileStatusHTMLElement.textContent;
}

//profile

function saveProfile() {
  profileNameHTMLElement.textContent = profileNameFormInput.value;
  profileStatusHTMLElement.textContent = profileStatusFormInput.value;
}

editProfileBtn.addEventListener('click', function () {
  const popup = document.querySelector('.popup_type_edit-profile');
  fillPopupProfile();
  openPopup(popup);
});

editProfileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  saveProfile();
  closePopup(evt.target);
});  

//photogrid

function GetGridItem(el) {
  return el.closest('.photo-grid__item');
}

function renderPhotoGridList() {
  photoGridItems.innerHTML = "";
  cardList.forEach(function (item) {
    renderPhotoGridItem(item);
  });
}

function renderPhotoGridItem(el) {
  const userEl = photoGridItemTemplate.content.querySelector('.photo-grid__item').cloneNode(true);
  userEl.querySelector('.photo-grid__image').src = (el.link);
  userEl.querySelector('.photo-grid__image').alt = (el.name);
  userEl.querySelector('.photo-grid__name').textContent = (el.name);
  if (el.like) {
    userEl.querySelector('.photo-grid__like-btn').classList.add('photo-grid__like-btn_active');
  }
  photoGridItems.append(userEl);
}

function toggleLike(likeEl) {
  likeEl.classList.toggle('photo-grid__like-btn_active');
}

photoGridItems.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('photo-grid__like-btn')) {
    toggleLike(evt.target);
    updateLikeInCard(evt.target);
  }
  else if (evt.target.classList.contains('photo-grid__delete-btn')) {
    const currentCard = getCard(evt.target);
    deleteCard(currentCard);
    renderPhotoGridList();
  }
  else if (evt.target.classList.contains('photo-grid__image')) {
    const card = getCard(evt.target)
    fillPopupImage(card)
    const popup = document.querySelector('.popup_type_open-img');
    openPopup(popup);
  }
})

addPhotoGridItemBtn.addEventListener('click', function () {
  const popup = document.querySelector('.popup_type_add-place');
  fillPopupPlace();
  openPopup(popup);
});

addPhotoForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard(namePlaceFormInput.value, srcPlaceFormInput.value);
  renderPhotoGridList();
  closePopup(evt.target);
});

renderPhotoGridList();


/* popUp.addEventListener('click', function(evt) {
  if (evt.target === evt.currentTarget) {
    closePopUp();
  }
}) */
