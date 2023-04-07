import {renderGallery} from './gallery.js';
import {setOnFormSubmit, closeForm} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './utils.js';
import {errorModal, showModal, successModal} from './modals.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeForm();
    showModal(successModal);
  } catch {
    showModal(errorModal);
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}


