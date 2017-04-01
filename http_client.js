/*
## HTTP CLIENT (Exercise 7 of 13)

Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Write the String contents of each
"data" event from the response to a new line on the console (stdout).
*/

var http = require('http');

let url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');

  response.on('data', data => {
    console.log(data);
  });
  response.on('error', err => {
    console.log(err);
  });
}).on('error', err => {
  console.log(err);
});
