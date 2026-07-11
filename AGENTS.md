# Quiet Scholar Site

## 项目概况
中英双语学术个人主页原型，Quiet Scholar 视觉方向，用于研 0 自我介绍、研究方向与 demo 占位、申博材料展示。

## 用途
本地预览与后续阿里云静态部署的基础站点。

## 技术栈
React 19、Vite 6、纯静态前端。

## 目录结构
- `src/App.jsx`：主页面与 i18n 文案
- `src/styles.css`：Claude 暖色学术样式
- `public/assets/`：肖像与背景纹理
- `dist/`：构建产物（生成）

## 启动 / 测试 / 构建
- 启动：`npm run dev`（`http://127.0.0.1:5173`）
- 构建：`npm run build`
- 预览：`npm run preview`

## 核心模块
单页锚点布局：Hero / About / Research / Projects / Pubs / Contact；语言切换与移动端菜单。

## 关键约定
- 视觉以 Quiet Scholar 预览稿为准：窄栏、衬线标题、列表型研究与折叠项目、暖米底+珊瑚橙强调
- 文案优先在 `copy` 对象维护中英成对内容
- 不引入后端；部署保持静态资源

## 当前状态
已完成 Quiet Scholar 单页原型与 design QA 微调；npm run build 通过；内容多为可替换占位；真实头像/邮箱/链接待用户填写。

## 常见注意事项
- 位于 `D:\test` 父级 Git 仓库内，未单独 `git init`
- Google Fonts 需联网；离线部署可改为本地字体
