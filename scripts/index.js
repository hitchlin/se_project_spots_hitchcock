const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileButton = document.querySelector(".profile__edit-button");
const editProtileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-opened");
});

editProtileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

const newPostModal = document.querySelector("#new-post-modal");
const newPostButton = document.querySelector(".modal-submit-button");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");
});
