'use client'

import { useEffect, useRef } from 'react'

const MODEL_VIEWER_SRC =
  'https://cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js'

export default function ModelViewer({ src, alt = '3D 模型', poster = '' }) {
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true

    const s = document.createElement('script')
    s.type = 'module'
    s.src = MODEL_VIEWER_SRC
    s.async = true
    s.dataset.modelViewer = ''
    document.head.appendChild(s)
  }, [])

  return (
    <model-viewer
      src={src}
      alt={alt}
      poster={poster || undefined}
      camera-controls=""
      auto-rotate=""
      rotation-per-second="25deg"
      camera-orbit="0deg 75deg 105%"
      shadow-intensity="1"
      exposure="1"
      ar=""
      touch-action="pan-y"
    />
  )
}
