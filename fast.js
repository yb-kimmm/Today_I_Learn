const puppeteer = require('puppeteer');
const fs = require('fs');

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com', { waitUntil: 'networkidle2' });
  await page.pdf({ path: 'test.pdf', format: 'A4' });
  await browser.close();
};

main();

// 스크린샷 예제

// const main = async () => {
//   const browser = await puppeteer.launcher();
//   const page = await browser.newPage();
//   await page.goto('https://google.com'); // 스크린샷 전단계
//   await page.screenshot({ path: 'screenshot.png' });
//   await browser.close();
// };

// main();
