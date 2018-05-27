const http = require('http'); 
const fs = require('fs');

const server = http.createServer((request, response) => { 
  if (request.method === 'GET') { 
    if (request.url === '/') { 
      response.writeHead(200, {'Content-Type': 'text/html'}); 
      return response.end(fs.readFileSync(__dirname + '/../client/index.html')); 
    }//end if 
  }//end if 

  response.statusCode = 404;
  response.end('Cant find what you are looking for.');

}).listen(3000); 

module.exports = server; 