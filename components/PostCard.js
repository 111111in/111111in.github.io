import Link from 'next/link'
import { formatDate } from '../lib/format'

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link href={`/posts/${post.slug}`} className="post-card-link">
        {post.cover && (
          <div className="post-card-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt="" loading="lazy" />
          </div>
        )}
        <div className="post-card-body">
          <h2 className="post-card-title">{post.title}</h2>
          {post.summary && <p className="post-card-summary">{post.summary}</p>}
          <div className="post-card-meta">
            {post.date && <time>{formatDate(post.date)}</time>}
            {post.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
