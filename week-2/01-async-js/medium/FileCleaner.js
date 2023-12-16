const fs = require('node:fs/promises');

async function fileClean() {
  try {
    const data = await fs.readFile('./text.txt', { encoding: 'utf8' });
    console.log(data);
    let cleanData=data.split(' ').filter((e) => e != '').join(' ');
    console.log(cleanData);
    await fs.writeFile('./text.txt', cleanData);
    
  } catch (err) {
    console.log(err);
  }
}
fileClean();