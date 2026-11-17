import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
import { formatDate } from '../../lib/format'

export const metadata = {
  title: '归档 · llllllin'
}

export default function ArchivePage() {
  const posts = getAllPosts()

  return (
    <div className="container">
      <h1 className="page-title">归档</h1>
      <ul className="archive-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <span>{post.title}</span>
              <time>{post.date ? formatDate(post.date) : ''}</time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
