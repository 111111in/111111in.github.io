import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

function readPostFile(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { data, content }
}

export function getAllSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getAllPosts() {
  return getAllSlugs()
    .map((slug) => {
      const result = readPostFile(slug)
      if (!result) return null
      const { data } = result
      return {
        slug,
        title: data.title || slug,
        date: data.date ? new Date(data.date).toISOString() : null,
        summary: data.summary || '',
        tags: Array.isArray(data.tags) ? data.tags : []
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const result = readPostFile(slug)
  if (!result) return null
  const { data, content } = result
  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : null,
    summary: data.summary || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    html: marked.parse(content)
  }
}
