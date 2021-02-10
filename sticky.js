const server = require('http').createServer(require('./app'));
const PORT = process.env.PORT | 3000;

server.listen(PORT);
server.on('error', function (error) {
    console.log(error);
});
server.on('listening', function (data) {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe' + addr : addr.port;
    console.log('listening on ' + bind);
});