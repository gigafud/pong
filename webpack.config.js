var path = require('path');

var clientConfig = {
  target: 'web',
  entry: [
    'jquery',
    './client/client.js',
  ], 
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js'
  }
};

module.exports = [ clientConfig ];