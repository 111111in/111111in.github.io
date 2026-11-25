'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { siteConfig } from '../lib/site'

const links = [
  { href: '/', label: '首页' },
  { href: '/archive', label: '归档' },
  { href: '/lab', label: '实验室' },
  { href: '/3d', label: '3D' }
]

export default function Header() {
  const pathname = usePathname().replace(/\/$/, '') || '/'

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-title">
          {siteConfig.name}<span className="dot">.</span>
        </Link>
        <div className="header-actions">
          <nav className="site-nav" aria-label="主导航">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
                {label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
