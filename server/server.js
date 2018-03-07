import PongServer from './components/server/PongServer.js';

let server = new PongServer();
server.dirname = __dirname + '/../public';

server.start();