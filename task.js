const http = require('http');
const routes = require('./routes');//(cannot edit it from outside, can only read it.)
const server = http.createServer(routes);
/*if routes is an object so we can export routes.handler */
server.listen(4000);