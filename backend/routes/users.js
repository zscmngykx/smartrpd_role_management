const express = require('express');
const router = express.Router();
const db = require('../db');

// 🟢 获取所有用户及其角色及位置
router.get('/', (req, res) => {
  const sql = `
    SELECT 
      users.id,
      users.name,
      users.email,
      users.phone,
      users.location,
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


// 🆕 添加新用户及角色映射
router.post('/', (req, res) => {
  const { name, email, phone, location, role } = req.body;

  if (!name || !email || !role || !location) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // 1. 插入 users 表
  const insertUserSql = `
    INSERT INTO users (name, email, phone, location, created_at)
    VALUES (?, ?, ?, ?, NOW())
  `;

  db.query(insertUserSql, [name, email, phone, location], (err, result) => {
    if (err) {
      console.error("❌ 插入用户失败:", err);
      return res.status(500).json({ error: "Failed to insert user" });
    }

    const userId = result.insertId;

    // 2. 查 role_id
    const getRoleIdSql = `SELECT id FROM roles WHERE name = ?`;
    db.query(getRoleIdSql, [role], (err, rows) => {
      if (err || rows.length === 0) {
        console.error("❌ 获取角色ID失败:", err);
        return res.status(500).json({ error: "Invalid role name" });
      }

      const roleId = rows[0].id;

      // 3. 插入 user_roles 表
      const insertUserRoleSql = `
        INSERT INTO user_roles (user_id, role_id, assigned_at)
        VALUES (?, ?, NOW())
      `;

      db.query(insertUserRoleSql, [userId, roleId], (err) => {
        if (err) {
          console.error("❌ 插入 user_roles 失败:", err);
          return res.status(500).json({ error: "Failed to insert user role" });
        }

        return res.status(200).json({ message: "✅ User added successfully" });
      });
    });
  });
});

module.exports = router;
