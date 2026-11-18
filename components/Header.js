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
          <Link href="/3d">3D</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
