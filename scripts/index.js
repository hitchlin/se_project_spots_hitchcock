function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const imageModal = document.querySelector("#card-image-modal");
const imageModalCloseButton = imageModal.querySelector(
  ".modal__close-button_type-preview"
);
const imageModalImage = imageModal.querySelector(".modal__image");
const imageModalCaption = imageModal.querySelector(".modal__image-caption");
const newPostModal = document.querySelector("#new-post-modal");
const newPostButton = document.querySelector(".profile__add-button");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const SubmitButtonElement = newPostModal.querySelector(".modal__submit-button");
const profileNameElement = document.querySelector(".profile__title");
const profileJobElement = document.querySelector(".profile__subheading");
const formTitle = document.querySelector("#profile-name-input");
const formSubtitle = document.querySelector("#profile-description-input");
const profileModalElement = document.querySelector("#edit-profile-modal");
const nameInput = profileModalElement.querySelector("#profile-name-input");
const jobInput = profileModalElement.querySelector(
  "#profile-description-input"
);
const addCardModalElement = document.querySelector("#new-post-modal");
const imageNameInput = addCardModalElement.querySelector("#card-caption-input");
const imageLinkInput = addCardModalElement.querySelector("#image-name-input");
const cardTemplate = document
  .querySelector("#image-card-template")
  .content.querySelector(".card__item");
const cardList = document.querySelector(".card__list");
const initalCards = [
  {
    name: "Fern",
    link: "https://images.unsplash.com/photo-1599591546314-82af3e9e1972?q=80&w=3928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Water on Leaf",
    link: "https://images.unsplash.com/photo-1609583064933-570be5750f41?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Palm",
    link: "https://images.unsplash.com/photo-1600854163097-3602918f7a9a?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jasmine",
    link: "https://images.unsplash.com/photo-1609670441811-9ca2a33cd040?q=80&w=3986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tree",
    link: "https://images.unsplash.com/photo-1620977791495-4f3deba7e1f3?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hosta",
    link: "https://images.unsplash.com/photo-1629268810152-b99c4f0ef937?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

editProfileButton.addEventListener("click", function () {
  resetValidation(profileModalElement, [nameInput, jobInput]);
  disableButton(SubmitButtonElement);
  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

formTitle.value = profileNameElement.textContent;
formSubtitle.value = profileJobElement.textContent;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;

  closeModal(editProfileModal);
}

profileModalElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const cardEl = getCardElement({
    name: imageNameInput.value,
    link: imageLinkInput.value,
  });

  cardList.prepend(cardEl);
  imageNameInput.value = "";
  imageLinkInput.value = "";
  disableButton(SubmitButtonElement);
  closeModal(newPostModal);
}

addCardModalElement.addEventListener("submit", handleAddCardSubmit);

initalCards.forEach(function (card) {
  const cardElement = getCardElement(card);
  cardList.append(cardElement);
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__item-image");
  const cardTitleEl = cardElement.querySelector(".card__item-title");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  const cardLikeButton = cardElement.querySelector(".card__item-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__item-button_active");
  });

  const cardDeleteButton = cardElement.querySelector(
    ".card__item-delete-button"
  );
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    imageModalImage.src = data.link;
    imageModalImage.alt = data.name;
    imageModalCaption.textContent = data.name;
    openModal(imageModal);
  });

  imageModalCloseButton.addEventListener("click", () => {
    closeModal(imageModal);
  });
  return cardElement;
}
