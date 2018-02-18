var path = require('path');

var serverConfig = {
  target: 'node',
  entry: './app/server/server.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  }
};

var clientConfig = {
  target: 'web',
  entry: './app/client/client.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  }
};

module.exports = [ serverConfig, clientConfig ];