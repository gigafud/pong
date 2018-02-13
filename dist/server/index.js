'use strict';

var _PongServer = require('./PongServer');

var _PongServer2 = _interopRequireDefault(_PongServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _PongServer2.default();

server.start();