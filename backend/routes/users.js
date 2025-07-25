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

    const getRoleIdSql = `SELECT id FROM roles WHERE name = ?`;
    db.query(getRoleIdSql, [role], (err, rows) => {
      if (err || rows.length === 0) {
        console.error("❌ 获取角色ID失败:", err);
        return res.status(500).json({ error: "Invalid role name" });
      }

      const roleId = rows[0].id;

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

// ✏️ 更新用户信息及角色映射
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, phone, location, role } = req.body;

  if (!name || !email || !role || !location) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const updateUserSql = `
    UPDATE users
    SET name = ?, email = ?, phone = ?, location = ?
    WHERE id = ?
  `;

  db.query(updateUserSql, [name, email, phone, location, userId], (err) => {
    if (err) {
      console.error("❌ 更新用户失败:", err);
      return res.status(500).json({ error: "Failed to update user" });
    }

    const getRoleIdSql = `SELECT id FROM roles WHERE name = ?`;
    db.query(getRoleIdSql, [role], (err, rows) => {
      if (err || rows.length === 0) {
        console.error("❌ 获取角色ID失败:", err);
        return res.status(500).json({ error: "Invalid role name" });
      }

      const roleId = rows[0].id;

      const upsertRoleSql = `
        INSERT INTO user_roles (user_id, role_id, assigned_at)
        VALUES (?, ?, NOW())
        ON DUPLICATE KEY UPDATE role_id = VALUES(role_id)
      `;

      db.query(upsertRoleSql, [userId, roleId], (err) => {
        if (err) {
          console.error("❌ 更新 user_roles 失败:", err);
          return res.status(500).json({ error: "Failed to update user role" });
        }

        return res.status(200).json({ message: "✅ User updated successfully" });
      });
    });
  });
});

// 🗑 删除用户（先删 user_roles，再删 users，避免外键约束报错）
router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  // 如果你的 user_roles 表没设置 ON DELETE CASCADE，按下面这样先清理关系
  db.beginTransaction((err) => {
    if (err) {
      console.error('❌ 开启事务失败:', err);
      return res.status(500).json({ error: 'Transaction start failed' });
    }

    const delRelationSql = 'DELETE FROM user_roles WHERE user_id = ?';
    db.query(delRelationSql, [userId], (err) => {
      if (err) {
        console.error('❌ 删除 user_roles 失败:', err);
        return db.rollback(() => {
          res.status(500).json({ error: 'Failed to delete relations' });
        });
      }

      const delUserSql = 'DELETE FROM users WHERE id = ?';
      db.query(delUserSql, [userId], (err, result) => {
        if (err) {
          console.error('❌ 删除 users 失败:', err);
          return db.rollback(() => {
            res.status(500).json({ error: 'Failed to delete user' });
          });
        }

        db.commit((err) => {
          if (err) {
            console.error('❌ 提交事务失败:', err);
            return db.rollback(() => {
              res.status(500).json({ error: 'Transaction commit failed' });
            });
          }

          // 如果想要告诉前端到底删没删到，可以检查 result.affectedRows
          // if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });

          res.status(200).json({ message: '✅ User deleted' });
        });
      });
    });
  });
});

module.exports = router;
