const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleLowButton = document.querySelector('.scale__control--smaller');
const inputScale = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');
const scaleContainer = document.querySelector('.img-upload__scale');


const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  inputScale.value = `${value}%`;
};

const onPressScaleButtons = (evt) => {
  const targetButton = evt.target === scaleLowButton;
  const currentValue = parseInt(inputScale.value, 10);
  let newValue = targetButton ? currentValue - SCALE_STEP : currentValue + SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleContainer.addEventListener('click', onPressScaleButtons);

export{resetScale};
