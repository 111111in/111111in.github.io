import { getAllSlugs, getPostBySlug } from '../../../lib/posts'
import { formatDate } from '../../../lib/format'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    title: post ? `${post.title} · llllllin` : 'llllllin'
  }
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="container">
        <div className="empty">文章不存在。</div>
      </div>
    )
  }

  return (
    <div className="container">
      <article className="post">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            {post.date && <time>{formatDate(post.date)}</time>}
            {post.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </header>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  )
}
