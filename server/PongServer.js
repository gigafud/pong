import express from 'express';
import path from 'path';

export default class {
    constructor() {
        this._app = null;
    }

    start() {
        this._app = express();
        this._app.set('port', 8080);
        
        this._app.use(express.static(path.join(__dirname, '../client')));
        
        // Listen for requests
        var server = this._app.listen(this._app.get('port'), function() {
            var port = server.address().port;
            console.log('Magic happens on port ' + port);
        });
    }
}