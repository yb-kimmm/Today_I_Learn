// @ts-check

const express = require('express');
const app = express();
const PORT = 5000;
const fs = require('fs');

app.use('/', async (req, res, next) => {
  const requestAt = new Date();
  console.log('Middleware 1');

  const fileContent = await fs.promises.readFile('.gitignore');

  // @ts-ignore
  req.requestAt = requestAt;
  req.fileContent = fileContent;
  next();
});

app.use((req, res) => {
  console.log('Middleware 2 ');

  // @ts-check
  res.send(
    `Hello , express!: Request at ${req.requestAt} , ${req.fileContent}`
  );
});

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});
