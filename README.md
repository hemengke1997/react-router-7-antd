# react-router-7 antd SSR 服务端渲染项目模板

## 技术栈

- 框架 react-router-7
- CSS tailwindcss
- UI antd5
- 文件路由 remix-flat-routes
- 请求库 ky
- 国际化 i18next
- 部署 pm2
- CI/CD docker

## Docker部署

### 测试环境

```shell
# build
docker build --build-arg NODE_ENV=test -t rr7:1.0 .
# run
docker run -d -p 3000:3000 --name rr7 rr7:1.0
```

### 正式环境

```shell
# build
docker build --build-arg NODE_ENV=production -t rr7:1.0 .
# run
docker run -d -p 3000:3000 --name rr7 rr7:1.0
```
