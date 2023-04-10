import {init} from './filter.js';
import {renderGallery} from './gallery.js';
import {getData, sendData} from './api.js';
import {showAlert, debounce} from './utils.js';
import {setOnFormSubmit, closeForm} from './form.js';
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
  const debouncedRenderGallery = debounce(renderGallery);
  init(data, debouncedRenderGallery);
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
