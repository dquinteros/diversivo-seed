const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const env = ['test', 'production', 'development', 'staging'].indexOf(process.env.NODE_ENV) === -1;

module.exports = {
  myURL: process.env.MY_URL,
  env: env ? 'development' : process.env.NODE_ENV,
  port: process.env.APP_PORT || 8888,
};
