/*
## MY FIRST ASYNC I/O! (Exercise 4 of 13)

Write a program that uses a single asynchronous filesystem operation to
read a file and print the number of newlines it contains to the console
(stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument.
*/

var fs = require('fs');

let filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;

  let lines = data.split('\n');
  let numlines = lines.length - 1;

  console.log(numlines);
});
