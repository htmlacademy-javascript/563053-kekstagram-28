const PHOTO_DESCRIPTIONS = [
  'Лось',
  'Конь',
  'Сова',
  'Дельфин',
  'Кот'
];

const COMMENT_NAMES = [
  'Семён',
  'Алексей',
  'Марк',
  'Андрей',
  'Сергей'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NUMBER_OF_PHOTOS = 25;
const NUMBER_OF_COMMENTS = 10;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhotoComments = () => ({
  id: createRandomIdFromRangeGenerator(1, 100)(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(COMMENT_NAMES)
});

const createPhotoDescription = () => ({
  id: createRandomIdFromRangeGenerator(1, 25)(),
  url: `photos/${createRandomIdFromRangeGenerator(1, 25)()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: NUMBER_OF_COMMENTS}, createPhotoComments)
});

const photoDescriptionArray = Array.from({length: NUMBER_OF_PHOTOS}, createPhotoDescription);
photoDescriptionArray();
