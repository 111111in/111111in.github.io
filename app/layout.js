import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '../lib/site'

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.intro,
  alternates: {
    types: { 'application/rss+xml': '/rss.xml' }
  }
}

// 避免深色模式闪烁：页面加载前先根据 localStorage / 系统偏好设置 class
const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem('theme')
    var dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)
    if (dark) document.documentElement.classList.add('dark')
  } catch (e) {}
})()
`

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a href="#main" className="skip-link">跳到正文</a>
        <Header />
        <main id="main" className="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
