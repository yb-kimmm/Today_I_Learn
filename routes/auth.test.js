const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');
const { describe } = require('../models/user');

/*
  afterAll(모든 테스트가 끝난 후)
  beforeEach(각각의 테스트 수행 전 )
  afterEach(각각의 테스트 수행 후 )
*/
beforeAll(async () => {
  //테스트를 수행하기 전 코드
  await sequelize.sync();
});

describe('POST /join', () => {
  test('로그인 수행', (done) => {
    request(app)
      .post('/auth/join')
      .send({
        email: 'dydqls5757@gmail.com',
        nick: 'yb',
        password: '1234',
      })
      .expect('Location', '/')
      .expect(302, done);
  });

  test('비밀번호 틀림', (done) => {
    const message = encodeURIComponent('비밀번호가 일치 하지않습니다.');
    request(app)
      .post('/auth/login')
      .send({
        email: 'dydqls5757@gmail.com',
        password: '1234',
      })
      .expect('Location', `/?loginError=${message}`)
      .expect(302, done);
  });
});

describe('GET /logout', () => {
  test('로그인 되어 있지 않으면 403', (done) => {
    request(app).get('/auth/logout').expect(403, done);
  });

  const agent = request.agent(app);

  beforeEach((done) => {
    agent
      .post('/auth/login')
      .send({
        email: 'dydqls5757@gmail.com',
        password: '1234',
      })
      .end(done);
  });

  test('이미 로그인했으면 redirect /', (done) => {
    const message = encodeURIComponent('로그인한 상태입니다.');
    agent
      .post('/auth/join')
      .send({
        email: 'dydqls5757@gmail.com',
        nick: 'yb',
        password: '1234',
      })
      .expect('Location', `/?error=${message}`)
      .expect(302, done);
  });

  test('로그아웃 수행', (done) => {
    agent.get('/auth/logout').expect('Location', `/`).expect(302, done);
  });
});
