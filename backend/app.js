// backend/app.js

// 1️⃣ 引入所需模块
const express = require('express');
const cors = require('cors');
const app = express();

// 2️⃣ 使用中间件（处理跨域请求 + JSON 请求体）
app.use(cors());
app.use(express.json());

// 3️⃣ 引入角色相关的路由文件（我们稍后写）
const roleRoutes = require('./routes/roles');  // 路径要对！

// 4️⃣ 把 /roles 接口挂载到 roleRoutes 上
app.use('/roles', roleRoutes);

// 5️⃣ 启动服务器
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ 角色管理系统后端已运行:http://localhost:${PORT}`);
});
