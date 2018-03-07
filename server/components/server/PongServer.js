import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'

export default class {
    constructor() {
        this._app = null;
        this.dirname = '';
    }

    start() {
        this._app = express();
        this._app.use(express.static(this.dirname));
        this._app.use(bodyParser.urlencoded({ extended: false }));
        this._app.use(bodyParser.json());

        this._app.get('/test', (req, res) => {
            console.log('hello there');
            res.send('hello there');
        });

        this._app.post('/test', (req, res) => {
            if(parseInt(req.body.pos) < parseInt(req.body.min)) {
                res.send({ pos: req.body.min });
            } else if (parseInt(req.body.pos) > parseInt(req.body.max)) {
                res.send({ pos: req.body.max });
            } else {
                res.send({ pos: req.body.pos });
            }
        });
        
        var server = this._app.listen(80, function() {
            var port = server.address().port;
            console.log('Magic happens on port ' + port);
        });
    }
}