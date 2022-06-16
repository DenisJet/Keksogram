import { isEscEvent } from './util.js';

// Сообщения об отправке

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const body = document.querySelector('body');

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    removeSuccessMessage();
  }
}

const removeSuccessMessage = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
}

const successMessageShow = () => {
  let successMessage = successMessageTemplate.cloneNode(true);

  const successButton = successMessage.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    removeSuccessMessage();
  });

  document.addEventListener('click', (evt) =>  {
    if (!document.querySelector('.success__inner').contains(evt.target)) {
      removeSuccessMessage();
    }
  })

  document.addEventListener('keydown', onSuccessMessageEscKeydown);

  body.appendChild(successMessage);
}

const onErorrMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    removeErrorMessage();
  }
}

const removeErrorMessage = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErorrMessageEscKeydown);
}

const errorMessageShow = () => {
  let errorMessage = errorMessageTemplate.cloneNode(true);

  const errorButton = errorMessage.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    removeErrorMessage();
  });

  document.addEventListener('click', (evt) =>  {
    if (!document.querySelector('.error__inner').contains(evt.target)) {
      removeErrorMessage();
    }
  })

  document.addEventListener('keydown', onErorrMessageEscKeydown);

  body.appendChild(errorMessage);
}

export {successMessageShow, errorMessageShow};
