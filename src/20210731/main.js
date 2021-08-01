// @ts-check

const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const PORT = 5000;
const fs = require('fs');
// app.use(bodyParser.json());

app.use(express.json());

router.get('/', (req, res) => {
  res.send('Root - GET');
});

const USERS = {
  15: {
    nickname: 'foo',
  },
};

router.param('id', (req, res, next, value) => {
  console.log(`id parameter ${value}`);

  // @ts-ignore
  req.user = USERS[value];
  next();
});

router.get('/:id', (req, res) => {
  // @ts-ignore
  res.send(req.user);
});

router.get('/', (req, res) => {
  // register user
  res.send('User registersd');
});

router.post('/:id/nickname', (req, res) => {
  // req.body :  {"nickname" : "bar"}
  // @ts-ignore
  const { user } = req;
  const { nickname } = req.body;

  console.log(user);

  user.nickname = nickname;
  res.send(`${nickname}`);
});

app.use('/users', router);

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});
