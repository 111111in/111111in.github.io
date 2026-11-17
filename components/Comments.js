'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '../lib/site'

export default function Comments() {
  const ref = useRef(null)
  const giscus = siteConfig.giscus || {}
  const configured = Boolean(
    giscus.repo && giscus.repoId && giscus.category && giscus.categoryId
  )

  useEffect(() => {
    if (!configured) return

    const load = (theme) => {
      const container = ref.current
      if (!container) return
      container.innerHTML = ''

      const s = document.createElement('script')
      s.src = 'https://giscus.app/client.js'
      s.async = true
      s.crossOrigin = 'anonymous'
      s.setAttribute('data-repo', giscus.repo)
      s.setAttribute('data-repo-id', giscus.repoId)
      s.setAttribute('data-category', giscus.category)
      s.setAttribute('data-category-id', giscus.categoryId)
      s.setAttribute('data-mapping', 'pathname')
      s.setAttribute('data-reactions-enabled', '1')
      s.setAttribute('data-emit-metadata', '0')
      s.setAttribute('data-input-position', 'top')
      s.setAttribute('data-theme', theme)
      s.setAttribute('data-lang', 'zh-CN')
      s.setAttribute('data-loading', 'lazy')
      container.appendChild(s)
    }

    load(document.documentElement.classList.contains('dark') ? 'dark' : 'light')

    // 深色/浅色切换时同步评论区的主题
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains('dark')
      const frame = document.querySelector('iframe.giscus-frame')
      if (frame) {
        frame.contentWindow.postMessage(
          { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
          'https://giscus.app'
        )
      }
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    return () => observer.disconnect()
  }, [configured, giscus.repo, giscus.repoId, giscus.category, giscus.categoryId])

  if (!configured) {
    return (
      <div className="comments comments-placeholder">
        评论功能暂未开启。按照 README.md 里的步骤配置 Giscus 后即可使用评论区。
      </div>
    )
  }

  return <div className="comments" ref={ref} />
}
