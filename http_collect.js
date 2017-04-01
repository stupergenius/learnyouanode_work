/*
## HTTP COLLECT (Exercise 8 of 13)

Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Collect all data from the server (not
just the first "data" event) and then write two lines to the console
(stdout).

The first line you write should just be an integer representing the number
of characters received from the server. The second line should contain the
complete String of characters sent by the server.
*/

var http = require('http');

let url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');

  var rawData = '';
  response.on('data', data => rawData += data);
  response.on('end', () => {
    console.log(rawData.length);
    console.log(rawData);
  });

  response.on('error', err => {
    console.log(err);
  });
}).on('error', err => {
  console.log(err);
});
