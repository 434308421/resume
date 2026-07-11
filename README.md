# Quiet Scholar Site

面向申博与学术交流的中英双语个人学术主页原型（Quiet Scholar 视觉方向）。

## 技术栈

- React 19 + Vite 6
- 纯前端静态站，可部署到阿里云 ECS / OSS + CDN

## 本地启动

```powershell
cd D:\test\quiet-scholar-site
npm install
npm run dev
```

默认地址：`http://127.0.0.1:5173`

## 构建

```powershell
npm run build
npm run preview
```

构建产物在 `dist/`，可直接用 Nginx 或 OSS 托管。

## 目录

- `src/App.jsx` 页面结构、中英双语内容、交互
- `src/styles.css` Quiet Scholar 样式 token
- `public/assets/` 肖像与纸质纹理资源

## 自定义

在 `src/App.jsx` 的 `copy` 对象中替换姓名、简介、项目、联系方式等文案；替换 `public/assets/portrait.jpg` 为真实头像。
