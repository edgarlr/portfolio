import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostsSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostsSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date < post2.date ? 1 : -1))
  return posts
}

export function getProjects() {
  const fileDir = join(process.cwd(), 'lib/projects.json')
  const content = fs.readFileSync(fileDir, 'utf-8')
  const response = JSON.parse(content)

  return response
}
