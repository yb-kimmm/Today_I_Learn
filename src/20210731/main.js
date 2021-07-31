// @ts-check

const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('Hello , express!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});
