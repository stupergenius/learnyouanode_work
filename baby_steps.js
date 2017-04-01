
if (process.argv.length <= 2) { console.log(""); process.exit(); }

let sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
