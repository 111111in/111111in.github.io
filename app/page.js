import { getAllPosts } from '../lib/posts'
import PostCard from '../components/PostCard'
import Profile from '../components/Profile'
import ModelViewer from '../components/ModelViewer'
import { siteConfig } from '../lib/site'

export default function HomePage() {
  const posts = getAllPosts()
  const photos = siteConfig.photos || []
  const model3d = siteConfig.model3d || {}
  const showModel = Boolean(model3d.showOnHome && model3d.src)

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-top">
          <div className="hero-left">
            <Profile />

            {siteConfig.intro && (
              <p className="hero-intro">{siteConfig.intro}</p>
            )}
          </div>

          {showModel && (
            <div className="hero-model">
              <ModelViewer
                src={model3d.src}
                alt={model3d.title || '3D 模型'}
                poster={model3d.poster || ''}
              />
            </div>
          )}
        </div>

        {photos.length > 0 && (
          <div className="hero-photos">
            {photos.map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={p.src} alt={p.caption || ''} loading="lazy" />
            ))}
          </div>
        )}
      </section>

      <section className="post-list">
        <h2 className="section-title">文章</h2>
        {posts.length === 0 ? (
          <div className="empty">
            还没有文章。在 content/posts 目录下新建一个 .md 文件即可发布。
          </div>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </section>
    </div>
  )
}
