export default class Server {
  static post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(Server.parseJSON).catch(Server.errHandle);
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
    }).then(Server.parseJSON).catch(Server.errHandle);
  }
  static async parseJSON(res) {
    return { data: await res.json() };
  }
  static errHandle(err) {
    return { err };
  }
}
