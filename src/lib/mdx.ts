import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Article } from '@/types';

// ─── Content Directory ────────────────────────────────────────────────────────
const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

// ─── Get All Article Slugs ────────────────────────────────────────────────────
export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.(mdx|md)$/, ''));
}

// ─── Get Article by Slug ──────────────────────────────────────────────────────
export function getArticleBySlug(slug: string): {
  frontmatter: Article;
  content: string;
} | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath  = path.join(CONTENT_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    frontmatter: {
      slug,
      title:       data.title       ?? 'Untitled',
      date:        data.date        ?? new Date().toISOString(),
      excerpt:     data.excerpt     ?? '',
      tags:        data.tags        ?? [],
      category:    data.category    ?? 'General',
      readingTime: rt.text,
      language:    data.language    ?? 'en',
      coverImage:  data.coverImage  ?? '',
    },
    content,
  };
}

// ─── Get All Articles (sorted newest first) ───────────────────────────────────
export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticleBySlug(slug)?.frontmatter)
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as Article[];
}

// ─── Get Articles by Category ────────────────────────────────────────────────
export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

// ─── Get All Unique Tags ──────────────────────────────────────────────────────
export function getAllTags(): string[] {
  const allTags = getAllArticles().flatMap((a) => a.tags);
  return [...new Set(allTags)];
}

// ─── Get All Unique Categories ────────────────────────────────────────────────
export function getAllCategories(): string[] {
  const cats = getAllArticles().map((a) => a.category);
  return [...new Set(cats)];
}
