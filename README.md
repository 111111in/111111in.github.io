# llllllin 的博客

基于 Next.js + Markdown 的静态博客，支持浅色 / 深色模式，部署在 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 写文章

在 `content/posts/` 目录下新建一个 `.md` 文件，格式如下：

```md
---
title: 文章标题
date: 2026-11-17
summary: 一句话摘要
tags: [标签1, 标签2]
cover: /images/xxx.jpg   # 可选，封面图
---

正文内容（Markdown 语法）
```

## 改个人信息（头像 / 简介 / 社交链接）

编辑 `lib/site.js`：

- `name` / `bio` / `intro` / `avatar` —— 名字、一句话简介、详细介绍、头像（头像图片放到 `public/images/` 下，填 `/images/xxx.png`，留空则显示字母头像）
- `social` —— 社交链接（支持 github / email / twitter / rss / link 图标）
- `photos` —— 首页个人介绍下方的配图列表

## 开启评论区（Giscus）

评论区基于 [Giscus](https://giscus.app/zh-CN)，评论保存在 GitHub Discussions 里，免费无后端。配置步骤：

1. 打开仓库 Settings → 找到 **Discussions**（讨论）并开启
2. 打开 https://github.com/apps/giscus 点击 **Install**，选择本仓库授权
3. 打开 https://giscus.app/zh-CN，填入：
   - 仓库：`111111in/111111in.github.io`
   - 然后它会生成一段配置，里面有 `data-repo-id` 和 `data-category-id` 两个值
4. 把这两个值填到 `lib/site.js` 的 `giscus.repoId` 和 `giscus.categoryId` 里
5. 推送后评论区即自动生效

## 部署

推送到 `main` 分支会自动触发 GitHub Actions 构建并部署到 GitHub Pages。
