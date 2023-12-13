const fs = require('node:fs');
const content = 'Some contentafhsdkghsjkdg!';
try {
  fs.writeFileSync('./test1.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}