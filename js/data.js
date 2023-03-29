import {getRandomInteger, getRandomArrayElement, createRandomId} from './utils.js';

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
const NUMBER_OF_COMMENTS = 17;

const photoCommentsID = createRandomId(1, 100);
const photoDescriptionID = createRandomId(1, 25);
const urlID = createRandomId(1, 25);

const createPhotoComments = () => ({
  id: photoCommentsID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(COMMENT_NAMES)
});

const createPhotoDescription = () => ({
  id: photoDescriptionID(),
  url: `photos/${urlID()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: NUMBER_OF_COMMENTS}, createPhotoComments)
});

const getPhotoDescriptionArray = () => Array.from({length: NUMBER_OF_PHOTOS}, createPhotoDescription);

export {getPhotoDescriptionArray};
