// backend/routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// 🟢 获取所有用户及其角色
router.get('/', (req, res) => {
  const sql = `
    SELECT 
      users.id,
      users.name,
      users.email,
      users.phone,
      roles.name AS role
    FROM users
    LEFT JOIN user_roles ON users.id = user_roles.user_id
    LEFT JOIN roles ON user_roles.role_id = roles.id
    ORDER BY users.id;
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ 获取用户及角色失败:", err);
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

module.exports = router;
