//@ts-check

const fs = require('fs');

const data = fs.readFileSync('src/20210726/big-file', 'utf8');

/** @type {Object.<string , number>} */
const numBlocksPerCharater = {
  a: 0,
  b: 0,
};

/** @type {string | undefined} */
let prevCharacter;

for (let i = 0; i < data.length; i += 1) {
  if (data[i] !== prevCharacter) {
    const newCharacter = data[i];

    if (!newCharacter) {
      /* eslint-disable-next-line no-continue */
      continue;
    }

    prevCharacter = newCharacter;
    numBlocksPerCharater[newCharacter] += 1;
  }
}

console.log(numBlocksPerCharater);
