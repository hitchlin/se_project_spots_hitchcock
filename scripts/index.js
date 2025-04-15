// Creating reusable functions for opening and closing modals
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {  
  modal.classList.remove("modal_is-opened");
}
//defining variables for profile Modal
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

//Checking for edit profile and responding
editProfileButton.addEventListener("click", function () {
  openModal(editProfileModal);
});

//checking for close button and responding
editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

//defining variables for new post Modal
const newPostModal = document.querySelector("#new-post-modal");
const newPostButton = document.querySelector(".profile__add-button");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

//Checking for new post button and responding
newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

//checking for close button and responding
newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

//defining variables for editing profile text
const profileNameElement = document.querySelector(".profile__title");
const profileJobElement = document.querySelector(".profile__subheading");
const formTitle = document.querySelector("#profile-name-input");
const formSubtitle = document.querySelector("#profile-description-input");

//changing from the form to the input
formTitle.value = profileNameElement.textContent;
formSubtitle.value = profileJobElement.textContent;

//defining variables for using form on edit profile
const profileModalElement = document.querySelector("#edit-profile-modal");
const nameInput = profileModalElement.querySelector("#profile-name-input");
const jobInput = profileModalElement.querySelector(
  "#profile-description-input"
);

//checking for form submission
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;

  closeModal(editProfileModal);
}

//responding to form submission
profileModalElement.addEventListener("submit", handleProfileFormSubmit);

//definging variables for card modal
const addCardModalElement = document.querySelector("#new-post-modal");
const imageNameInput = addCardModalElement.querySelector("#card-caption-input");
const imageLinkInput = addCardModalElement.querySelector("#image-name-input");

//checking for form submission
function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(imageNameInput.value);
  console.log(imageLinkInput.value);

  closeModal(newPostModal);
}

//responding to form submission
addCardModalElement.addEventListener("submit", handleAddCardSubmit);

//defining variables for new card elements
const initalCards = [
  {
    name: "Fern",
    link: "https://unsplash.com/photos/green-fern-plant-in-dark-room-m3r7MJ-08-k",
  },
  {
    name: "Water on Leaf",
    link: "https://unsplash.com/photos/green-leaf-with-water-droplets-B88p-Eftuok",
  },
  {
    name: "Palm",
    link: "https://unsplash.com/photos/green-palm-plant-during-night-time-kDaxao_v_5o",
  },
  {
    name: "Jasmine",
    link: "https://unsplash.com/photos/a-white-flower-with-green-leaves-in-the-background-gMimc1SQ-Mo",
  },
  {
    name: "Tree",
    link: "https://unsplash.com/photos/green-leaf-plant-in-close-up-photography-io6ZEPeZMxc",
  },
  {
    name: "Hosta",
    link: "https://unsplash.com/photos/green-leaves-plant-during-daytime-gPGVsbLCh-0",
  },
];

//Looping through array to log name of each element
initalCards.forEach(function (card) {
  console.log(card.name);
};
