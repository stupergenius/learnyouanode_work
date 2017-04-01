/*
## JUGGLING ASYNC (Exercise 9 of 13)

This problem is the same as the previous problem (HTTP COLLECT) in that
you need to use http.get(). However, this time you will be provided with
three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs
and print it to the console (stdout). You don't need to print out the
length, just the data as a String; one line per URL. The catch is that you
must print them out in the same order as the URLs are provided to you as
command-line arguments.
*/

var http = require('http');

function simpleGet(url, cb) {
  http.get(url, response => {
    response.setEncoding('utf8');

    var rawData = '';
    response.on('data', data => rawData += data);
    response.on('end', () => {
      cb(null, rawData);
    });

    response.on('error', err => {
      cb(err, null);
    });
  }).on('error', err => {
    cb(err, null);
  });
}

function printResults(results) {
  for (let result of results) {
    console.log(result);
  }
}

function juggle(urls) {
  let numUrls = urls.length;
  var numResponses = 0;
  var results = [];

  urls.forEach((url, i) => {
    simpleGet(url, (err, data) => {
      if (err) throw err;

      numResponses += 1;
      results[i] = data;
      if (numResponses == numUrls) {
        printResults(results);
      }
    });
  });
}

let numUrls = 3;
let urls = process.argv.slice(2, 2 + numUrls);
juggle(urls);
