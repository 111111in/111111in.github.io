import Link from 'next/link'
import { formatDate } from '../lib/format'

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link href={`/posts/${post.slug}`} className="post-card-link">
        <div className="post-card-date">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
        </div>
        {post.cover && (
          <div className="post-card-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt="" loading="lazy" />
          </div>
        )}
        <div className="post-card-body">
          <h3 className="post-card-title">{post.title}</h3>
          {post.summary && <p className="post-card-summary">{post.summary}</p>}
          <div className="post-card-meta">
            {post.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="post-card-arrow" aria-hidden="true">↗</span>
      </Link>
    </article>
  )
}
