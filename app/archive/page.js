import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
import { formatDate } from '../../lib/format'

export const metadata = {
  title: '文章归档',
  description: '按年份浏览博客里的全部文章。'
}

export default function ArchivePage() {
  const posts = getAllPosts()
  const years = new Map()
  for (const post of posts) {
    const year = post.date?.slice(0, 4) || '未注明日期'
    if (!years.has(year)) years.set(year, [])
    years.get(year).push(post)
  }

  return (
    <div className="container">
      <h1 className="page-title">文章归档</h1>
      <p className="archive-count">共 {posts.length} 篇文章</p>
      {[...years].map(([year, entries]) => (
        <section className="archive-group" key={year}>
          <h2>{year}</h2>
          <ul className="archive-list">
            {entries.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  {post.date && <time dateTime={post.date}>{formatDate(post.date).slice(5)}</time>}
                  <span>{post.title}</span>
                  <span className="archive-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
