const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const closeBtnList = document.querySelectorAll('.popup__btn-close');
const formEditProfile = document.querySelector('.form_type_edit-profile');
const formAddPlace = document.querySelector('.form_type_add-place');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let inputName = document.querySelector('.popup__input_name_profile-name');
let inputStatus = document.querySelector('.popup__input_name_profile-status');
const inputNamePlace = document.querySelector('.popup__input_name_name-place');
const inputSrcPlace = document.querySelector('.popup__input_name_src-picture');
const photoGridItems = document.querySelector('.photo-grid__items');
const likeBtnList = document.querySelectorAll('.photo-grid__like-btn_active');
const photoGridItemTemplate = document.querySelector('#photo-grid__item');

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

function closePopup(el) {
  let popup = el.closest('.popup');
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
}

function saveEditProfile() {
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
}

function toggleLike (el) {
  el.classList.toggle('photo-grid__like-btn_active');
  let currentCard = GetCardOfGridItem(el);
    if (el.classList.contains('photo-grid__like-btn_active')) {
      currentCard.like = true;
    } else {
      currentCard.like = false;
    }

}

function addItemInPhotoGrid (name = "", link = "", like = false) {
  cardList.unshift({
    name,
    link,
    like
  });
  renderPhotoGrid();
}

function deleteItemInPhotoGrid (card) {
  cardList = cardList.filter( el=> el !== card);
}

function renderPhotoGrid() {
  photoGridItems.innerHTML = "";
  cardList.forEach( function(item) {
    createPhotoGridItem(item);
  });
}

function createPhotoGridItem(el) {
  const userEl = photoGridItemTemplate.content.querySelector('.photo-grid__item').cloneNode(true);
  userEl.querySelector('.photo-grid__image').src = (el.link);
  userEl.querySelector('.photo-grid__image').alt = (el.name);
  userEl.querySelector('.photo-grid__name').textContent = (el.name);
  if (el.like) {
    userEl.querySelector('.photo-grid__like-btn').classList.add('photo-grid__like-btn_active');
  }
  photoGridItems.append(userEl);
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

formAddPlace.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addItemInPhotoGrid(inputNamePlace.value, inputSrcPlace.value);
  closePopup(evt.target);
});

Array.from(closeBtnList).forEach(function(item) {
  item.addEventListener('click', function (evt) {
    closePopup(evt.target);
  });
});

photoGridItems.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('photo-grid__like-btn')) {
    toggleLike(evt.target);
  }
  else if (evt.target.classList.contains('photo-grid__delete-btn')) {
    const currentCard = GetCardOfGridItem(evt.target);
    deleteItemInPhotoGrid(currentCard);
    renderPhotoGrid() 
  }
})

function GetCardOfGridItem(gridItemEL) {
  const photoGridItemList = Array.from(document.querySelectorAll('.photo-grid__item'));
  let currentGridItem = gridItemEL.closest('.photo-grid__item');
  let ind = photoGridItemList.indexOf(currentGridItem);
  return cardList[ind]
}

renderPhotoGrid();

/* popUp.addEventListener('click', function(evt) {
  if (evt.target === evt.currentTarget) {
    closePopUp();
  }
}) */
