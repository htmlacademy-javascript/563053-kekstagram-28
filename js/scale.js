const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleLowButton = document.querySelector('.scale__control--smaller');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');
const scaleContainer = document.querySelector('.img-upload__scale');


const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  inputScale.value = `${value}%`;
};

const onPressScaleButtons = (evt) => {
  const currentValue = parseInt(inputScale.value, 10);
  if (evt.target === scaleLowButton) {
    let newValue = currentValue - SCALE_STEP;
    if (newValue < MIN_SCALE) {
      newValue = MIN_SCALE;
    }
    scaleImage(newValue);
  } else if (evt.target === scaleUpButton) {
    let newValue = currentValue + SCALE_STEP;
    if (newValue > MAX_SCALE) {
      newValue = MAX_SCALE;
    }
    scaleImage(newValue);
  }
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleContainer.addEventListener('click', onPressScaleButtons);

export{resetScale};
