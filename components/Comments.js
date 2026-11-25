'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../lib/site'

const giscusOrigin = 'https://giscus.app'
const { repo, repoId, category, categoryId } = siteConfig.giscus || {}
const configured = Boolean(repo && repoId && category && categoryId)

function commentTheme() {
  const mode = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  return window.location.protocol === 'https:'
    ? `${window.location.origin}/giscus/${mode}.css`
    : mode
}

export default function Comments() {
  const ref = useRef(null)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    if (!configured) return

    const container = ref.current
    const script = document.createElement('script')
    script.src = `${giscusOrigin}/client.js`
    script.async = true
    script.crossOrigin = 'anonymous'
    script.onerror = () => setUnavailable(true)
    Object.assign(script.dataset, {
      repo,
      repoId,
      category,
      categoryId,
      mapping: 'pathname',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: commentTheme(),
      lang: 'zh-CN',
      loading: 'lazy'
    })

    const frameWindow = () => container.querySelector('iframe.giscus-frame')?.contentWindow
    const syncTheme = () => {
      const theme = commentTheme()
      script.dataset.theme = theme
      frameWindow()?.postMessage({ giscus: { setConfig: { theme } } }, giscusOrigin)
    }

    // iframe 首次完成布局后补发主题，覆盖懒加载期间的配色切换。
    const onFirstResize = (event) => {
      if (event.origin !== giscusOrigin || event.source !== frameWindow()) return
      if (typeof event.data?.giscus?.resizeHeight !== 'number') return
      window.removeEventListener('message', onFirstResize)
      syncTheme()
    }

    const observer = new MutationObserver(syncTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    window.addEventListener('message', onFirstResize)
    container.appendChild(script)

    return () => {
      observer.disconnect()
      window.removeEventListener('message', onFirstResize)
      script.onerror = null
      container.replaceChildren()
    }
  }, [])

  if (!configured) return null

  return (
    <section className="comments" aria-labelledby="comments-title">
      <h2 id="comments-title">评论</h2>
      <div className="giscus" ref={ref} />
      {unavailable && <p className="comments-placeholder" role="status">评论暂时无法加载。</p>}
    </section>
  )
}
