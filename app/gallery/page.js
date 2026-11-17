import { siteConfig } from '../../lib/site'

export const metadata = {
  title: '相册 · llllllin'
}

export default function GalleryPage() {
  const gallery = siteConfig.gallery || []

  return (
    <div className="container">
      <h1 className="page-title">相册</h1>

      {gallery.length === 0 ? (
        <div className="empty">
          还没有图片。在 lib/site.js 的 gallery 数组里添加图片即可。
        </div>
      ) : (
        <div className="gallery">
          {gallery.map((item, i) => (
            <figure key={i} className="gallery-item">
              <a href={item.src} target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.caption || ''} loading="lazy" />
              </a>
              {item.caption && <figcaption>{item.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}
