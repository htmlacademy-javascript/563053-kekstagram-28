import { createMiniatures } from './renderPhotos.js';
import {showBigPicture} from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const miniature = evt.target.closest('[data-miniature-id]');

    if (miniature) {
      const picture = pictures.find(
        (item) => item.id === Number(miniature.dataset.miniatureId)
      );
      return showBigPicture(picture);
    }
  });
  createMiniatures(pictures);
};

export {renderGallery};

