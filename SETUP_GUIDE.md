# NotionNext 博客搭建指南

## 🎉 恭喜！你已经成功安装了 NotionNext

当前配置：
- 主题：Heo（你喜欢的那个布局）
- 作者：auberginewly
- 简介：hi 我是一只🍆
- 备案号：赣ICP备2025066072号-2

## 📝 接下来的步骤

### 1. 创建 Notion 数据库（重要！）

NotionNext 使用 Notion 作为内容管理系统（CMS），你需要：

1. **访问模板页面**：
   - 打开：https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5
   - 这是官方提供的博客模板

2. **复制模板到你的 Notion**：
   - 点击右上角的 "Duplicate"（复制）按钮
   - 模板会被复制到你的 Notion 工作区

3. **获取你的 Notion 页面 ID**：
   - 复制后，查看浏览器地址栏
   - URL 格式：`https://www.notion.so/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - 复制那串 32 位的 ID（xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx）

4. **配置页面 ID**：
   - 打开 `blog.config.js` 文件
   - 找到 `NOTION_PAGE_ID` 这一行
   - 替换为你复制的 ID：
   ```javascript
   NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '你的32位ID',
   ```

### 2. 设置 Notion 页面为公开

**非常重要！** 必须将 Notion 页面设置为公开访问：

1. 在 Notion 中打开你复制的页面
2. 点击右上角的 "Share"（分享）按钮
3. 点击 "Share to web"（分享到网络）
4. 确保开关是打开状态（蓝色）

### 3. 启动开发服务器

```bash
cd d:/notion-blog
npm run dev
```

然后访问：http://localhost:3000

### 4. 添加你的文章

在 Notion 数据库中：
- 每一行就是一篇文章
- 填写标题、分类、标签、摘要等信息
- 点击标题进入文章页面编辑内容
- 保存后，刷新博客即可看到更新

### 5. 迁移现有文章

你可以将 Hexo 博客的文章迁移到 Notion：
- 在 Notion 数据库中创建新行
- 复制 Markdown 内容到 Notion 页面
- Notion 支持 Markdown 格式，可以直接粘贴

## 🎨 主题配置

Heo 主题的特色功能：
- ✅ 技术图标展示区域
- ✅ 三个彩色功能卡片
- ✅ 分类标签栏
- ✅ 大型文章卡片
- ✅ 右侧个人信息卡片
- ✅ 深色/浅色模式切换

## 📦 部署到生产环境

### 方式 1：Vercel（推荐，免费）

1. 将代码推送到 GitHub
2. 访问 https://vercel.com
3. 导入你的 GitHub 仓库
4. 在环境变量中设置：
   - `NOTION_PAGE_ID`: 你的 Notion 页面 ID
   - `NEXT_PUBLIC_THEME`: heo
5. 点击部署

### 方式 2：自己的服务器

```bash
npm run build
npm run start
```

## 🔧 常用配置文件

- `blog.config.js` - 主配置文件
- `conf/comment.config.js` - 评论系统配置
- `conf/contact.config.js` - 社交媒体链接
- `public/` - 静态资源（图片、图标等）

## 📚 更多文档

- 官方文档：https://docs.tangly1024.com
- GitHub：https://github.com/tangly1024/NotionNext
- 问题反馈：https://github.com/tangly1024/NotionNext/issues

## ⚠️ 注意事项

1. **Notion 页面必须公开**，否则无法读取数据
2. 每次修改 Notion 内容后，博客会在 60 秒内自动更新
3. 图片建议使用图床（如 Cloudinary、又拍云等）
4. 首次加载可能较慢，这是正常现象

## 🎯 下一步

1. ✅ 已安装 NotionNext
2. ✅ 已配置 Heo 主题
3. ⏳ 创建 Notion 数据库
4. ⏳ 设置页面为公开
5. ⏳ 配置 NOTION_PAGE_ID
6. ⏳ 启动开发服务器
7. ⏳ 添加文章内容

---

如有问题，请参考官方文档或在 GitHub 提 Issue。

