const http = require('http');
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const adress = server.adress();
    constbind = typeof adress === 'string' ? 'pipe' + adress : 'port' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use.');
            process.exit(1);
            break;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('Listening', () => {
    const addres = server.address();
    const bind = typeof adress === 'string' ? 'pipe' + addres : 'port' + port;
    console.log('listening on' + bind);
})
server.listen(port);