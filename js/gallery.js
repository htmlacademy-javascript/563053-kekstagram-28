import {createMiniatures} from './renderPhotos.js';
import {showBigPicture} from './big-picture.js';

let newPictures = [];

const container = document.querySelector('.pictures');
const onContainerClick = (evt) => {
  const miniature = evt.target.closest('[data-miniature-id]');

  if (miniature) {
    const picture = newPictures.find(
      (item) => item.id === Number(miniature.dataset.miniatureId)
    );
    return showBigPicture(picture);
  }
};

const renderGallery = (pictures) => {
  newPictures = pictures;
  container.addEventListener('click', onContainerClick);
  createMiniatures(pictures);
};

export {renderGallery};

