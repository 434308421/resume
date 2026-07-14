# Quiet Scholar Site

## 项目概况
中英双语学术个人主页，Quiet Scholar 视觉方向，用于研 0 自我介绍、研究方向、项目占位与申博材料展示。

## 用途
本地预览与 GitHub Pages 静态部署的学术主页。

## 技术栈
React 19、Vite 6、纯静态前端。

## 目录结构
- `src/App.jsx`：主页面交互（语言记忆、导航高亮、移动菜单 a11y）
- `src/content.js`：`profile` 占位 + 中英 `copy` 文案
- `src/styles.css`：Quiet Scholar 暖色学术样式
- `public/assets/`：肖像与背景纹理
- `public/favicon.svg`：站点图标
- `dist/`：构建产物（生成，不入库）

## 启动 / 测试 / 构建
- 启动：`npm run dev`（`http://127.0.0.1:5173/resume/`）
- 构建：`npm run build`
- 预览：`npm run preview`

## 核心模块
单页锚点布局：Hero / About / Research / Projects / Pubs / Contact；语言切换与移动端菜单。

## 关键约定
- 视觉：窄栏、衬线标题、列表型研究与折叠项目、暖米底 + 珊瑚橙强调
- 文案优先在 `src/content.js` 维护中英成对内容
- 个人信息只改 `profile`；未 ready 的链接会显示“待补充/Coming soon”
- 不引入后端；部署保持静态资源
- Vite `base` 固定为 `/resume/`，与 GitHub Pages 子路径一致

## 当前状态
已完成 Quiet Scholar 单页原型、移动端适配、体验与工程优化；内容中联系方式/项目链接/成果仍为占位，待用户填写。

## 常见注意事项
- 独立 Git 仓库，远程 `origin` 指向 `434308421/resume`
- Google Fonts 需联网；离线部署可改为本地字体
- `.npmrc` 仅保留 `fund=false`，不要写本机绝对缓存路径
