import ModelViewer from '../../components/ModelViewer'
import { siteConfig } from '../../lib/site'

export const metadata = {
  title: '3D 展示'
}

export default function ThreeDPage() {
  const m = siteConfig.model3d || {}

  return (
    <div className="container">
      <h1 className="page-title">{m.title || '3D 模型'}</h1>
      {m.caption && <p className="model-caption">{m.caption}</p>}

      <div className="model-stage">
        <ModelViewer
          src={m.src || '/models/model.glb'}
          alt={m.title || '3D 模型'}
          poster={m.poster || ''}
        />
      </div>

      <p className="model-hint">
        拖拽旋转，滚轮或双指缩放。支持 AR 的设备可在空间中查看模型。
      </p>
    </div>
  )
}
