const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageId = `${inputElement.id}-error`;
  const errorElement = formElement.querySelector(`#${errorMessageId}`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add("modal__input_type_error");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = "";
  inputElement.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    buttonElement.classList.remove("modal__submit-button_disabled");
    buttonElement.removeAttribute("disabled");
  }
};

const disableButton = (buttonElement) => {
  buttonElement.classList.add("modal__submit-button_disabled");
  buttonElement.setAttribute("disabled", true);
};

const resetValidation = (formElement, inputList) => {
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  });
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submit-button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  console.log(formList);
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();
