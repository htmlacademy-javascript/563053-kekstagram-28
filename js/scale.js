const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const toSmallButton = document.querySelector('.scale__control--smaller');
const toBigButton = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');


const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  inputScale.value = `${value}%`;
};

const onSmallButtonClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBigButtonClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

toSmallButton.addEventListener('click', onSmallButtonClick);
toBigButton.addEventListener('click', onBigButtonClick);

export{resetScale};
