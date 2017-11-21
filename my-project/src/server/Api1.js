import Server from './Server';

function Api() { }
Api.prototype = {
  api1: {
    search: data => Server.post('/server/api1/search', data),
  },
}

export default Api;
