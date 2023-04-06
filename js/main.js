import {renderGallery} from './gallery.js';
import {checkform} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './utils.js';
import {showModal} from './modals.js';
checkform();

/*setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeForm();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});*/

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}

showModal;
