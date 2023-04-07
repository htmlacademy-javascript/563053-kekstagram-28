const ACADEMY_URL = 'https://28.javascript.pages.academy/kekstagram';

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const Route = {
  GET: '/data',
  POST: '/'
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные с сервера. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить данные на сервер. Попробуйте еще раз'
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${ACADEMY_URL}${route}`, {method, body})
    .then((responce) => {
      if (!responce.ok) {
        throw new Error();
      }
      return responce.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET, ErrorText.GET_DATA);

const sendData = (body) =>
  load(Route.POST, ErrorText.SEND_DATA, Method.POST, body);

export {getData, sendData};
