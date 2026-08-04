import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx';
import ArticleHeader from '@/components/blog/ArticleHeader';
import ReadingProgress from '@/components/blog/ReadingProgress';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import NewsletterBlock from '@/components/home/NewsletterBlock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.frontmatter.title} — Lahiru Kumarasinghe`,
    description: article.frontmatter.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getArticleBySlug(slug);

  if (!data) {
    notFound();
  }

  const { frontmatter, content } = data;
  const isSinhala = frontmatter.language === 'si';

  return (
    <>
      <ReadingProgress />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <ArticleHeader article={frontmatter} />

        <div className={`prose prose-lg dark:prose-invert max-w-none ${isSinhala ? 'sinhala-text' : ''}`}>
          <MDXRemote source={content} components={MDXComponents} />
        </div>

        <div className="mt-16 pt-8 border-t border-surface-border dark:border-surface-border-dark">
          <NewsletterBlock />
        </div>
      </article>
    </>
  );
}
