const fs = require('node:fs');

console.log("Reading from file");
fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});



for (let i = 0; i < 100000000; i++) {
       
}

console.log("loop done");