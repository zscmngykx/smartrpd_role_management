// backend/db.js

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '740217',           // ← 根据你的实际密码填写，如果没有密码就留空
  database: 'personnel'   // ← 这是你刚刚建的数据库名
});

// 尝试连接数据库
db.connect((err) => {
  if (err) {
    console.error('❌ 无法连接数据库:', err);
  } else {
    console.log('✅ 成功连接到 MySQL 数据库 personnel');
  }
});

module.exports = db;
