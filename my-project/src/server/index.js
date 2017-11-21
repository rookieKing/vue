import Server from './Server';
import Api1 from './Api1';
import Api2 from './Api2';

_.extend.apply(null, _.map([
  Server,
  Api1,
  Api2,
], item => item.prototype));

export default new Server();
