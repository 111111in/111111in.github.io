# NotionNext 部署到 GitHub Pages 完整指南

## 📋 前置准备

### 1. 创建 Notion 数据库

1. 访问模板：https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5
2. 点击右上角 "Duplicate" 复制到你的 Notion
3. 复制页面 ID（浏览器地址栏的 32 位字符串）
4. 在 Notion 中点击 "Share" → 开启 "Share to web"（必须公开）

### 2. 修改配置文件

打开 `blog.config.js`，找到这一行：

```javascript
NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',
```

将 `02ab3b8678004aa69e9e415905ef32a5` 替换为你的 Notion 页面 ID。

## 🚀 部署步骤

### 第一步：初始化 Git 仓库

```bash
cd d:/notion-blog

# 初始化 git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: NotionNext Heo theme"
```

### 第二步：在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名称填写：`111111in.github.io`（必须是这个名字）
3. 选择 Public（公开）
4. **不要**勾选 "Add a README file"
5. 点击 "Create repository"

### 第三步：推送代码到 GitHub

```bash
# 关联远程仓库
git remote add origin https://github.com/111111in/111111in.github.io.git

# 推送代码
git branch -M main
git push -u origin main
```

### 第四步：配置 GitHub Secrets

1. 进入你的 GitHub 仓库
2. 点击 "Settings" → "Secrets and variables" → "Actions"
3. 点击 "New repository secret"
4. 添加密钥：
   - Name: `NOTION_PAGE_ID`
   - Secret: 你的 Notion 页面 ID（32 位字符串）
5. 点击 "Add secret"

### 第五步：启用 GitHub Pages

1. 在仓库中点击 "Settings"
2. 左侧菜单找到 "Pages"
3. Source 选择：`Deploy from a branch`
4. Branch 选择：`gh-pages` 分支，`/ (root)` 目录
5. 点击 "Save"

### 第六步：触发部署

推送代码后，GitHub Actions 会自动运行：

1. 进入仓库的 "Actions" 标签
2. 查看 "Deploy to GitHub Pages" 工作流
3. 等待构建完成（约 3-5 分钟）
4. 完成后访问：https://111111in.github.io

## 🎨 你将获得的效果

✅ Heo 主题完整布局：
- 左侧：Learning And Never Stop + 技术图标网格
- 右侧：个人简历卡片（太空人背景）
- 三个彩色功能卡片（必看精选、热门文章、实用教程）
- 分类标签栏（首页、摘录日记、心情随笔、面试经验）
- 大型文章卡片（渐变背景）
- 右侧黄色个人信息卡片

## 📝 更新博客内容

1. 在 Notion 中编辑你的数据库
2. 推送任意代码到 GitHub（或手动触发 Actions）
3. 等待自动部署完成
4. 刷新网站查看更新

或者手动触发部署：
1. 进入 GitHub 仓库的 "Actions" 标签
2. 选择 "Deploy to GitHub Pages"
3. 点击 "Run workflow"

## ⚠️ 常见问题

### 1. 部署失败？
- 检查 NOTION_PAGE_ID 是否正确设置
- 确保 Notion 页面已设置为公开（Share to web）
- 查看 Actions 日志中的错误信息

### 2. 页面显示 404？
- 等待 5-10 分钟，GitHub Pages 需要时间生效
- 确保 gh-pages 分支已创建
- 检查 Settings → Pages 是否正确配置

### 3. 样式不正常？
- 清除浏览器缓存
- 检查 blog.config.js 中的 LINK 是否为 https://111111in.github.io

### 4. 图片不显示？
- Notion 中的图片建议使用图床
- 或者将图片放在 public 文件夹中

## 🔄 后续更新

每次修改代码后：

```bash
git add .
git commit -m "更新说明"
git push
```

GitHub Actions 会自动重新部署。

## 📚 更多资源

- NotionNext 文档：https://docs.tangly1024.com
- GitHub Actions 文档：https://docs.github.com/actions
- Notion API：https://developers.notion.com

---

完成以上步骤后，你的博客就会部署到 https://111111in.github.io 了！

