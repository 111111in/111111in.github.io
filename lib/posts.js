import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked, Marked, Renderer } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

function readPostFile(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { data, content }
}

function readingTime(text) {
  if (!text) return ''
  const cjk = (text.match(/[一-鿿]/g) || []).length
  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
  const minutes = Math.max(1, Math.round(cjk / 300 + words / 200))
  return `约 ${minutes} 分钟`
}

function postMetadata(slug, data) {
  const date = data.date ? new Date(data.date) : null
  return {
    slug,
    title: data.title || slug,
    date: date && Number.isFinite(date.getTime()) ? date.toISOString() : null,
    summary: data.summary || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    cover: data.cover || ''
  }
}

function renderPost(content) {
  const tokens = marked.lexer(content)
  const topLevelHeadings = new Set(tokens.filter((token) => token.type === 'heading' && token.depth === 2))
  const headings = []
  const usedIds = new Set()
  const parser = new Marked({
    renderer: {
      heading(token) {
        if (!topLevelHeadings.has(token)) return false

        const title = this.parser.parseInline(token.tokens, this.parser.textRenderer).trim()
        const slug = title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')
        const base = `section-${slug || 'heading'}`
        let id = base
        for (let suffix = 2; usedIds.has(id); suffix++) id = `${base}-${suffix}`
        usedIds.add(id)
        headings.push({ id, title: title || '章节' })

        return `<h2 id="${id}">${this.parser.parseInline(token.tokens)}</h2>\n`
      },
      table(token) {
        return `<div class="table-scroll" tabindex="0">${Renderer.prototype.table.call(this, token)}</div>\n`
      }
    }
  })

  return { html: parser.parser(tokens), headings }
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
      return postMetadata(slug, result.data)
    })
    .filter(Boolean)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

export function getPostBySlug(slug) {
  const result = readPostFile(slug)
  if (!result) return null
  const { data, content } = result
  return {
    ...postMetadata(slug, data),
    readingTime: readingTime(content),
    ...renderPost(content)
  }
}
