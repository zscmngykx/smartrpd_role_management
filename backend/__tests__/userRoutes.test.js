const request = require('supertest');
const http = require('http');
const app = require('../testApp'); // ✅ 使用不会触发 listen() 的版本

jest.mock('../db', () => ({
  query: (sql, params, cb) => {
    if (typeof params === 'function') {
      cb = params;
    }
    cb(null, [
      {
        id: 1,
        name: 'Ben',
        email: 'ben@example.com',
        phone: '123456',
        location: 'Singapore',
        role: 'admin'
      }
    ]);
  }
}));

let server;

beforeAll((done) => {
  server = http.createServer(app).listen(() => done());
});

afterAll((done) => {
  server.close(done);
});

test('GET /users returns expected user', async () => {
  const res = await request(server).get('/users');
  expect(res.statusCode).toBe(200);
  expect(res.body[0]).toHaveProperty('name', 'Ben'); // ✅ 真实字段
  expect(res.body[0]).toHaveProperty('role', 'admin'); // ✅ 可选增加断言
});
