const http = require('http');

const server = http.createServer((req, res) => {
  console.log('The user hit the server');
});

server.listen(8000);
