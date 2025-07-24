// backend/routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// 🟢 获取所有用户
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
