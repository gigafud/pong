'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this._app = null;
    }

    _createClass(_class, [{
        key: 'start',
        value: function start() {
            this._app = (0, _express2.default)();
            this._app.set('port', 8080);

            this._app.use(_express2.default.static(_path2.default.join(__dirname, '../client')));

            // Listen for requests
            var server = this._app.listen(this._app.get('port'), function () {
                var port = server.address().port;
                console.log('Magic happens on port ' + port);
            });
        }
    }]);

    return _class;
}();

exports.default = _class;