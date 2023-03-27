import {isEscKey} from './utils.js';

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
const commentList = document.querySelector('.social__comments');
const bigPictureArea = document.querySelector('.big-picture');

const onDocumentKeydown = (evt) => {
  if (isEscKey(evt)) {
    closePhoto();
  }
};

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="#" alt="" width="35" height="35"> <p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const fillPhotoInfo = (data) => {
  bigPictureArea.querySelector('.big-picture__img img').src = data.url;
  bigPictureArea.querySelector('.likes-count').textContent = data.likes;
  commentCount.querySelector('.comments-count').textContent = data.comments.length;
};

const fillCommentList = (comments) => {
  commentsShown += COMMENTS_PER_PORTION;

  if(commentsShown >= comments.length) {
    commentLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

function closePhoto () {
  bigPictureArea.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsShown = 0;

  document.removeEventListener('keydown', onDocumentKeydown);
}


const showBigPicture = (picture) => {
  bigPictureArea.classList.remove('hidden');
  fillPhotoInfo(picture);
  fillCommentList(picture.comments);
  body.classList.add('modal-open');
  photoCloseButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', onDocumentKeydown);
  commentLoader.addEventListener('click', () => {
    fillCommentList(picture.comments);
  });
};

export {showBigPicture};

