const pictureArea = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createMiniature = ({ description, url, likes, comments}) => {
  const miniature = pictureTemplate.cloneNode(true);
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.querySelector('.picture__likes').textContent = likes;
  return miniature;
};

const createMiniatures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniature = createMiniature(picture);
    pictureFragment.append(miniature);
  });

  pictureArea.append(pictureFragment);
};

export { createMiniatures };
