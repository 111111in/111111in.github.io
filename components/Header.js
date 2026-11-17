import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-title">
          llllllin<span className="dot">.</span>
        </Link>
        <nav className="site-nav">
          <Link href="/">首页</Link>
          <Link href="/archive">归档</Link>
          <Link href="/gallery">相册</Link>
          <Link href="/about">关于</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
