import { getAllPosts } from '../lib/posts'
import PostCard from '../components/PostCard'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="container">
      <section className="hero">
        <h1>你好，我是 llllllin</h1>
        <p className="hero-sub">全栈开发 · 记录与分享</p>
      </section>

      <section className="post-list">
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
