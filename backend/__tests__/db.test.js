jest.mock('../db', () => ({
  connect: jest.fn((cb) => cb(null)), // 不执行真实连接
  query: jest.fn((sql, params, cb) => cb(null, [])) // 不返回任何数据
}));

const db = require('../db');

test('db.query should return empty array without error', (done) => {
  db.query('SELECT * FROM users', [], (err, result) => {
    expect(err).toBeNull();
    expect(result).toEqual([]);
    done();
  });
});
