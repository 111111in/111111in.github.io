import { getAllPosts } from '../../lib/posts'
import { siteConfig } from '../../lib/site'

export const dynamic = 'force-static'

const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }
const escapeXml = (value) => String(value).replace(/[&<>"']/g, (char) => entities[char])

export function GET() {
  const items = getAllPosts().map((post) => {
    const url = escapeXml(new URL(`/posts/${encodeURIComponent(post.slug)}/`, siteConfig.url))
    return `<item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      ${post.date ? `<pubDate>${new Date(post.date).toUTCString()}</pubDate>` : ''}
      <description>${escapeXml(post.summary)}</description>
    </item>`
  })

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${escapeXml(siteConfig.url)}</link>
    <description>${escapeXml(siteConfig.intro)}</description>
    <language>zh-CN</language>
    <atom:link href="${escapeXml(new URL('/rss.xml', siteConfig.url))}" rel="self" type="application/rss+xml" />
    ${items.join('\n    ')}
  </channel>
</rss>`, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  })
}
