// валидация формы отправки изображения

const HASHTAG_MAX_LENGTH = 20;
const MAX_HASHTAGS_AMOUNT = 5;
const VALID_CHAR = new RegExp('[^a-zа-яё0-9#]');

const hashtagsInput = document.querySelector('.text__hashtags');

hashtagsInput.addEventListener('input', () => {
  hashtagsInput.setCustomValidity('');
  const hashtagsArray = hashtagsInput.value.toLowerCase().trim().split(/\s+/);

  if (hashtagsArray.length > MAX_HASHTAGS_AMOUNT) {
    hashtagsInput.setCustomValidity('Нельзя указать больше 5 хэш-тегов');
  }

  hashtagsArray.forEach(element => {
    if (element[0] !== '#') {
      hashtagsInput.setCustomValidity('Хэш-тег начинается с символа # (решётка)');
    } else if (VALID_CHAR.test(element)) {
      hashtagsInput.setCustomValidity('Недопустимый символ');
    } else if (element == '#') {
      hashtagsInput.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
    } else if (element.length > HASHTAG_MAX_LENGTH) {
      hashtagsInput.setCustomValidity('Максимальная длина одного хэш-тега 20 символов');
    } else if (element.indexOf('#', 1) >= 1) {
      hashtagsInput.setCustomValidity('Хэш-теги разделяются пробелами');
    } else if (hashtagsArray.length > new Set(hashtagsArray).size) {
      hashtagsInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды')
    }
  });

  hashtagsInput.reportValidity();     //проверка валидности поля на каждый ввод символа
});
