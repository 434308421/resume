# dev-resume-site

一个免费的多页面程序员个人简历静态站点。

## 页面结构

- `index.html`：首页（Hero + 快速入口）
- `education.html`：教育经历
- `awards.html`：获奖经历
- `certs.html`：个人证书
- `projects.html`：作品项目（含详情弹窗）
- `contact.html`：联系方式

公共资源：

- `assets/style.css`：全站样式
- `assets/main.js`：全站交互逻辑

## 本地预览

1. 双击 `start.bat`
2. 或直接打开 `index.html`

## 免费部署（推荐）

### 方案 1：GitHub Pages（完全免费）

1. 新建 GitHub 仓库（例如 `dev-resume-site`）
2. 上传整个目录（包含 `assets/`）
3. 在仓库 `Settings -> Pages` 中选择 `Deploy from a branch`
4. 选择 `main` 分支和根目录 `/`
5. 保存后约 1-3 分钟可访问

### 方案 2：Vercel 免费版

1. 登录 Vercel，导入 GitHub 仓库
2. Framework Preset 选 `Other`
3. 直接部署

## 维护建议

- 新增模块时，优先新增独立 `xxx.html` 页面
- 导航栏保持所有页面一致
- 页面交互统一放在 `assets/main.js`
- 样式统一放在 `assets/style.css`
