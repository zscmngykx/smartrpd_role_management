# 使用官方 Node.js 镜像构建
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 使用 Nginx 服务构建产物
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
