// @ts-check

const { log } = console;
const fs = require('fs');
const rs = fs.createReadStream('src/20210726/jsons', {
  encoding: 'utf-8',
  highWaterMark: 6,
});

let totalSum = 0;

rs.on('data', (data) => {
  log('Event : data');

  if (typeof data !== 'string') {
    return;
  }

  totalSum += data
    .split('\n')
    .map((jsonLine) => {
      try {
        return JSON.parse(jsonLine);
      } catch {
        return undefined;
      }
    })
    .filter((json) => json)
    .map((json) => json.data)
    .reduce((sum, curr) => sum + curr, 0);
});

rs.on('end', () => {
  log('Event : end');
});
