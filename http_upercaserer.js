/*
## HTTP UPPERCASERER (Exercise 12 of 13)

Write an HTTP server that receives only POST requests and converts
incoming POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to
your program.
*/

var http = require('http');

function uppercaseServer(port, filepath) {
  var server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
      req.on('data', data => res.write(data.toString().toUpperCase()));
      req.on('end', () => res.end());
    } else {
      res.end();
    }
  })
  server.listen(port);
}

uppercaseServer(process.argv[2]);
