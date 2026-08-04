'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/blog/ArticleCard';
import { Article } from '@/types';

interface FeaturedArticlesProps {
  articles: Article[];
}

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="section-label mb-2">Writing</p>
          <h2 className="section-title">Latest Articles</h2>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-ink-muted dark:text-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark transition-colors group"
        >
          All articles
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.slice(0, 3).map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <ArticleCard article={article} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 sm:hidden text-center">
        <Link href="/blog" className="btn-secondary text-sm">
          All articles <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
