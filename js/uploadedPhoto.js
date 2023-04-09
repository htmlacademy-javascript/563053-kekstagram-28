const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload input[type=file]');
const photoBlock = document.querySelector('.img-upload__preview img');


const fillPhotoBlock = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photoBlock.src = URL.createObjectURL(file);
  }
};

export {fillPhotoBlock};
