const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

const newPostModal = document.querySelector("#new-post-modal");
const newPostButton = document.querySelector(".profile__add-button");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

const profileNameElement = document.querySelector(".profile__title");
const profileJobElement = document.querySelector(".profile__subheading");
const formTitle = document.querySelector("#profile-name-input");
const formSubtitle = document.querySelector("#profile-description-input");

formTitle.value = profileNameElement.textContent;
formSubtitle.value = profileJobElement.textContent;

const profileModalElement = document.querySelector("#edit-profile-modal");
const nameInput = profileModalElement.querySelector("#profile-name-input");
const jobInput = profileModalElement.querySelector(
  "#profile-description-input"
);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;

  editProfileModal.classList.remove("modal_is-opened");
}

profileModalElement.addEventListener("submit", handleProfileFormSubmit);

const addCardModalElement = document.querySelector("#new-post-modal");
const imageNameInput = addCardModalElement.querySelector("#card-caption-input");
const imageLinkInput = addCardModalElement.querySelector("#image-name-input");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(imageNameInput.value);
  console.log(imageLinkInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

addCardModalElement.addEventListener("submit", handleAddCardSubmit);
