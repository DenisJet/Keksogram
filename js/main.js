// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNumber = (firstNumber, lastNumber) => {
  if (firstNumber < 0 || lastNumber < 0 || firstNumber >= lastNumber) {
    return -1;
  }

  return (
    Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber
  );
};

getRandomNumber();

//Функция для проверки максимальной длинны строки

const isStringMaxLength = (string, maxLength) => {
  return string.length <= maxLength;
};

isStringMaxLength('проверка', 140);

// Функция для выбора случайного элемента массива

const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

// Создание массива данных (фотографий)

const PHOTO_COUNT = 25;
const MAX_USERS_COUNT = 999;

const AvatarNumber = {
  min: 1,
  max: 6,
}

const Likes = {
  min: 15,
  max: 200,
};

const Comments = {
  min: 1,
  max: 5,
};

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const NAMES = [
  'Алексей',
  'Денис',
  'Елена',
  'Самуил',
  'Сергей',
  'Виктория',
]

const photos = [];

const createComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomNumber(Comments.min, Comments.max); i++) {
    comments.push ({
      id: getRandomNumber(1, MAX_USERS_COUNT),
      avatar: 'img/avatar' + getRandomNumber(AvatarNumber.min, AvatarNumber.max) + '.svg',
      message: getRandomArrayElement(messages),
      name: getRandomArrayElement(NAMES),
    });
  }

  return comments;
}

const createPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++){
    photos.push({
      id: i + 1,
      url: 'photos/' + (i + 1) + '.jpg',
      description:'Мой лучший снимок',
      likes: getRandomNumber(Likes.min, Likes.max),
      comments: createComments(),
    });
  }
};

createPhotos()
