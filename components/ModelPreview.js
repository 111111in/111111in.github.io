'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import ModelViewer from './ModelViewer'

export default function ModelPreview({ model }) {
  const [active, setActive] = useState(false)
  const stage = useRef(null)
  const title = model.title || '3D 模型'

  function activate() {
    stage.current.focus()
    setActive(true)
  }

  return (
    <figure className="hero-model">
      <div className="hero-model-stage" ref={stage} tabIndex={-1} aria-label={title}>
        {active ? (
          <ModelViewer src={model.src} alt={title} poster={model.poster} />
        ) : (
          <button className="model-preview" type="button" onClick={activate}>
            {model.poster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={model.poster} alt="" fetchPriority="high" />
            )}
            <span className="model-preview-action">
              <span aria-hidden="true">↻</span> 旋转模型
            </span>
          </button>
        )}
      </div>
      <figcaption className="hero-model-caption">
        <span>{title}</span>
        <Link className="text-link" href="/3d">进入 3D 展示 <span aria-hidden="true">↗</span></Link>
      </figcaption>
    </figure>
  )
}
