import { Metadata } from 'next';
import { getAllArticles, getAllCategories } from '@/lib/mdx';
import BlogClient from '@/components/blog/BlogClient';

export const metadata: Metadata = {
  title: 'Blog & Articles — Lahiru Kumarasinghe',
  description:
    'Essays and articles on automotive electronics, UI/UX design, embedded systems, and tech in English and Sinhala.',
};

export default function BlogPage() {
  const articles   = getAllArticles();
  const categories = getAllCategories();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <p className="section-label mb-2">Writing</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4">
          Articles & Journal
        </h1>
        <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          Thoughts on automotive engineering, microcontrollers, UI design, and building physical-digital products.
        </p>
      </div>

      <BlogClient articles={articles} categories={categories} />
    </div>
  );
}
