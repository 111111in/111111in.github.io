import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import PostCard from '../components/PostCard'
import Profile from '../components/Profile'
import ModelPreview from '../components/ModelPreview'
import { siteConfig } from '../lib/site'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5)
  const photos = (siteConfig.photos || []).filter((photo) => photo.src)
  const model3d = siteConfig.model3d || {}
  const showModel = Boolean(model3d.showOnHome && model3d.src)

  return (
    <div className="container">
      <section className="hero" aria-labelledby="profile-name">
        <div className="hero-top">
          <Profile />

          {showModel && (
            <ModelPreview model={model3d} />
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

      <section className="post-list" aria-labelledby="recent-posts">
        <div className="section-heading">
          <h2 className="section-title" id="recent-posts">最新文章</h2>
          {posts.length > 0 && (
            <Link className="text-link" href="/archive">全部文章 <span aria-hidden="true">→</span></Link>
          )}
        </div>
        {posts.length === 0 ? (
          <p className="empty">还没有发布文章。</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </section>
    </div>
  )
}
