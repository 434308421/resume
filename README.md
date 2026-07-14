# Quiet Scholar Site

面向申博与学术交流的中英双语个人学术主页（Quiet Scholar 视觉方向）。

## 技术栈

- React 19 + Vite 6
- 纯前端静态站
- GitHub Pages 部署（`base: /resume/`）

## 本地启动

```powershell
cd D:\test\quiet-scholar-site
npm install
npm run dev
```

默认地址：`http://127.0.0.1:5173/resume/`

## 构建

```powershell
npm run build
npm run preview
```

构建产物在 `dist/`，也可用于 Nginx 或 OSS 托管。

## 部署

- 仓库：`https://github.com/434308421/resume`
- 工作流：`.github/workflows/deploy.yml`（push 到 `main` 自动发布）
- 预期地址：`https://434308421.github.io/resume/`
- Vite `base` 必须与 Pages 子路径一致：`/resume/`

## 目录

- `src/App.jsx` 页面结构与交互
- `src/content.js` 个人信息占位 + 中英双语文案
- `src/styles.css` Quiet Scholar 样式 token
- `public/assets/` 肖像与纸质纹理资源
- `public/favicon.svg` 站点图标

## 自定义

1. 在 `src/content.js` 的 `profile` 对象中填写 Email / GitHub / Scholar / ORCID / CV
2. 替换 `public/assets/portrait.jpg` 为真实头像
3. 如需 CV PDF，放入 `public/`（例如 `public/cv.pdf`），并在 `profile.cv` 写文件名
4. 项目与论文条目在 `copy.zh` / `copy.en` 中成对维护
