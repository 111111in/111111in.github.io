// ============ 网站信息（改这里即可，无需改组件代码） ============
export const siteConfig = {
  name: 'llllllin',
  bio: '全栈开发 · 记录与分享',
  // 头像：把图片放到 public/images/ 下，填 '/images/xxx.png'；或填外部图片 URL。留空则显示字母头像
  avatar: '',

  // 社交链接（支持 icon 类型：github / email / twitter / rss / link）
  social: [
    { type: 'github', label: 'GitHub', href: 'https://github.com/111111in' },
    { type: 'email', label: '邮箱', href: 'mailto:you@example.com' },
    { type: 'rss', label: 'RSS', href: 'https://111111in.github.io' }
  ],

  // ============ 评论区（Giscus，基于 GitHub Discussions，免费） ============
  // 配置步骤见 README.md；填好 repoId 和 categoryId 后评论区自动开启
  giscus: {
    repo: '111111in/111111in.github.io',
    repoId: '',
    category: 'Announcements',
    categoryId: ''
  },

  // ============ 相册 ============
  // 把图片放到 public/images/ 下，然后在这里列出 src 和说明
  gallery: [
    { src: '/images/placeholder.svg', caption: '示例图片 · 替换成你自己的照片' },
    { src: '/images/placeholder.svg', caption: '示例图片 · 替换成你自己的照片' },
    { src: '/images/placeholder.svg', caption: '示例图片 · 替换成你自己的照片' }
  ]
}
