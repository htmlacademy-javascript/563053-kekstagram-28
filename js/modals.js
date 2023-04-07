import {onPressEsc} from './utils.js';

const body = document.querySelector('body');
const errorModalTemplate = document.querySelector('#error').content.querySelector('.error');
const errorModal = errorModalTemplate.cloneNode(true);
const successModalTemplate = document.querySelector('#success').content.querySelector('.success');
const successModal = successModalTemplate.cloneNode(true);
const errorButton = errorModal.querySelector('.error__button');
const successButton = successModal.querySelector('.success__button');


const showModal = (status) => {

  const onDocumentKeydown = (evt) => {
    onPressEsc(evt, closeModal);
  };

  function closeModal () {
    body.classList.remove('modal-open');
    status.remove();
    body.removeEventListener('keydown', onDocumentKeydown);
  }

  const onButtonClick = () => {
    closeModal();
  };

  const onDocumentClick = (evt) => {
    if (evt.target.offsetParent === null || evt.target.offsetParent.tagName === 'BODY') {
      closeModal();
    }
  };

  body.classList.add('modal-open');
  successButton.addEventListener('click', onButtonClick);
  errorButton.addEventListener('click', onButtonClick);
  body.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onDocumentClick);
  body.append(status);
};


export {showModal, errorModal, successModal};
