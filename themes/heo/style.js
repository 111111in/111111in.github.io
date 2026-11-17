/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* ---------- 设计变量（auberginewly 风格：暖白 / 近黑 / 品牌紫） ---------- */
      #theme-heo {
        --heo-accent: #7c3aed;
        --heo-accent-strong: #6d28d9;
        --heo-accent-soft: #a78bfa;
        --heo-fg: #1c1a22;
        --heo-muted: #6b6875;
        --heo-border: #e9e6e1;
        --heo-card: #ffffff;
        --heo-card-2: #f4f2ee;
        --heo-bg: #fbfaf8;
      }
      .dark #theme-heo {
        --heo-accent: #a78bfa;
        --heo-accent-strong: #8b5cf6;
        --heo-accent-soft: #7c3aed;
        --heo-fg: #eceaf1;
        --heo-muted: #9a96a6;
        --heo-border: #25222d;
        --heo-card: #17151d;
        --heo-card-2: #1c1a23;
        --heo-bg: #0e0d12;
      }

      /* ---------- 基础 ---------- */
      body {
        background-color: #fbfaf8;
        color: #1c1a22;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      .dark body {
        background-color: #0e0d12;
        color: #eceaf1;
      }

      #theme-heo {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* 标题更紧凑、更高级 */
      #theme-heo h1,
      #theme-heo h2,
      #theme-heo h3 {
        letter-spacing: -0.02em;
      }

      /* 文本选择 */
      #theme-heo ::selection {
        background: rgba(124, 58, 237, 0.18);
      }
      .dark #theme-heo ::selection {
        background: rgba(167, 139, 250, 0.24);
      }

      /* 滚动条 */
      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.28);
        border-radius: 8px;
        cursor: pointer;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(60, 60, 67, 0.45);
      }
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      /* ---------- 统一边框色（把默认的冷灰 border 换成暖色） ---------- */
      #theme-heo .border {
        border-color: #e9e6e1;
      }
      .dark #theme-heo .border {
        border-color: #25222d;
      }

      /* ---------- 卡片质感：弱阴影 + 细腻 hover ---------- */
      #theme-heo .card {
        background: var(--heo-card);
        border-color: var(--heo-border);
        box-shadow: 0 1px 2px rgba(16, 16, 24, 0.04);
      }

      #theme-heo .heo-post-card {
        background: var(--heo-card);
        border-color: var(--heo-border);
        box-shadow: 0 1px 2px rgba(16, 16, 24, 0.04);
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease,
          border-color 0.3s ease;
      }
      #theme-heo .heo-post-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(16, 16, 24, 0.08);
      }

      /* 侧栏小卡片 */
      #theme-heo #sideRight .card,
      #theme-heo #sideRight > div > div {
        background: var(--heo-card);
        border-color: var(--heo-border);
        box-shadow: 0 1px 2px rgba(16, 16, 24, 0.04);
      }

      /* 英雄区 banner 卡 */
      #theme-heo #banners {
        box-shadow: 0 1px 3px rgba(16, 16, 24, 0.06);
      }

      /* 置顶文章小卡 */
      #theme-heo #top-group > a > div {
        border-color: var(--heo-border);
        box-shadow: 0 1px 2px rgba(16, 16, 24, 0.04);
      }

      /* ---------- 链接 / 强调色统一为品牌紫 ---------- */
      #theme-heo a {
        color: inherit;
      }

      /* ---------- 顶部导航：滚动后更细腻 ---------- */
      #theme-heo #nav {
        transition:
          background-color 0.3s ease,
          box-shadow 0.3s ease,
          border-color 0.3s ease;
      }
      #theme-heo #nav.bg-white {
        border-bottom: 1px solid #e9e6e1;
        box-shadow: 0 1px 0 rgba(16, 16, 24, 0.03);
      }
      .dark #theme-heo #nav.bg-white {
        border-bottom: 1px solid #25222d;
        box-shadow: none;
      }

      /* ---------- 页脚 ---------- */
      #theme-heo footer {
        border-top: 1px solid #e9e6e1;
      }
      .dark #theme-heo footer {
        border-top: 1px solid #25222d;
      }
      #theme-heo #footer-bottom {
        border-top-color: #e9e6e1;
      }
      .dark #theme-heo #footer-bottom {
        border-top-color: #25222d;
      }

      /* ---------- 公告栏中的字体固定白色 ---------- */
      #theme-heo #announcement-content .notion {
        color: white;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }
