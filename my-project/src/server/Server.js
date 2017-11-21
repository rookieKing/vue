export default class Server {
  static post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
  static get(url, data) {
    if (data) {
      url += `?` + _.map(data, (v, k) => `${k}=${v === undefined ? '' : v}`).join('&');
    }
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
