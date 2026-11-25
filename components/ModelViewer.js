'use client'

import { useEffect, useRef, useState } from 'react'

const MODEL_VIEWER_SRC =
  'https://cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js'

export default function ModelViewer({ src, alt = '3D 模型', poster = '' }) {
  const viewer = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const element = viewer.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => element.toggleAttribute('auto-rotate', !motion.matches)
    const setResult = (result) => {
      window.clearTimeout(timeout)
      setStatus(result)
    }
    const fail = () => setResult('failed')
    const ready = () => setResult('ready')
    const timeout = window.setTimeout(fail, 15000)
    let mounted = true

    element.addEventListener('error', fail)
    element.addEventListener('load', ready)
    motion.addEventListener('change', syncMotion)
    syncMotion()

    import(/* webpackIgnore: true */ MODEL_VIEWER_SRC).catch(() => {
      if (mounted) fail()
    })

    return () => {
      mounted = false
      window.clearTimeout(timeout)
      element.removeEventListener('error', fail)
      element.removeEventListener('load', ready)
      motion.removeEventListener('change', syncMotion)
    }
  }, [src])

  return (
    <div className="model-viewer">
      <model-viewer
        ref={viewer}
        src={src}
        alt={alt}
        camera-controls=""
        rotation-per-second="25deg"
        camera-orbit="0deg 75deg 105%"
        shadow-intensity="1"
        exposure="1"
        ar=""
        touch-action="pan-y"
      />
      {status !== 'ready' && poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="model-viewer-poster" src={poster} alt="" />
      )}
      {status === 'loading' && <p className="model-status" role="status">正在加载 3D 模型…</p>}
      {status === 'failed' && (
        <p className="model-status model-error" role="status">
          模型加载失败。<a href={src} download>下载模型文件</a>
        </p>
      )}
    </div>
  )
}
