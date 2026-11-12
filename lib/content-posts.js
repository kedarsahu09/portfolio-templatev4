import config from '../portfolio.config.json';
import { slugify } from './util';

// Blog posts written in the wizard. Used when the backend is off.
// Each post has: title, date (YYYY-MM-DD), excerpt, tags, content (Markdown).
export function staticPosts() {
  return ((config.blog && config.blog.posts) || [])
    .filter((p) => p.title && p.content)
    .map((p) => ({
      slug: slugify(p.title),
      title: p.title,
      excerpt: p.excerpt || '',
      content: p.content,
      tags: p.tags || [],
      publishedAt: p.date || '',
      status: 'published',
    }))
    .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
}

export function staticPost(slug) {
  return staticPosts().find((p) => p.slug === slug) || null;
}
