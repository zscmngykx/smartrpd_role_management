// backend/app.js

// 1️⃣ 引入所需模块
const express = require('express');
const cors = require('cors');
const app = express();

// 2️⃣ 使用中间件（处理跨域请求 + JSON 请求体）
app.use(cors());
app.use(express.json());

// 3️⃣ 引入路由文件
const roleRoutes = require('./routes/roles');   // 角色接口
const userRoutes = require('./routes/users');   // 🆕 用户接口

// 4️⃣ 路由挂载
app.use('/roles', roleRoutes);
app.use('/users', userRoutes);   // 🆕 添加此行

// 5️⃣ 启动服务器
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ 角色管理系统后端已运行: http://localhost:${PORT}`);
});
