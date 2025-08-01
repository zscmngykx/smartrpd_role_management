// backend/routes/roles.js

const express = require('express');
const router = express.Router();
const db = require('../db');

// 🟢 获取所有角色
router.get('/', (req, res) => {
  db.query('SELECT * FROM roles', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 🔵 获取指定角色
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM roles WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('未找到角色');
    res.json(results[0]);
  });
});

// 🟡 添加新角色
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).send('缺少角色名称');
  const sql = 'INSERT INTO roles (name, description) VALUES (?, ?)';
  db.query(sql, [name, description], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name, description });
  });
});

// 🟠 修改角色
router.put('/:id', (req, res) => {
  const { name, description } = req.body;
  const sql = 'UPDATE roles SET name = ?, description = ? WHERE id = ?';
  db.query(sql, [name, description, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('角色已更新');
  });
});
// 
// 🔴 删除角色
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM roles WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('角色已删除');
  });
});

module.exports = router;
// 