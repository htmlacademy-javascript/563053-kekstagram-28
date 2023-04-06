import {isEscKey} from './utils.js';

const body = document.querySelector('body');
const successModalTemplate = document.querySelector('#success').content.querySelector('.success');


const successModal = successModalTemplate.cloneNode(true);
const successButton = successModal.querySelector('.success__button');


const onDocumentKeydown = (evt) => {
  if (isEscKey(evt)) {
    successModal.remove();
  }
};

const onClickDocument = () => {
  successModal.remove();
  body.removeEventListener('keydown', onDocumentKeydown);
};

successButton.addEventListener('click', onClickDocument);
body.addEventListener('keydown', onDocumentKeydown);
body.addEventListener('click', (evt) => {
  if (evt.target !== successModal) {
    console.log(evt.target);
    successModal.remove();
  }
});

const showModal = body.append(successModal);


export {showModal};
