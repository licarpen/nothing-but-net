const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.method === 'GET' && request.path === '/'){
      const response = createResponse({ body: 'Hi', status: '200 ok', contentType: 'text/plain' });
      socket.end(response);
    }
    else if(request.method === 'POST' && request.path === '/echo'){
      const response = createResponse({ body: request.body, status: '200 ok', contentType: 'text/plain' });
      socket.end(response);
    }
    else if(request.method === 'GET' && request.path === '/red'){
      const response = createResponse({ body: '<h1>RED</h1>', status: '200 ok', contentType: 'text/html' });
      socket.end(response);
    }
    else if(request.method === 'GET' && request.path === '/green'){
      const response = createResponse({ body: '<h1>GREEN</h1>', status: '200 ok', contentType: 'text/html' });
      socket.end(response);
    }
    else if(request.method === 'GET' && request.path === '/periwinkle'){
      const response = createResponse({ body: '<h1>PERIWINKLE</h1>', status: '200 ok', contentType: 'text/html' });
      socket.end(response);
    }
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
    
  });
});

module.exports = app;
