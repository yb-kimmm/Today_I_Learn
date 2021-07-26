// @ts-check

//스트림으로 큰 파일 처리하기!
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbb....aabbaabb
// 위와 같dㅡㄴ 파일에서 , a의 연속 구간(a block) 의 개수와 , b의 연속 구간(b block) 의 개수를 세는 프로그램

const { log } = console;
const fs = require('fs');

const rs = fs.createReadStream('src/20210726/big-file', {
  encoding: 'utf-8',
});

/** @type {Object.<string , number>} */
const numBlocksPerCharater = {
  a: 0,
  b: 0,
};
/** @type {string | undefined} */
let prevCharacter;
let chunkCount = 0;

rs.on('data', (data) => {
  if (typeof data !== 'string') {
    return;
  }

  for (let i = 0; i < data.length; i += 1) {
    if (data[i] !== prevCharacter) {
      const newCharacter = data[i];
      chunkCount += 1;
      if (!newCharacter) {
        /* eslint-disable-next-line no-continue */
        continue;
      }

      prevCharacter = newCharacter;
      numBlocksPerCharater[newCharacter] += 1;
    }
  }
});

rs.on('end', () => {
  log('Event: end');
  log('numBlocksPerCharater', numBlocksPerCharater);
  log('chunkCount', chunkCount);
});
