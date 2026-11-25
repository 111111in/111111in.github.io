// ============ 网站信息（改这里即可，无需改组件代码） ============
export const siteConfig = {
  name: 'llllllin',
  url: 'https://111111in.github.io',
  repository: 'https://github.com/111111in/111111in.github.io',
  // 一句话简介（显示在名字下方）
  bio: '全栈开发 · 记录与分享',
  // 更详细的自我介绍（显示在首页个人介绍区）
  intro: '你好，我是 llllllin，一名热爱全栈开发的学生。这里记录我的学习、项目与思考，欢迎常来逛逛。',
  // 头像：把图片放到 public/images/ 下，填 '/images/xxx.png'；或填外部图片 URL。留空则显示字母头像
  avatar: '',

  // 社交链接（支持 icon 类型：github / email / twitter / rss / link）
  social: [
    { type: 'github', label: 'GitHub', href: 'https://github.com/111111in' },
    { type: 'rss', label: 'RSS 订阅', href: '/rss.xml' }
  ],

  // 首页个人介绍下方的配图（可放 2~4 张），图片放到 public/images/ 下
  photos: [],

  // ============ 评论区（Giscus，基于 GitHub Discussions，免费） ============
  // 配置步骤见 README.md；填好 repoId 和 categoryId 后评论区自动开启
  giscus: {
    repo: '111111in/111111in.github.io',
    repoId: 'R_kgDON1oAiQ',
    category: 'Announcements',
    categoryId: 'DIC_kwDON1oAic4CsBiN'
  },

  // ============ 首页 3D 模型展示 ============
  // 模型文件在 public/models/model.glb，替换同名文件即可
  model3d: {
    src: '/models/model.glb',
    poster: '/images/model-preview.webp', // 更换模型时可同步替换预览图
    title: '我的 3D 模型',
    caption: '拖拽旋转 · 滚轮或双指缩放',
    showOnHome: true // 是否显示在首页头像简介右侧
  }
}
