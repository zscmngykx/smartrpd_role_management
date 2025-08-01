# 使用官方 Node.js 18 版本作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json 并安装依赖
COPY package*.json ./
RUN npm install

# 拷贝后端全部代码
COPY . .

# 启动服务（监听 3001 端口）
EXPOSE 3001
CMD ["node", "app.js"]
