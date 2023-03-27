import { isEscKey } from './utils';

const body = document.querySelector('body');
const bigPictureArea = document.querySelector('.big-picture');
const commentLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const photoCloseButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscKey(evt)) {
    closePhoto();
  }
};

function closePhoto () {
  bigPictureArea.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}


const showBigPicture = (picture) => {

  bigPictureArea.classList.remove('hidden');
  bigPictureArea.querySelector('.big-picture__img img').src = picture.url;
  body.classList.add('modal-open');
  commentLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  photoCloseButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', onDocumentKeydown);

};

export {showBigPicture};

