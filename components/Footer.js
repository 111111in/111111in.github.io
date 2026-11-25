import { siteConfig } from '../lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <a href="/rss.xml">RSS 订阅</a>
      </div>
    </footer>
  )
}
