import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug } from '../../../lib/posts'
import { formatDate } from '../../../lib/format'
import Comments from '../../../components/Comments'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    title: post?.title,
    description: post?.summary || undefined
  }
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) notFound()

  return (
    <div className="container post-container">
      <article className="post">
        <header className="post-header">
          <Link href="/archive" className="text-link post-back">
            <span aria-hidden="true">←</span> 文章归档
          </Link>
          <h1>{post.title}</h1>
          {post.summary && <p className="post-description">{post.summary}</p>}
          <div className="post-meta">
            {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
            {post.readingTime && <span>阅读 {post.readingTime}</span>}
            {post.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </header>

        {post.cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="post-cover" src={post.cover} alt={post.title} />
        )}

        <div className={post.headings.length > 1 ? 'post-layout' : undefined}>
          {post.headings.length > 1 && (
            <nav className="post-toc" aria-labelledby="post-toc-title">
              <h2 id="post-toc-title">本文目录</h2>
              <ul>
                {post.headings.map(({ id, title }) => (
                  <li key={id}><a href={`#${id}`}>{title}</a></li>
                ))}
              </ul>
            </nav>
          )}
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      <div className="post-comments"><Comments /></div>
    </div>
  )
}
