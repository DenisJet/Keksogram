// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNumber = (firstNumber, lastNumber) => {
  if (firstNumber < 0 || lastNumber < 0 || firstNumber >= lastNumber) {
    return -1;
  }

  return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
}

getRandomNumber();

//Функция для проверки максимальной длинны строки

const isStringMaxLength = (string, maxLength) => {
  return string.length <= maxLength;
}

isStringMaxLength();
