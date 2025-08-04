// backend/db.js

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',          // ← your cloud database IP
  user: 'root',                  // ← cloud MySQL username
  password: '740217',            // ← cloud MySQL password
  database: 'personnel'          // ← database name
});

// Try to connect to the database
db.connect((err) => {
  if (err) {
    console.error('❌ Failed to connect to MySQL database:', err);
  } else {
    console.log('✅ Successfully connected to MySQL database: personnel');
  }
});

module.exports = db;
