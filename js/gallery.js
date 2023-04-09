import {createMiniatures} from './renderPhotos.js';
import {showBigPicture} from './big-picture.js';

const container = document.querySelector('.pictures');
const onContainerClick = (evt, pictures) => {
  const miniature = evt.target.closest('[data-miniature-id]');

  if (miniature) {
    const picture = pictures.find(
      (item) => item.id === Number(miniature.dataset.miniatureId)
    );
    return showBigPicture(picture);
  }
};

const renderGallery = (pictures) => {
  container.addEventListener('click', onContainerClick);
  createMiniatures(pictures);
};

export {renderGallery};

