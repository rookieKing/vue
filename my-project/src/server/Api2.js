import Server from './Server';

function Api() { }
Api.prototype = {
  api2: {
    search2: data => Server.post('/server/api2/search', data),
  },
}

export default Api;
