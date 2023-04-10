import {resetEffects} from './effects.js';
import {resetScale} from './scale.js';
import {fillPhotoBlock} from './uploadedPhoto.js';
import {onPressEsc} from './utils.js';

const TAG_ERROR_TEXT = 'Неправильно указаны хэштеги';
const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploader = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const closeButtonOverlay = document.querySelector('#upload-cancel');
const inputHashtag = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const showForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButtonOverlay.addEventListener('click', onCloseButtonClick);
  body.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  body.removeEventListener('keydown', onDocumentKeydown);
  uploader.value = '';
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
};

const isTextFieldFocused = () =>
  document.activeElement === inputHashtag ||
  document.activeElement === commentsField;

function onCloseButtonClick() {
  closeForm();
}

const onChangeUploader = () => {
  fillPhotoBlock();
  showForm();
};

function onDocumentKeydown (evt) {
  if (!isTextFieldFocused()) {
    onPressEsc(evt, onCloseButtonClick);
  }
}

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};


pristine.addValidator(
  inputHashtag,
  validateTags,
  TAG_ERROR_TEXT);

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};

uploader.addEventListener('change', onChangeUploader);

export{setOnFormSubmit, closeForm};
