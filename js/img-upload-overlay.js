import { isEscEvent } from './util.js';
import { resetEditor, toScaleSmaller, toScaleBigger, effectsToggle } from './img-upload-edit.js';

const uploadInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadOverlay.querySelector('#upload-cancel');
const body = document.querySelector('body');
const scaleControlSmaller = uploadOverlay.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadOverlay.querySelector('.scale__control--bigger');
const effectsList = uploadOverlay.querySelector('.effects__list');
const effectLevel = uploadOverlay.querySelector('.effect-level');
const hashtagsInput = uploadOverlay.querySelector('.text__hashtags');
const descriptionInput = uploadOverlay.querySelector('.text__description');

// открытие, закрытие окна редактирования изображения

uploadInput.addEventListener('change', () => {
  resetEditor();
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  cancelUploadOverlay();
  scaleControlSmaller.addEventListener('click', toScaleSmaller);
  scaleControlBigger.addEventListener('click', toScaleBigger);
  effectLevel.style.visibility = 'hidden';
  effectsList.addEventListener('click', effectsToggle);
});

const cancelUploadOverlay = () => {
  uploadCancelButton.addEventListener('click', () => {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadInput.value = '';
    scaleControlSmaller.removeEventListener('click', toScaleSmaller);
    scaleControlBigger.removeEventListener('click', toScaleBigger);
    effectsList.removeEventListener('click', effectsToggle);
    uploadCancelButton.removeEventListener('click');
  });

  document.addEventListener('keydown', (evt) => {
    if ((isEscEvent(evt)) && !(hashtagsInput == document.activeElement || descriptionInput == document.activeElement)) {
      evt.preventDefault();
      uploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
      uploadInput.value = '';
      scaleControlSmaller.removeEventListener('click', toScaleSmaller);
      scaleControlBigger.removeEventListener('click', toScaleBigger);
      effectsList.removeEventListener('click', effectsToggle);
      document.removeEventListener('keydown');
    }
  })
};
